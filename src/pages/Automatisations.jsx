import { ArrowRight, Sparkles, Building2, UtensilsCrossed, Home, Zap, Brain, Clock, ExternalLink, ShoppingBag, Wrench } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Automatisations() {
  const metiers = [
    {
      id: 'btp',
      icon: Building2,
      nom: 'Artisans du bâtiment',
      desc: 'Devis, chantiers, factures, photos, agenda. Tout dans une app simple, pensée pour le terrain.',
      exemples: 'Maçon · Plombier · Électricien · Peintre · Carreleur · Paysagiste',
      url: '/demo/btp',
      gradient: 'from-orange-500/20 to-amber-500/5',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-300'
    },
    {
      id: 'auto',
      icon: Wrench,
      nom: 'Mécaniciens & carrossiers',
      desc: 'Gestion atelier, dossiers sinistres, stock pièces, communication client, planning. Deux apps pensées pour les pros de l\'auto : mécanique et carrosserie.',
      exemples: 'Mécanique générale · Diagnostic · Carrosserie · Peinture · Sinistres',
      url: '/demo/auto',
      gradient: 'from-amber-400/20 to-yellow-500/5',
      iconBg: 'bg-amber-400/20',
      iconColor: 'text-amber-300'
    },
    {
      id: 'restaurant',
      icon: UtensilsCrossed,
      nom: 'Restaurants',
      desc: 'Réservations, fidélisation client, gestion des stocks, menus dynamiques. Une solution sur-mesure pour ton resto.',
      exemples: 'Pizzeria · Restaurant · Brasserie · Food truck · Bistrot',
      url: '/demo/restaurant',
      gradient: 'from-red-500/20 to-rose-500/5',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-300'
    },
    {
      id: 'conciergerie',
      icon: Home,
      nom: 'Conciergerie immobilière',
      desc: 'Gestion des biens, planning ménage, communication propriétaires/voyageurs, automatisations Airbnb.',
      exemples: 'Conciergerie Airbnb · Gestion locative · Location courte durée',
      url: '/demo/conciergerie',
      gradient: 'from-emerald-500/20 to-teal-500/5',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-300'
    }
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Vois ce qu'on a déjà construit.</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">4 démos métiers — clique pour les essayer en vrai.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metiers.map((metier) => {
              const Icon = metier.icon;
              return (
                <a key={metier.id} href={metier.url} className={`group relative bg-gradient-to-br ${metier.gradient} border border-white/10 rounded-3xl p-6 hover:border-[#6B3FE8]/50 transition-all hover:scale-[1.02] flex flex-col`}>
                  <div className={`w-14 h-14 rounded-2xl ${metier.iconBg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${metier.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{metier.nom}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed flex-grow">{metier.desc}</p>
                  <div className="text-xs text-white/50 mb-4 leading-relaxed">{metier.exemples}</div>
                  <div className="inline-flex items-center gap-2 text-[#B59FFF] font-semibold group-hover:gap-3 transition-all">
                    Essayer la démo
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* SITE E-COMMERCE */}
          <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">Tu as besoin d'un site pour vendre tes produits en ligne ?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                C'est du sur-mesure — le tarif dépend du besoin de chaque entreprise. On en discute lors du diagnostic.
                <br />
                <span className="text-white/80">Pour un <strong className="text-white">site vitrine simple</strong> : <strong className="text-[#B59FFF]">350€ au lieu de 700€</strong> — offre valable jusqu'à fin juin.</span>
              </p>
            </div>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              En discuter
              <ArrowRight className="w-4 h-4" />
            </a>
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
