import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { CAL_LINK } from "@/config/links";

const niches = [
  "Avocats",
  "Notaires",
  "Experts-comptables",
  "Cabinets dentaires",
  "Cabinets médicaux",
  "Kinés",
  "Ostéopathes",
  "Agences immobilières",
  "Agents immobiliers indépendants",
  "Concessionnaires automobiles",
];

export function AIVoiceAgents() {
  return (
    <section className="relative px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border-2 border-[var(--violet)]/40 bg-gradient-to-br from-[var(--violet)]/15 to-transparent p-8 sm:p-12"
        >
          <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[var(--violet-glow)]/20 blur-[120px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--violet)]/20 border border-[var(--violet-glow)]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--violet-glow)]">
              <PhoneCall className="h-3.5 w-3.5" />
              Réceptionniste IA vocal
            </div>

            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Un <span className="text-gradient-flow">réceptionniste IA</span> qui répond au téléphone à votre place.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              24h/24, il renseigne vos appelants, <span className="text-foreground">qualifie la demande</span> et
              <span className="text-foreground"> prend les rendez-vous</span> directement dans votre agenda. Idéal pour les métiers
              où chaque appel manqué, c'est un client perdu.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-[var(--violet-glow)]">Pensé pour des métiers comme</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {niches.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground"
                >
                  {n}
                </span>
              ))}
            </div>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--violet)]/30 transition hover:gap-3"
            >
              Tester un réceptionniste IA pour mon métier <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
