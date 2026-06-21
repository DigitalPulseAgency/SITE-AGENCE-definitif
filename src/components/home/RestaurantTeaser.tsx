import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UtensilsCrossed, ArrowRight } from "lucide-react";

export function RestaurantTeaser() {
  return (
    <section className="relative px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/5">
              <UtensilsCrossed className="h-5 w-5 text-[var(--violet-glow)]" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Vous êtes un restaurant ?</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Je reçois aussi beaucoup de demandes côté <span className="text-foreground">restauration</span> : je crée un site avec
                <span className="text-foreground"> prise de commande et réservation en ligne 24/7</span>, et j'automatise vos tâches répétitives (agent vocal, avis, anti-gaspillage…).
                Snacks compris.
              </p>
            </div>
          </div>
          <Link
            to="/restaurants"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--violet)]/50 hover:gap-3"
          >
            Voir la page restaurants <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
