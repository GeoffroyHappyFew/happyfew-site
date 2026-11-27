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
  return Response.json({ ok: true });
}
