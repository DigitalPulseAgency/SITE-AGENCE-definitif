import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, Users, Send, Receipt, BarChart3, MapPin } from "lucide-react";

const capabilities = [
  { icon: PhoneCall, label: "Réceptionniste IA vocal 24/7" },
  { icon: CalendarCheck, label: "Prise de rendez-vous automatique" },
  { icon: Users, label: "Génération & qualification de leads" },
  { icon: Send, label: "Relances clients & devis automatiques" },
  { icon: Receipt, label: "Facturation & administratif automatisés" },
  { icon: BarChart3, label: "Centralisation des données & reporting" },
];

export function AIInfra() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12"
        >
          {/* halo */}
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--violet)]/20 blur-[120px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[var(--violet-glow)]">
              <MapPin className="h-3.5 w-3.5" />
              Basés dans le Vaucluse
            </div>

            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Des <span className="text-gradient-flow">infrastructures d'IA sur-mesure</span> pour les agences de covering.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Je développe des infrastructures IA qui <span className="text-foreground">centralisent, dans un seul outil</span>,
              les automatisations qui vous <span className="text-foreground">font gagner du temps</span> : réceptionniste IA vocal, prise de rendez-vous de pose,
              devis et relances. Des solutions entièrement <span className="text-foreground">sur-mesure</span>, pensées pour les agences de covering.
            </p>

            {/* Capacités */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c) => (
                <div key={c.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)]">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-foreground">{c.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              On automatise ce qui vous fait <span className="text-foreground">perdre du temps</span> : appels manqués pendant la pose,
              <span className="text-foreground"> devis et relances</span>, prise de rendez-vous de pose, suivi client.
              On cible précisément les <span className="text-foreground">tâches répétitives à faible valeur ajoutée</span> de votre métier.
              Résultat : 4 à 12h récupérées par semaine, des coûts réduits et des milliers d'euros économisés sur quelques mois.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
