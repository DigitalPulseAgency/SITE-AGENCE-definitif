import { ArrowRight, Sparkles, Building2, UtensilsCrossed, Home, Zap, Brain, Clock, ExternalLink, ShoppingBag } from 'lucide-react';
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
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-25 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6B3FE8]/30 to-[#6B3FE8]/10 border border-[#6B3FE8]/40 mb-8">
            <Sparkles className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">Notre service phare</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Automatise les tâches<br />qui te bouffent.<br />
            <span className="text-[#6B3FE8]">On te redonne ton temps.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Des applications sur-mesure pour ton métier. Adaptées à ton activité, ton vocabulaire, ta façon de bosser.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]">
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
            <p className="text-xl text-white/60 max-w-2xl mx-auto">3 démos métiers — clique pour les essayer en vrai.</p>
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="text-sm font-medium text-amber-300">⚠️ Ce sont des DÉMOS — ton app sera 100% sur-mesure</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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

          {/* E-COMMERCE — APPROCHE DIFFÉRENTE */}
          <div className="mt-12 bg-gradient-to-br from-[#6B3FE8]/15 to-transparent border border-[#6B3FE8]/30 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#6B3FE8]/20 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-8 h-8 text-[#B59FFF]" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Tu vends en ligne ?</h3>
                <p className="text-white/70 leading-relaxed">
                  Le e-commerce, c'est un autre métier. Pas d'app sur-mesure, mais des leviers précis : e-mailing, publicités Meta/TikTok, optimisation de conversion, fidélisation.
                </p>
              </div>
              <a href="/ecommerce" className="inline-flex items-center gap-2 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap">
                Voir l'offre e-commerce
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
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
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]">
            Je réserve mon diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
