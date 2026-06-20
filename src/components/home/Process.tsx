import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Rocket, Repeat } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Diagnostic gratuit · 15 min en visio",
    desc: "On regarde ensemble ce qui te manque, tes tâches répétitives et chronophages, et ce qu'on pourrait automatiser. Tu repars avec un plan, même si on ne bosse pas ensemble.",
    tag: "Étape 1",
  },
  {
    icon: Rocket,
    title: "Site sur-mesure livré en 1 à 2 semaines",
    desc: "On part de ta charte, on conçoit, on rédige, on livre. Tu valides, on met en ligne. Compter 3 à 4 semaines pour un site plus complexe — pas de chantier qui traîne.",
    tag: "Étape 2",
  },
  {
    icon: Repeat,
    title: "Automatisations + suivi mensuel",
    desc: "On installe les automatisations qui te font gagner des heures, on s'occupe du SEO, des réseaux et des avis. Tu reçois un reporting clair chaque mois.",
    tag: "Étape 3",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Comment on bosse ensemble</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            Trois étapes. <span className="text-gradient-violet">Zéro engagement.</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          <div aria-hidden className="absolute left-7 top-0 h-full w-px bg-white/10 sm:left-1/2" />
          <motion.div
            aria-hidden
            style={{ height: lineH }}
            className="absolute left-7 top-0 w-px bg-gradient-to-b from-[var(--violet)] via-[var(--violet-glow)] to-[var(--mint)] sm:left-1/2"
          />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid grid-cols-[56px_1fr] gap-5 sm:grid-cols-2 sm:gap-12 ${i % 2 === 1 ? "sm:[direction:rtl]" : ""}`}
              >
                <div className="flex justify-start sm:[direction:ltr]">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)] shadow-xl shadow-[var(--violet)]/40 ring-8 ring-background">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="sm:[direction:ltr]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--violet-glow)]">{s.tag}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
