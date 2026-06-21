import { motion } from "framer-motion";

export function Bio() {
  return (
    <section id="a-propos" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <img src="/louis.jpg" alt="Louis Humbert, fondateur de DigitalPulse Agency" className="w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Le fondateur</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Fondateur de DigitalPulse Agency. <span className="text-gradient-violet">Moi, c'est Louis.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              En <span className="text-foreground font-medium">juin 2023</span>, je me suis lancé dans le digital : pendant
              <span className="text-foreground"> un an et demi</span>, j'ai créé des sites internet — pour mon entourage comme pour
              mes propres boutiques en ligne — sur <span className="text-foreground">WordPress et Shopify</span>, bien avant que
              les <span className="text-foreground">outils no-code assistés par l'IA</span> n'existent.
            </p>
            <p>
              À côté, je faisais des <span className="text-foreground">visuels et des formats publicitaires</span>, et je gérais les
              <span className="text-foreground"> publicités sur Google, TikTok et Facebook</span>. J'ai lancé
              <span className="text-foreground"> deux marques</span> en e-commerce.
            </p>
            <p>
              En <span className="text-foreground font-medium">novembre 2024</span>, je me suis lancé dans les
              <span className="text-foreground"> réceptionnistes IA vocaux</span>. Aujourd'hui, je suis vraiment
              <span className="text-foreground font-medium"> spécialisé dans le fait de faire gagner du temps aux entreprises</span> sur
              diverses tâches — selon les problématiques qu'elles rencontrent.
            </p>
            <p>
              Aujourd'hui, ce qui me passionne, c'est de bosser avec les <span className="text-foreground">agences de covering</span> —
              l'automobile, c'est une passion depuis tout petit, et j'ai d'ailleurs pour projet d'ouvrir ma propre
              agence de location de voitures.
            </p>
            <p>
              J'ai les compétences pour faire gagner énormément de <span className="text-foreground">temps et d'argent</span> aux entreprises.
              Je travaille avec deux développeurs à mes côtés : je suis le <span className="text-foreground font-medium">CEO</span>,
              et je reste votre seul interlocuteur, de la création au suivi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
