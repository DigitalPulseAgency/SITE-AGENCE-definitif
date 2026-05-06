export default function Bio() {
  return (
    <section id="a-propos" className="py-24 px-6 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/10 border border-white/10"
              style={{ boxShadow: '0 20px 60px rgba(107, 63, 232, 0.35)' }}
            >
              <img
                src="/louis.jpg"
                alt="Louis Humbert, fondateur de DigitalPulse Agency"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top', imageRendering: 'auto' }}
                loading="lazy"
                decoding="async"
                width="1600"
                height="1073"
              />
            </div>
          </div>

          {/* Texte */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/15 border border-[#6B3FE8]/30 mb-6">
              <span className="text-sm font-semibold text-[#B59FFF]">
                Le fondateur
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
              Bonjour, moi c'est <span className="text-[#6B3FE8]">Louis.</span>
            </h2>

            <div className="text-base md:text-lg text-white/75 leading-relaxed">
              <p className="mb-4">
                9 ans dans le bâtiment, sur les chantiers, à voir des patrons compétents perdre leurs soirées dans la paperasse au lieu de les passer avec leur famille.
              </p>

              <p className="mb-4">
                On est en 2026. Et la façon de travailler n'a plus rien à voir avec celle d'il y a 2 ans. <strong className="text-white font-semibold">L'IA est en train de tout changer</strong> — pas demain, maintenant. Et les entreprises qui s'y mettent dès aujourd'hui prennent une avance que les autres ne rattraperont pas.
              </p>

              <p className="mb-4">
                <span className="block text-violet-300 font-bold text-lg md:text-xl mb-2">4 ans à créer des sites web. 2 ans plongé dans l'IA.</span>
                Pendant que la plupart découvraient à peine ChatGPT, j'implémentais déjà des solutions concrètes chez mes clients. Aujourd'hui je suis spécialisé en <strong className="text-white font-semibold">intelligence artificielle et en développement d'applications sur-mesure</strong> — d'abord avec WordPress et Shopify, aujourd'hui en code sur-mesure pour des sites qui convertissent vraiment et des automatisations qui te font gagner des heures chaque semaine.
              </p>

              <p className="mb-4">
                J'ai commencé par tester mes solutions là où je connaissais le terrain : <strong className="text-white font-semibold">un ami maçon, un pote carrossier, un pisciniste, un peintre, l'entreprise de conciergerie de ma mère, l'entreprise de sécurité de mon père</strong> (13 ans d'existence). Résultat : <strong className="text-white font-semibold">plusieurs heures gagnées par semaine, à chaque fois.</strong>
              </p>

              <p className="mb-4">
                Aujourd'hui je me concentre sur les domaines que je connais le mieux : <strong className="text-white font-semibold">garages automobiles</strong> (mécaniciens, carrossiers), <strong className="text-white font-semibold">artisans du bâtiment</strong> (piscinistes, climatiseurs, maçons), conciergeries, restauration, sécurité.
              </p>

              <p className="mb-4">
                Mais soyons clairs : <strong className="text-white font-semibold">chaque entreprise perd du temps sur des tâches répétitives à faible valeur</strong>. Et chaque heure perdue, c'est une heure que tu ne passes pas avec tes proches, ou sur ce qui fait vraiment grandir ton business.
              </p>

              <p className="mb-6">
                Mon job, c'est de te rendre ce temps-là.
              </p>

              <p className="text-white font-semibold text-lg leading-relaxed border-l-4 border-[#6B3FE8] pl-5 py-1">
                Réserve un diagnostic gratuit. Tu repars avec une vision claire de ce que tu peux automatiser dans ton activité. Que tu travailles avec moi ou pas, tu y gagnes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
