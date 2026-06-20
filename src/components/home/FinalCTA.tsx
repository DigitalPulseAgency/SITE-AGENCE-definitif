import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora } from "./Aurora";

export function FinalCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden px-4 py-28 sm:px-6">
      <Aurora />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--mint)]" />
          Créneaux dispo cette semaine
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-semibold sm:text-6xl"
        >
          15 minutes. <span className="text-gradient-violet">Pour voir ce qu'on peut faire pour toi.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-muted-foreground"
        >
          On regarde ton activité, tes tâches répétitives et chronophages, et ce que tu pourrais automatiser dès la semaine prochaine. Tu repars avec un plan d'action, même si on ne bosse pas ensemble.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9"
        >
          <Button asChild size="lg" className="h-14 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)] px-8 text-base animate-pulse-glow">
            <a href="mailto:hello@digitalpulse.agency?subject=Diagnostic%20gratuit">
              <Calendar className="mr-2 h-5 w-5" />
              Je réserve mon diagnostic gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">Visio 15 min · offert · sans engagement</p>
        </motion.div>
      </div>
    </section>
  );
}
