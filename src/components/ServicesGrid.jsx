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
      featured: false,
      cardStyle: {
        background: 'linear-gradient(160deg, #ddd6fe 0%, #c4b5fd 60%, #a78bfa 100%)',
        borderColor: 'rgba(124, 58, 237, 0.15)',
        color: '#5b21b6'
      }
    },
    {
      icon: Instagram,
      titre: 'Réseaux sociaux',
      prix: 'Dès 69€',
      prixSuffix: 'pour 1 mois',
      desc: 'Création de contenu, publications, engagement.',
      url: '/reseaux-sociaux',
      featured: false,
      cardStyle: {
        background: 'linear-gradient(160deg, #fce7f3 0%, #f5d0fe 50%, #d8b4fe 100%)',
        borderColor: 'rgba(168, 85, 247, 0.15)',
        color: '#86198f'
      }
    },
    {
      icon: MapPin,
      titre: 'Fiche Google',
      prix: '130€ + 50€',
      prixSuffix: '/mois',
      desc: 'Apparaître en premier sur Google dans ta zone.',
      url: '/fiche-google',
      featured: false,
      cardStyle: {
        background: 'linear-gradient(160deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)',
        borderColor: 'rgba(99, 102, 241, 0.15)',
        color: '#3730a3'
      }
    },
    {
      icon: Sparkles,
      titre: 'Automatisations IA',
      prix: 'Sur-mesure',
      desc: 'Apps sur-mesure pour ton métier. Notre service phare.',
      url: '/automatisations',
      featured: true,
      cardStyle: {
        background: 'linear-gradient(160deg, #7c3aed 0%, #9333ea 50%, #c026d3 100%)',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        color: '#ffffff'
      }
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Choisis ce dont tu as besoin.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Pas de package fourre-tout. Chaque service est conçu pour résoudre un problème précis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <a
                key={i}
                href={service.url}
                style={service.cardStyle}
                className="group relative rounded-2xl p-5 border-[0.5px] flex flex-col min-h-[200px] md:min-h-[240px] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/10"
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B3FE8] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                    ⚡ Service phare
                  </div>
                )}

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-white/50 backdrop-blur transition-colors duration-200 group-hover:bg-white/70">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold mb-2">{service.titre}</h3>

                <div className="mb-3 flex items-baseline gap-2 flex-wrap">
                  {service.prixOriginal && (
                    <span className="text-sm opacity-50 line-through">{service.prixOriginal}</span>
                  )}
                  <span className="text-2xl font-bold">{service.prix}</span>
                  {service.prixSuffix && (
                    <span className="text-sm opacity-70">{service.prixSuffix}</span>
                  )}
                </div>

                {service.promo && (
                  <div className="inline-block bg-white/50 backdrop-blur text-xs font-semibold px-2 py-1 rounded mb-3 self-start">
                    {service.promo}
                  </div>
                )}

                <p className="opacity-85 text-sm leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>

                <div className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all">
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
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#6B3FE8] transition-all text-sm group"
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
