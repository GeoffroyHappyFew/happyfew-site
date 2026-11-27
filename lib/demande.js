// Envoie une demande (contact, visite, estimation, alerte) au serveur du site.
export async function envoyerDemande(payload) {
  try {
    const res = await fetch('/api/demandes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) return { ok: true };
    return { ok: false, error: data.error || 'Envoi impossible pour le moment.' };
  } catch {
    return { ok: false, error: 'Connexion impossible. Réessayez ou appelez-nous.' };
  }
}

// Champ piège invisible pour les robots (laisser vide).
export const PIEGE_STYLE = { position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' };
