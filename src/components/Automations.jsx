import React from 'react';
import { Receipt, PhoneCall, CalendarCheck, MessageSquare, Star, Settings2, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Automations() {
  const cards = [
    {
      icon: <Receipt size={24} />,
      title: "Devis & factures",
      subtitle: "Génération automatique, relances intelligentes.",
      desc: "Tes devis se créent tout seuls à partir d'un simple message. Les relances partent automatiquement aux clients qui n'ont pas signé. Tu signes plus, tu cours moins après."
    },
    {
      icon: <PhoneCall size={24} />,
      title: "Réceptionniste vocal IA",
      subtitle: "Ne rate plus jamais un appel.",
      desc: "Un assistant vocal IA qui répond 24/7, prend les demandes, filtre les appels non pertinents, prend les RDV, et t'envoie un résumé. Parfait pour restaurants, pizzerias, climatiseurs, artisans et conciergeries débordés par les appels entrants."
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "Prise de RDV automatisée",
      subtitle: "Ton agenda se remplit pendant que tu bosses.",
      desc: "Les clients prennent RDV en ligne, reçoivent leurs rappels automatiques, et toi tu n'as plus qu'à les accueillir. Idéal pour salons de beauté, coiffeurs, carrossiers, esthéticiennes."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Gestion des messages & SAV",
      subtitle: "Instagram, TikTok, LinkedIn, mails\u00A0: centralisés et filtrés.",
      desc: "On automatise les réponses de premier niveau, on trie les messages qui demandent ton attention, et on traite le SAV des e-commerçants qui croulent sous les mails. Tu ne passes plus tes soirées à répondre."
    },
    {
      icon: <Star size={24} />,
      title: "Avis Google & e-réputation",
      subtitle: "Plus d'avis. Mieux gérés. Automatiquement.",
      desc: "QR codes personnalisés à donner à tes clients satisfaits, détection automatique des nouveaux avis, réponses intelligentes personnalisées par IA. Tu deviens visible, actif, et crédible sur Google."
    },
    {
      icon: <Settings2 size={24} />,
      title: "Outils métier sur mesure",
      subtitle: "Une appli construite pour toi.",
      desc: "Gestion de flotte de véhicules pour carrossiers (mise en ligne/retrait automatique sur ton site), rapports d'intervention pour femmes de ménage de conciergeries (photo + vocal → compte-rendu écrit + preuve litige), centralisation d'outils internes… Tu l'imagines, on le construit."
    }
  ];

  return (
    <section className="section bg-alt" id="automatisations">
      <div className="container">
        
        <FadeIn className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>On automatise ce qui te bouffe tes journées.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Au-delà des réseaux sociaux et du site, on construit pour toi des automatisations sur mesure qui gèrent les tâches répétitives à ta place. <strong style={{ color: 'var(--text-main)' }}>Tu nous dis ce qui te fait perdre du temps, on construit la solution.</strong>
          </p>
        </FadeIn>

        <FadeIn style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Chaque entreprise a ses propres galères&nbsp;: devis à envoyer, appels entrants à filtrer, factures à relancer, avis clients à gérer… Ces tâches prennent des heures chaque semaine, et elles ne te rapportent pas un seul nouveau client.<br/><br/>
            <strong>On les automatise. Proprement. Sur mesure. Avec l'IA quand c'est pertinent.</strong>
          </p>
        </FadeIn>

        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          {cards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                height: '100%',
                border: '1px solid #E5E7EB',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
              }} className="auto-card">
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--purple-light)', color: 'var(--purple-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{card.title}</h3>
                <p style={{ fontWeight: 600, color: 'var(--purple-primary)', marginBottom: '1rem', fontSize: '0.9375rem' }}>{card.subtitle}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} style={{ marginBottom: '4rem' }}>
          <div style={{
            backgroundColor: 'var(--purple-light)',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            borderLeft: '4px solid var(--purple-primary)',
          }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Exemple concret&nbsp;: conciergerie immobilière</h4>
            <div style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>
              <p style={{ marginBottom: '1rem' }}>Tu gères 15 biens sur Airbnb. À chaque fin de séjour, ta femme de ménage nettoie le bien et signale les éventuels dégâts. Aujourd'hui, elle t'appelle, t'envoie une photo WhatsApp, tu oublies, tu ne réclames jamais le remboursement à Airbnb, tu perds de l'argent.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Avec notre système</strong>&nbsp;: elle enregistre un vocal + prend une photo depuis son téléphone. L'IA transcrit, structure, génère un <strong>compte-rendu d'intervention horodaté, avec photo jointe et description du litige</strong>. Toi et le propriétaire recevez automatiquement le PDF. En cas de litige, <strong>tu as une preuve propre et datée pour obtenir le remboursement Airbnb immédiatement</strong>.</p>
              <p><strong>Résultat</strong>&nbsp;: ta femme de ménage gagne 15 minutes par intervention, tu récupères systématiquement ton argent, et tes propriétaires adorent la transparence.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="text-center" delay={0.3}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            <strong>Comment on procède&nbsp;: Chaque projet est unique.</strong> On commence par comprendre tes vraies galères pendant le diagnostic. Puis on te propose la solution adaptée&nbsp;: du petit workflow en quelques jours à l'application complète construite sur plusieurs semaines. <strong>Tu valides chaque étape, tu maîtrises ton budget.</strong>
          </p>
          <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', marginBottom: '1rem' }}>
            Discuter de mon projet d'automatisation <ArrowRight size={20} />
          </a>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Tarif sur devis · Selon la complexité et l'ampleur du projet · Diagnostic gratuit pour en discuter.
          </p>
        </FadeIn>

      </div>
      <style>{`
        .auto-card:hover {
          transform: translateY(-4px);
          border-color: var(--purple-primary);
          box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.1);
        }
      `}</style>
    </section>
  );
}
