import { Globe, Instagram, MapPin, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Globe,
      titre: 'Site internet',
      prix: 'Dès 280€',
      promo: 'Jusqu\'à fin mai',
      desc: 'Site qui convertit. Essentiel ou Premium avec SEO auto.',
      url: '/sites-internet',
      featured: false
    },
    {
      icon: Instagram,
      titre: 'Réseaux sociaux',
      prix: 'Dès 69€',
      prixSuffix: 'pour 1 mois',
      desc: 'Création de contenu, publications, engagement.',
      url: '/reseaux-sociaux',
      featured: false
    },
    {
      icon: MapPin,
      titre: 'Fiche Google',
      prix: '130€ + 50€',
      prixSuffix: '/mois',
      desc: 'Apparais en premier sur Google dans ta zone.',
      url: '/fiche-google',
      featured: false
    },
    {
      icon: Sparkles,
      titre: 'Automatisations IA',
      prix: 'Sur-mesure',
      desc: 'Apps sur-mesure pour ton métier. Notre service phare.',
      url: '/automatisations',
      featured: true
    }
  ];

  return (
    <section id="services" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Choisis ce dont tu as besoin.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Pas de package fourre-tout. Chaque service est conçu pour résoudre un problème précis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <a
                key={i}
                href={service.url}
                className={`group relative rounded-3xl p-6 transition-all hover:scale-[1.03] flex flex-col ${
                  service.featured
                    ? 'bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8]/50 hover:border-[#6B3FE8]'
                    : 'bg-white/[0.03] border border-white/10 hover:border-[#6B3FE8]/40'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B3FE8] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    ⚡ Service phare
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  service.featured ? 'bg-[#6B3FE8]/30' : 'bg-[#6B3FE8]/15'
                }`}>
                  <Icon className="w-7 h-7 text-[#B59FFF]" />
                </div>

                <h3 className="text-xl font-bold mb-2">{service.titre}</h3>

                <div className="mb-3 flex items-baseline gap-2 flex-wrap">
                  {service.prixOriginal && (
                    <span className="text-sm text-white/40 line-through">{service.prixOriginal}</span>
                  )}
                  <span className="text-2xl font-bold text-white">{service.prix}</span>
                  {service.prixSuffix && (
                    <span className="text-sm text-white/60">{service.prixSuffix}</span>
                  )}
                </div>

                {service.promo && (
                  <div className="inline-block bg-[#6B3FE8]/20 text-[#B59FFF] text-xs font-semibold px-2 py-1 rounded mb-3 self-start">
                    {service.promo}
                  </div>
                )}

                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-[#B59FFF] font-semibold text-sm group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Lien e-commerce séparé */}
        <div className="mt-8 text-center">
          <a
            href="/ecommerce"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#B59FFF] transition-all text-sm group"
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
