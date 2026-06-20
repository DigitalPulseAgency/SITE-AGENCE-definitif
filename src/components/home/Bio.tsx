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
              9 ans dans le bâtiment, sur les chantiers, à voir des patrons compétents perdre leurs soirées
              dans la paperasse au lieu de les passer avec leur famille.
            </p>
            <p>
              On est en 2026, et la façon de travailler n'a plus rien à voir avec celle d'il y a 2 ans.
              <span className="text-foreground font-medium"> L'IA change tout — maintenant.</span> Les entreprises
              qui s'y mettent dès aujourd'hui prennent une avance que les autres ne rattraperont pas.
            </p>
            <p>
              Spécialisé en intelligence artificielle et en développement d'applications sur-mesure, je conçois des
              sites qui convertissent vraiment et des automatisations qui te font gagner des heures chaque semaine.
              Un seul interlocuteur, de la création au suivi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
