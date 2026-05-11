import { Globe, Instagram, MapPin, Sparkles, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* === SECTION 1 : SERVICES PHARES === */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nos services phares
          </h2>
          <p className="text-base text-white/60 mt-2">
            Les 2 leviers les plus puissants pour transformer ton business.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* CARD 1 — Automatisations IA (mise en valeur N°1) */}
          <div className="group relative p-8 rounded-2xl border-2 border-[#6B3FE8]/50 bg-gradient-to-br from-[#6B3FE8]/20 to-[#0a0a0f] shadow-[0_0_40px_rgba(107,63,232,0.35)] flex flex-col overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(107,63,232,0.5)] hover:border-[#6B3FE8]/70">
            {/* Ambiance lumineuse — gradient radial coin sup. gauche */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(107,63,232,0.25),transparent_55%)]"
            />
            <Sparkles className="w-10 h-10 text-[#6B3FE8] mb-5 animate-pulse opacity-90 relative" strokeWidth={2} style={{ animationDuration: '3s' }} />

            <h3 className="text-2xl font-bold mb-1">Automatisations IA</h3>
            <p className="text-violet-400 font-semibold mb-4">Ton app sur-mesure</p>

            <p className="text-white/70 leading-relaxed mb-5">
              3 à 5 automatisations centralisées dans un seul outil. Adapté à ton métier (BTP, garages, conciergeries, restaurants...). Ça tourne 24h/24, 7j/7. Tu te libères de la charge mentale.
            </p>

            <ul className="space-y-2 mb-7">
              {[
                'Application développée sur-mesure',
                '3 à 5 automatisations centralisées',
                'Démos disponibles par métier'
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-white/85">
                  <Check className="w-4 h-4 text-[#6B3FE8] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/automatisations"
              className="mt-auto inline-flex items-center justify-center self-start gap-2 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Découvrir
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* CARD 2 — Site internet (rôle support) */}
          <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_15px_rgba(255,255,255,0.03)] flex flex-col transition-all duration-300 ease-out hover:scale-[1.01] hover:-translate-y-1 hover:border-[#6B3FE8]/30 hover:shadow-[0_0_25px_rgba(107,63,232,0.2)]">
            <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-violet-500/5 border border-violet-400/15 mb-5">
              <span className="text-xs font-semibold text-violet-300/70">Très demandé</span>
            </div>

            <Globe className="w-10 h-10 text-white mb-5" strokeWidth={2} />

            <h3 className="text-2xl font-bold mb-1">Site internet</h3>
            <p className="text-violet-400 font-semibold mb-4">Qui convertit vraiment</p>

            <p className="text-white/70 leading-relaxed mb-5">
              Site vitrine ou Premium avec SEO automatisé. Conçu pour transformer tes visiteurs en clients. Hébergement, maintenance et formation inclus.
            </p>

            <ul className="space-y-2 mb-7">
              {[
                'Vitrine dès 350€ (au lieu de 600€)',
                'Premium à 1500€ (paiement en 3x)',
                'SEO automatisé 99€/mois en Premium'
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-white/85">
                  <Check className="w-4 h-4 text-[#6B3FE8] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/sites-internet"
              className="mt-auto inline-flex items-center justify-center self-start gap-2 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Découvrir
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* === SECTION 2 : AUSSI DISPONIBLE === */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white/80">
              Aussi disponible
            </h3>
            <p className="text-sm text-white/50 mt-2">
              Des leviers complémentaires pour rester visible au quotidien.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

            {/* CARD 3 — Réseaux sociaux */}
            <div className="card-secondary group p-7 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col transition-all duration-300 ease-out hover:bg-white/[0.05] hover:border-violet-400/40 hover:shadow-[0_0_25px_rgba(107,63,232,0.3)] hover:scale-[1.02]">
              <Instagram className="w-7 h-7 text-violet-300 mb-4" strokeWidth={2} />
              <h4 className="text-xl font-semibold mb-2 text-white">Réseaux sociaux</h4>
              <p className="text-sm text-white/65 leading-relaxed mb-4">
                Gestion Instagram clé en main. Création de contenu, publications, prospection ciblée.
              </p>
              <p className="text-base font-bold text-violet-400 mb-4">Dès 69€</p>
              <a
                href="/reseaux-sociaux"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 group-hover:gap-2 transition-colors"
              >
                <span>Voir l'offre</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* CARD 4 — Fiche Google */}
            <div className="card-secondary group p-7 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col transition-all duration-300 ease-out hover:bg-white/[0.05] hover:border-violet-400/40 hover:shadow-[0_0_25px_rgba(107,63,232,0.3)] hover:scale-[1.02]">
              <MapPin className="w-7 h-7 text-violet-300 mb-4" strokeWidth={2} />
              <h4 className="text-xl font-semibold mb-2 text-white">Fiche Google</h4>
              <p className="text-sm text-white/65 leading-relaxed mb-4">
                Apparaître en premier sur Google dans ta zone géographique. Setup + maintenance.
              </p>
              <p className="text-base font-bold text-violet-400 mb-4">130€</p>
              <a
                href="/fiche-google"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 group-hover:gap-2 transition-colors"
              >
                <span>Voir l'offre</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

        {/* === LIEN E-COMMERCE (sous Aussi disponible) === */}
        <div className="mt-12 text-center">
          <a
            href="/ecommerce"
            className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-all text-sm group"
          >
            <ShoppingBag className="w-4 h-4" />
            Tu vends en ligne ? Voir l'offre dédiée e-commerce
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
