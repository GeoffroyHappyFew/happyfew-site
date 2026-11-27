import { createClient } from '@supabase/supabase-js';

const TYPES = ['contact', 'visite', 'estimation', 'alerte'] as const;
type Type = (typeof TYPES)[number];

function clean(v: unknown, max: number): string | null {
  if (typeof v !== 'string') return null;
  const s = v.trim().slice(0, max);
  return s || null;
}

export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: 'Service indisponible' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Requête invalide' }, { status: 400 });
  }

  // Champ piège anti-robots : rempli = robot, on fait comme si tout allait bien.
  if (typeof body.site === 'string' && body.site.length > 0) {
    return Response.json({ ok: true });
  }

  const type = body.type as Type;
  if (!TYPES.includes(type)) {
    return Response.json({ ok: false, error: 'Type de demande inconnu' }, { status: 400 });
  }

  const email = clean(body.email, 200);
  const telephone = clean(body.telephone, 40);
  if (!email && !telephone) {
    return Response.json({ ok: false, error: 'Indiquez un e-mail ou un téléphone.' }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: 'L’adresse e-mail semble incorrecte.' }, { status: 400 });
  }

  const details = body.details && typeof body.details === 'object' ? body.details : null;
  const row = {
    type,
    nom: clean(body.nom, 120),
    email,
    telephone,
    message: clean(body.message, 4000),
    bien_ref: clean(body.bien_ref, 20),
    details: details && JSON.stringify(details).length <= 4000 ? details : null,
  };

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from('demandes').insert(row);
  if (error) {
    console.error('Insertion demande impossible', error.message);
    return Response.json({ ok: false, error: 'Envoi impossible pour le moment.' }, { status: 500 });
  }
  await notifier(row).catch((e) => console.error('Notification e-mail impossible', e));
  return Response.json({ ok: true });
}

const LIBELLES: Record<Type, string> = {
  contact: 'Nouveau message',
  visite: 'Demande de visite',
  estimation: 'Demande d’estimation',
  alerte: 'Nouvelle alerte',
};

function esc(v: unknown): string {
  return String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);
}

// Envoie un e-mail de notification via Resend si la clé est configurée.
async function notifier(row: {
  type: Type; nom: string | null; email: string | null; telephone: string | null;
  message: string | null; bien_ref: string | null; details: unknown;
}) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;
  const from = process.env.RESEND_FROM || 'Site Happy Few <onboarding@resend.dev>';
  const lignes: [string, unknown][] = [
    ['Nom', row.nom], ['E-mail', row.email], ['Téléphone', row.telephone],
    ['Bien', row.bien_ref], ['Message', row.message],
  ];
  if (row.details && typeof row.details === 'object') {
    for (const [k, v] of Object.entries(row.details as Record<string, unknown>)) lignes.push([k, v]);
  }
  const html = `<h2 style="font-family:Arial,sans-serif">${LIBELLES[row.type]}</h2><table style="font-family:Arial,sans-serif;font-size:14px">${lignes
    .filter(([, v]) => v !== null && v !== undefined && v !== '')
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555">${esc(k)}</td><td style="padding:4px 0">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      reply_to: row.email || undefined,
      subject: `${LIBELLES[row.type]}${row.nom ? ' — ' + row.nom : ''}${row.bien_ref ? ' (' + row.bien_ref + ')' : ''}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
