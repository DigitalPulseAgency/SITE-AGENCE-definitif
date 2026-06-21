import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Aurora } from "./Aurora";
import { Button } from "@/components/ui/button";
import { CAL_LINK } from "@/config/links";
import { Link } from "react-router-dom";

const title = "Plus de clients, moins de tâches,";
const titleAlt = "plus de temps.";

function Words({
  text,
  delay = 0,
  stagger = 0.11,
  duration = 0.95,
  pop = false,
  byLetter = false,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  pop?: boolean;
  byLetter?: boolean;
}) {
  const units = byLetter ? Array.from(text) : text.split(" ");
  return (
    <span className="inline">
      {units.map((u, i) => {
        const content = byLetter ? (u === " " ? " " : u) : u;
        const gap = byLetter ? "" : "mr-[0.25em]";
        return (
          <span key={i} className={`${gap} inline-block align-bottom ${pop ? "" : "overflow-hidden"}`}>
            <motion.span
              initial={pop ? { y: "55%", scale: 0.6, opacity: 0 } : { y: "110%" }}
              animate={pop ? { y: 0, scale: 1, opacity: 1 } : { y: 0 }}
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: pop ? [0.34, 1.56, 0.64, 1] : [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {content}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <Aurora />
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-[var(--violet-glow)] to-[var(--violet)]">
            <Sparkles className="h-3 w-3" />
          </span>
          Diagnostic gratuit · visio 15 min · <span style={{ background: "linear-gradient(90deg,#34d399,#10b981,#059669)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontWeight: 700 }}>offert</span>
        </motion.div>

        <h1 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          <span className="block">
            <Words text={title} stagger={0.14} duration={1.1} />
          </span>
          <span className="mt-3 block text-gradient-flow">
            <Words text={titleAlt} byLetter delay={0.55} stagger={0.03} duration={0.5} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          Sites sur-mesure livrés en 1 à 2 semaines et automatisations IA qui centralisent les tâches chronophages.
          Une agence pour les pros locaux qui veulent gagner du temps — et des clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)] px-7 text-base font-medium text-primary-foreground animate-pulse-glow"
          >
            <a href="#contact">
              <Calendar className="mr-1 h-4 w-4" />
              Je réserve mon diagnostic gratuit
              <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 text-left sm:gap-6"
        >
          {[
            { k: "≈ +12h", v: "Gagnées / semaine", to: "/automatisations", cta: "Découvrir" },
            { k: "0€", v: "Pour démarrer · sans engagement", href: CAL_LINK, cta: "Découvrir" },
          ].map((s, i) => {
            const shine = (
              <span
                aria-hidden="true"
                style={{ animationDelay: `${i * 1.6}s` }}
                className="card-shine pointer-events-none absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
            );
            const inner = (
              <>
                <p className="font-display text-2xl font-semibold sm:text-3xl">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--violet-glow)] transition group-hover:gap-2">
                  {s.cta} <ArrowRight className="h-3 w-3" />
                </span>
              </>
            );
            const cls = "glass group relative overflow-hidden rounded-2xl p-4 sm:p-5 block transition hover:-translate-y-1 hover:border-[var(--violet)]/50";
            return s.href ? (
              <a key={s.k} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>{shine}{inner}</a>
            ) : (
              <Link key={s.k} to={s.to} className={cls}>{shine}{inner}</Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
