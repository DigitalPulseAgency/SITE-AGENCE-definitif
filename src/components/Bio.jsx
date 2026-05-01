export default function Bio() {
  return (
    <section id="bio" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(107, 63, 232, 0.25)' }}
            >
              <img
                src="/louis.jpg"
                alt="Louis Humbert, fondateur DigitalPulse Agency"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* Texte court et impactant */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-6">
              <span className="text-sm font-semibold text-[#B59FFF]">
                Le fondateur
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Salut, moi c'est <span className="text-[#6B3FE8]">Louis.</span>
            </h2>

            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <p>
                Depuis <strong className="text-white">4 ans</strong>, je gère des réseaux sociaux et je crée des sites web pour mon entourage. Depuis <strong className="text-white">6 mois</strong>, j'implémente l'IA dans les entreprises locales pour automatiser ce qui peut l'être.
              </p>

              <p>
                À force de voir les résultats que ça donnait, je me suis dit : <em className="text-[#B59FFF] not-italic">pourquoi pas en faire mon métier à 100% ?</em>
              </p>

              <p>
                Aujourd'hui, ce qui me fait kiffer c'est simple : <strong className="text-white">ramener des clients à des entrepreneurs locaux</strong>, structurer leur business, leur faire gagner du temps. Moins de stress, moins de charge mentale, plus de soirées libres.
              </p>

              <p className="text-white/60 italic">
                C'est ce que tu cherches ? On est faits pour bosser ensemble.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
