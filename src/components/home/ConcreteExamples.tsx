import { motion } from "framer-motion";
import { PhoneCall, Mail, FileText, Receipt, Repeat, UserCheck, ArrowRight } from "lucide-react";
import { CAL_LINK } from "@/config/links";

const adminTasks = [
  { icon: Mail, label: "Lit et trie tous vos mails, et fait remonter les urgents." },
  { icon: FileText, label: "Récupère les demandes de devis depuis votre site, les analyse et génère le devis." },
  { icon: Receipt, label: "Édite les factures et relance automatiquement les impayés." },
  { icon: UserCheck, label: "Recontacte les clients inactifs : satisfaction, besoin, nouvelle prestation." },
];

export function ConcreteExamples() {
  return (
    <section className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Concrètement</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Deux exemples de ce qu'on peut automatiser.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* EXEMPLE 1 — Agent IA vocal vs secrétaire */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--violet)]/15 border border-[var(--violet-glow)]/30 px-3 py-1 text-xs font-semibold text-[var(--violet-glow)]">
              <PhoneCall className="h-3.5 w-3.5" /> Agent IA vocal
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug">
              Une secrétaire au téléphone vous coûte une fortune.
            </h3>

            <div className="mt-6 flex items-end gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Une secrétaire</p>
                <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">≈ 48 000 €<span className="text-base font-medium text-muted-foreground"> /an</span></p>
                <p className="text-xs text-muted-foreground">~4 000 €/mois, charges comprises</p>
              </div>
              <div className="pb-2 text-2xl font-black text-[var(--violet-glow)]">→</div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Un agent IA vocal</p>
                <p className="font-display text-3xl font-bold text-[var(--mint)] sm:text-4xl">jusqu'à 10× moins cher</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Il répond 24h/24, qualifie la demande et prend les rendez-vous — sans congés, sans absence, sans appel manqué.
              Le prix dépend de la complexité et du temps de développement ; comptez en général <span className="text-foreground">3 semaines à 1 mois</span> de mise en place.
            </p>
          </motion.div>

          {/* EXEMPLE 2 — Assistant IA administratif (relance & suivi) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border-2 border-[var(--violet)]/40 bg-gradient-to-br from-[var(--violet)]/15 to-transparent p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--violet)]/15 border border-[var(--violet-glow)]/30 px-3 py-1 text-xs font-semibold text-[var(--violet-glow)]">
              <Repeat className="h-3.5 w-3.5" /> Assistant IA · relance & suivi client
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug">
              Un assistant qui gère tout ce qui vous bouffe vos journées.
            </h3>

            <ul className="mt-6 space-y-3">
              {adminTasks.map((t) => (
                <li key={t.label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)]">
                    <t.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{t.label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              L'accent est mis sur la <span className="text-foreground">relance et le suivi client</span> — là où la plupart des entreprises
              laissent filer du chiffre d'affaires, sans même s'en rendre compte.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--violet)]/30 transition hover:gap-3"
          >
            Voir ce qu'on peut automatiser chez vous <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
