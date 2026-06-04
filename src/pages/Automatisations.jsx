import { ArrowRight, Sparkles, Building2, UtensilsCrossed, Home, Zap, Brain, Clock, ExternalLink, ShoppingBag, Wrench } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Automatisations() {
  const metiers = [
    {
      id: 'restaurant',
      icon: UtensilsCrossed,
      nom: 'Restaurants',
      desc: 'Réservations, fidélisation client, gestion des stocks, menus dynamiques.',
      exemples: 'Pizzeria · Restaurant · Brasserie · Bistrot',
      url: '/demo/restaurant',
      headerFrom: '#b91c1c',
      headerTo: '#7f1d1d',
      glow: '0 0 50px rgba(239,68,68,0.35)',
      border: 'rgba(239,68,68,0.5)',
    },
    {
      id: 'conciergerie',
      icon: Home,
      nom: 'Conciergerie immobilière',
      desc: 'Gestion des biens, planning ménage, communication propriétaires/voyageurs.',
      exemples: 'Conciergerie Airbnb · Gestion locative',
      url: '/demo/conciergerie',
      headerFrom: '#065f46',
      headerTo: '#064e3b',
      glow: '0 0 50px rgba(16,185,129,0.35)',
      border: 'rgba(16,185,129,0.5)',
    },
    {
      id: 'btp',
      icon: Building2,
      nom: 'Artisans du bâtiment',
      desc: 'Devis, chantiers, factures, photos, agenda. App pensée pour le terrain.',
      exemples: 'Maçon · Plombier · Électricien · Carreleur · Paysagiste',
      url: '/demo/btp',
      headerFrom: '#c2410c',
      headerTo: '#7c2d12',
      glow: '0 0 50px rgba(249,115,22,0.35)',
      border: 'rgba(249,115,22,0.5)',
    },
    {
      id: 'auto',
      icon: Wrench,
      nom: 'Mécaniciens & carrossiers',
      desc: 'Gestion atelier, dossiers sinistres, stock pièces, communication client.',
      exemples: 'Mécanique · Diagnostic · Carrosserie · Sinistres',
      url: '/demo/auto',
      headerFrom: '#b45309',
      headerTo: '#78350f',
      glow: '0 0 50px rgba(245,158,11,0.35)',
      border: 'rgba(245,158,11,0.5)',
    },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-25 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6B3FE8]/30 to-[#6B3FE8]/10 border border-[#6B3FE8]/40 mb-8">
            <Sparkles className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">Notre service phare</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Avant, tu gérais tout à la main.<br />
            Tu perdais des heures sur des tâches répétitives.<br />
            <span className="text-[#6B3FE8]">Aujourd'hui, ça tourne tout seul.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            On implémente un système sur-mesure qui centralise tout ce qui te prend du temps dans ton activité. Il tourne 24h/24, toute l'année — et te fait récupérer plusieurs heures par semaine dès le premier mois.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5">
            Réserver mon diagnostic gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* DÉMOS MÉTIERS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
              Des apps pensées pour ton activité.<br />
              <span className="text-white/70 font-medium">Une solution apportée à chaque problème rencontré dans le passé.</span>
            </h2>
            <p className="text-xl font-semibold text-[#B59FFF] mt-6">
              Essaye la démo dans ton domaine, directement par toi-même.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {metiers.map((metier) => {
              const Icon = metier.icon;
              return (
                <a
                  key={metier.id}
                  href={metier.url}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c14] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
                  style={{ '--glow': metier.glow, '--border': metier.border }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = metier.glow;
                    e.currentTarget.style.borderColor = metier.border;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {/* Header coloré */}
                  <div
                    className="flex items-center justify-center py-10"
                    style={{ background: `linear-gradient(135deg, ${metier.headerFrom}, ${metier.headerTo})` }}
                  >
                    <Icon className="w-14 h-14 text-white drop-shadow-lg" />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-lg font-bold mb-2 text-white">{metier.nom}</h3>
                    <p className="text-white/60 text-sm leading-relaxed flex-grow mb-4">{metier.desc}</p>
                    <div className="text-xs text-white/30 mb-5 leading-relaxed">{metier.exemples}</div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                      Essayer la démo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">On intervient principalement dans ces secteurs.</h2>
          <p className="text-white/50 text-center mb-12">Si ton activité est dans l'un d'eux, on a probablement déjà construit quelque chose pour toi.</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                titre: 'Bien-être',
                items: ['Instituts de beauté', 'Massage · Spa', 'Manucure · Coiffure'],
              },
              {
                titre: 'Restauration',
                items: ['Restaurants', 'Pizzerias', 'Brasseries'],
              },
              {
                titre: 'Sécurité',
                items: ['Alarme', 'Sécurité événementielle', 'Agents de sécurité', 'Maîtres-chiens'],
              },
              {
                titre: 'Nettoyage & Bâtiment',
                items: ['Agences de nettoyage', 'Maçons · Plaquistes', 'Paysagistes · Carreleurs', 'Climaticiens · Plombiers'],
              },
              {
                titre: 'Conciergerie',
                items: ['Conciergerie immobilière', 'Gestion locative centralisée'],
              },
            ].map((secteur, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-[#B59FFF] mb-3 text-sm uppercase tracking-widest">{secteur.titre}</h3>
                <ul className="space-y-1.5">
                  {secteur.items.map((item, j) => (
                    <li key={j} className="text-white/70 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Et si on commençait<br />par <span className="text-[#6B3FE8]">comprendre tes besoins</span> ?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ce que tu fais à la main, et on te dit ce qui pourrait être automatisé.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5">
            Je réserve mon diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
