import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("fr-FR"));
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 3.4, ease: [0.12, 0.9, 0.2, 1] });
      return c.stop;
    }
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { v: 100, s: "%", label: "Chaque projet est conçu entièrement sur mesure." },
  { v: 87, s: "%", label: "D'appels et messages évités grâce aux automatisations" },
  { v: 27, s: "", p: "+", label: "Entreprises accompagnées sur les automatisations" },
  { v: 1, s: "", label: "Un associé chargé du développement et du codage, que je mobilise au cas par cas." },
];

export function Stats() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--violet)]/20 blur-2xl" />
            <p className="font-display text-5xl font-semibold text-gradient-violet sm:text-6xl">
              <Counter to={s.v} suffix={s.s} prefix={(s as any).p ?? ""} />
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
