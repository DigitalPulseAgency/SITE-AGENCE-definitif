import { motion } from "framer-motion";
import { Building2, HeartHandshake } from "lucide-react";

export function ClosingNote() {
  return (
    <section className="relative px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {/* Conciergerie immobilière */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
            <Building2 className="h-5 w-5 text-[var(--violet-glow)]" />
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold">On travaille aussi avec des conciergeries immobilières.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            On a déjà mis en place des choses <span className="text-foreground">vraiment puissantes</span> pour des conciergeries —
            c'est un secteur à forte demande. Si c'est votre métier, on reste à l'écoute : prenons le temps d'en parler pour voir s'il y a quelque chose à construire ensemble.
          </p>
        </motion.div>

        {/* Déprise de pression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
            <HeartHandshake className="h-5 w-5 text-[var(--mint)]" />
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold">Même si on ne travaille pas ensemble.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Ce n'est pas grave. À partir du rendez-vous, je vous donne déjà <span className="text-foreground">plein d'idées concrètes</span>.
            Que vous les mettiez en place avec moi ou de votre côté, vous y gagnerez du temps — maintenant ou dans les mois à venir.
            Aucune pression : on regarde ensemble, et vous décidez.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
