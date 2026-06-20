import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const includes = [
  "SEO mensuel (analyse + optimisation des pages)",
  "Réseaux sociaux (planning + réponses)",
  "Avis Google (relances automatiques)",
  "Automatisations sur-mesure (suivi & ajustements)",
  "Reporting mensuel clair (vues, clics, appels générés)",
  "Un seul interlocuteur, joignable directement",
];

export function MonthlyOffer() {
  return (
    <section id="offre" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 p-1"
          style={{ background: "linear-gradient(135deg, oklch(0.55 0.26 295 / 0.6), oklch(0.78 0.18 150 / 0.3))" }}
        >
          <div className="relative grain overflow-hidden rounded-[1.85rem] bg-background/85 p-8 backdrop-blur sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-[var(--violet-glow)]">
                  Offre mensuelle
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
                  Tout en un, <span className="text-gradient-violet">sans engagement</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Démarre tranquille, arrête quand tu veux. L'offre est pensée pour monter en puissance sur le long terme,
                  pas pour t'enfermer.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--mint)]/20">
                        <Check className="h-3 w-3 text-[var(--mint)]" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-strong rounded-2xl p-6 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Démarrage</p>
                <p className="mt-2 font-display text-5xl font-semibold text-gradient-violet">0 €</p>
                <p className="mt-1 text-sm text-muted-foreground">Diagnostic gratuit · visio 15 min</p>
                <div className="my-5 h-px bg-white/10" />
                <p className="text-sm text-muted-foreground">
                  Tarif mensuel adapté à ton activité, transparent, sans surprise.
                </p>
                <Button asChild size="lg" className="mt-6 w-full rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)]">
                  <a href="#contact">
                    Je réserve mon diagnostic
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">Sans engagement · résiliable chaque mois</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
