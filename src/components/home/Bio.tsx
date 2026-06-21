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
              Ça fait déjà <span className="text-foreground font-medium">2 ans</span> que je suis dans le digital.
              En <span className="text-foreground font-medium">2023</span>, je lançais mes propres marques en dropshipping :
              je créais les sites et je gérais les <span className="text-foreground">publicités TikTok et Google</span>.
              Avant ça, je faisais déjà des visuels, je gérais des pubs Google et Instagram, et je construisais des sites
              sur <span className="text-foreground">WordPress et Shopify</span> — bien avant que des outils comme Lovable existent.
            </p>
            <p>
              En <span className="text-foreground font-medium">novembre 2024</span>, je me suis plongé à fond dans les
              <span className="text-foreground"> agents IA</span> : agents vocaux, automatisation des tâches répétitives
              pour faire gagner du temps aux entreprises. C'est là que je me suis vraiment
              <span className="text-foreground font-medium"> spécialisé dans l'IA</span>.
            </p>
            <p>
              Aujourd'hui, ce qui me passionne, c'est de bosser avec les <span className="text-foreground">agences de covering</span> —
              l'automobile, c'est une passion depuis tout petit, et j'ai d'ailleurs pour projet d'ouvrir ma propre
              agence de location de voitures.
            </p>
            <p>
              J'ai les compétences pour faire gagner énormément de <span className="text-foreground">temps et d'argent</span> aux entreprises.
              Je travaille avec un développeur à mes côtés : je suis le <span className="text-foreground font-medium">CIO</span>,
              et je reste votre seul interlocuteur, de la création au suivi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
