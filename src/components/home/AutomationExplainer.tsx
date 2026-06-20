import { motion } from "framer-motion";
import { Camera, Mic, Sparkles, Send, MessageSquare, CalendarDays, Home, Smartphone } from "lucide-react";

const steps = [
  { icon: Camera, title: "Déclencheur", desc: "Au check-out, la femme de ménage constate un dégât et ouvre la partie « Litige »." },
  { icon: Mic, title: "Photo + voix", desc: "Elle joint une photo et décrit ce qui s'est passé à la voix. C'est tout ce qu'elle a à faire." },
  { icon: Sparkles, title: "IA", desc: "L'IA transcrit le vocal, structure le litige et rédige le dossier de réclamation." },
  { icon: Send, title: "Envoi", desc: "Le dossier part vers Airbnb pour récupérer la caution. Le gérant n'a plus qu'à valider." },
];

const steps2 = [
  { icon: MessageSquare, title: "Messagerie unifiée", desc: "Booking, Airbnb, Abritel : tous les messages voyageurs arrivent au même endroit. Elle répond depuis l'app, sans aller sur chaque plateforme." },
  { icon: CalendarDays, title: "Calendrier centralisé", desc: "Toutes les réservations, toutes les plateformes, réunies dans un seul calendrier." },
  { icon: Home, title: "Suivi de chaque bien", desc: "État du logement, interventions et approvisionnement à prévoir pour les femmes de ménage — tout est suivi, bien par bien." },
  { icon: Smartphone, title: "Tout au même endroit", desc: "Fini de jongler entre 3 sites : elle pilote toute son activité depuis une seule application." },
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Cas client · Conciergerie immobilière</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Une <span className="text-gradient-violet">automatisation</span>, ça fait quoi pour toi ?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Exemple réel : pour une <span className="text-foreground">conciergerie immobilière</span> (gestion d'Airbnb),
              j'ai développé une infrastructure sur-mesure. Quand un litige doit être déclaré au départ des voyageurs,
              la femme de ménage n'a presque rien à faire : depuis l'app (accès restreint), elle ouvre « Litige »,
              crée un dossier, <span className="text-foreground">prend une photo</span> et <span className="text-foreground">décrit le problème à la voix</span>.
            </p>
            <p className="mt-4 text-muted-foreground">
              Derrière, l'IA transcrit, structure le litige et génère un <span className="text-foreground">dossier de réclamation prêt à envoyer à Airbnb</span> —
              pour récupérer la caution ou un remboursement. Le gérant valide, c'est réglé. Le tout branché à ses outils,
              sans logiciel générique ni abonnement à 10 apps.
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

        {/* DEUXIÈME EXEMPLE — layout inversé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-12 border-t border-white/5 pt-16 lg:grid-cols-[1.2fr_1fr] lg:items-center"
        >
          <div className="order-2 lg:order-1">
            <div className="glass-strong relative grain overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4">
                {steps2.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)]">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Cas client · Conciergerie immobilière</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Tout piloté depuis <span className="text-gradient-violet">une seule app</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pour la même conciergerie, j'ai aussi centralisé toute la gestion. Plus besoin d'aller sur
              <span className="text-foreground"> Booking, Airbnb ou Abritel</span> pour parler aux voyageurs :
              tout arrive dans une <span className="text-foreground">messagerie unique</span>, et elle répond directement depuis l'app.
            </p>
            <p className="mt-4 text-muted-foreground">
              Réservations, suivi de chaque bien, approvisionnement des femmes de ménage, calendrier… tout est
              <span className="text-foreground"> réuni au même endroit</span>. Une seule application au lieu de dix outils éparpillés.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
