export default function Bio() {
  return (
    <section id="a-propos" className="py-24 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF]"
              style={{ boxShadow: '0 20px 60px rgba(107, 63, 232, 0.25)' }}
            >
              <img
                src="/louis.jpg"
                alt="Louis Humbert, fondateur de DigitalPulse Agency"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top', imageRendering: 'auto' }}
                loading="lazy"
                decoding="async"
                width="1023"
                height="717"
              />
            </div>
          </div>

          {/* Texte court et impactant */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-6">
              <span className="text-sm font-semibold text-[#6B3FE8]">
                Le fondateur
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Bonjour, moi c'est <span className="text-[#6B3FE8]">Louis.</span>
            </h2>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Depuis <strong className="text-gray-900">4 ans</strong>, je gère des réseaux sociaux et je crée des sites web pour mon entourage. Depuis <strong className="text-gray-900">6 mois</strong>, j'implémente l'IA dans les entreprises locales pour automatiser ce qui peut l'être.
              </p>

              <p>
                Les résultats parlent d'eux-mêmes. Alors j'ai décidé d'<strong className="text-gray-900">en faire mon métier à 100%.</strong>
              </p>

              <p>
                Ce que je fais aujourd'hui : <strong className="text-gray-900">ramener des clients aux entrepreneurs locaux</strong>, structurer leur business, leur faire gagner du temps. Moins de stress, moins de charge mentale, plus de soirées libres.
              </p>

              <p className="text-gray-500 italic">
                Tu veux les mêmes résultats pour ton entreprise ? On en discute.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
