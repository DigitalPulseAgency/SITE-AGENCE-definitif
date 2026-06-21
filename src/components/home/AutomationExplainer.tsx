import { motion } from "framer-motion";
import { PhoneCall, Sparkles, CalendarCheck, Repeat } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Déclencheur", desc: "Un prospect appelle pendant que vous êtes en pose. Vous ne pouvez pas décrocher — le réceptionniste IA vocal prend l'appel à votre place." },
  { icon: Sparkles, title: "IA", desc: "Elle renseigne le client, qualifie la demande (type de véhicule, covering total ou partiel) et structure tout proprement." },
  { icon: CalendarCheck, title: "Rendez-vous de pose", desc: "Le créneau de pose est calé directement dans votre agenda. Aucun aller-retour, aucun appel à rappeler." },
  { icon: Repeat, title: "Relance auto", desc: "Devis envoyé puis relancé automatiquement s'il reste sans réponse. Vous récupérez le client sans y penser." },
];

export function AutomationExplainer() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Cas d'usage · Agence de covering</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Une <span className="text-gradient-violet">automatisation</span>, ça fait quoi pour votre agence ?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Le quotidien d'une <span className="text-foreground">agence de covering</span> : vous êtes en pose, les mains prises,
              et le téléphone sonne. Chaque appel manqué, c'est un devis qui part chez le concurrent. On construit l'infrastructure
              qui <span className="text-foreground">répond, qualifie et prend le rendez-vous</span> à votre place.
            </p>
            <p className="mt-4 text-muted-foreground">
              Derrière, l'IA structure la demande, cale la pose dans votre agenda et <span className="text-foreground">relance les devis</span> toute seule.
              Vous restez concentré sur la pose et la vente — la machine gère le reste, 24h/24.
            </p>
          </div>

          <div className="relative">
            <div className="glass-strong relative grain overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)]">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-display text-sm font-semibold">{s.title}</p>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">étape {i + 1}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
