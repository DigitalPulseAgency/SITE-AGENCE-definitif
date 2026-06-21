import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Bot, Instagram, Search, Star, Megaphone, PhoneCall, FileText, ArrowRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";

const services = [
  {
    icon: PhoneCall,
    title: "Réceptionniste IA vocal",
    href: "/automatisations",
    desc: "Un réceptionniste IA qui répond au téléphone à ta place, 24h/24 : il renseigne, qualifie et prend les rendez-vous.",
    bullets: ["Répond aux appels 24/7", "Qualifie & prend les RDV", "Ne rate plus jamais un client"],
  },
  {
    icon: Bot,
    title: "Solution IA sur-mesure",
    href: "/automatisations",
    desc: "On centralise les tâches chronophages : devis, plannings, relances, avis, reporting.",
    bullets: ["Devis depuis photos", "Archivage auto", "Alertes maintenance"],
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    href: "/publicite",
    desc: "Spécialiste Google Ads. On vous place en haut de Google pour générer des appels et des devis — là où le SEO prend des mois.",
    bullets: ["100% Google Ads (Search & Maps)", "Résultats quasi instantanés", "Gestion à partir de 300 € · sur-mesure"],
    highlight: true,
  },
  {
    icon: Instagram,
    title: "Réseaux sociaux",
    href: "/reseaux-sociaux",
    desc: "Focus Instagram pour toucher ton audience locale. Planning mensuel + réponses aux DM.",
    bullets: ["Planning de contenu", "Stories & reels", "Modération comm."],
  },
  {
    icon: Globe,
    title: "Site sur-mesure",
    href: "/sites-internet",
    desc: "Un site dans ta charte, pensé pour convertir tes visiteurs locaux. Livré en 1 à 2 semaines.",
    bullets: ["Design unique (pas de template)", "Mobile-first", "SEO local de base inclus"],
  },
  {
    icon: Star,
    title: "Création de fiche Google",
    href: "/fiche-google",
    desc: "On crée et on gère ta fiche Google Business pour te rendre visible localement et récolter des avis.",
    bullets: ["Création + optimisation complète", "Photos & mises à jour mensuelles", "Backlinks stratégiques & avis"],
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-3xl transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.55 0.26 295 / 0.18), transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
      }}
    >
      {children}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Ce qu'on fait</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            Je code. <span className="text-gradient-violet">Et je m'entoure quand il faut.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Je participe moi-même au développement de tes projets. Sur les parties techniques les plus lourdes, je m'appuie sur <strong className="text-foreground">deux développeurs de confiance</strong>, sollicités au cas par cas — pour respecter les délais de livraison fixés dans nos contrats, que ce soit pour ton site, tes automatisations ou tes réseaux. En tant que <strong className="text-foreground">fondateur de l'agence, je reste impliqué dans le développement</strong>, tout en gardant le cap sur ce qui compte : le relationnel avec mes clients et l'acquisition de nouveaux.
          </p>
        </motion.div>

        {/* SERVICES PRINCIPAUX (premium) */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TiltCard className="h-full p-7 border-2 border-[#6B3FE8]/50 shadow-[0_0_45px_rgba(107,63,232,0.30)] bg-gradient-to-br from-[var(--violet)]/[0.12] to-transparent">
                <Link to={s.href} className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)] shadow-lg shadow-[var(--violet)]/40">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-[var(--violet-glow)]/30 bg-[var(--violet)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--violet-glow)]">Premium</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--mint)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--violet-glow)] transition group-hover:gap-3">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* SERVICES SECONDAIRES (compacts, moins mis en avant) */}
        <p className="mt-12 mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Et aussi</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {services.slice(3).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={s.href}
                className="group flex h-full items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 transition hover:border-[var(--violet)]/40 hover:bg-white/[0.04]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-[var(--violet-glow)]">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">{s.title}</span>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-[var(--violet-glow)] transition group-hover:gap-2">Découvrir <ArrowRight className="h-3 w-3" /></span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BANDEAU FLYERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 overflow-hidden rounded-3xl border border-[#6B3FE8]/40 bg-gradient-to-br from-[var(--violet)]/20 to-[var(--violet-glow)]/5 p-6 sm:p-8"
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)] shadow-lg shadow-[var(--violet)]/30">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  Et aussi : tes flyers sur-mesure
                </h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  Resto, garage, salon, artisan, événement… <span className="text-foreground">quelle que soit ton activité</span>, on te crée un flyer pro dans ta charte — pensé pour donner envie d'appeler ou de passer la porte. Prêt à imprimer, livré en 3-5 jours.
                </p>
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col items-start gap-3 lg:w-auto lg:items-end">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold">40€</span>
                <span className="text-sm text-muted-foreground">le flyer</span>
                <span className="rounded-full bg-[var(--mint)]/15 px-3 py-1 text-xs font-semibold text-[var(--mint)]">
                  3 pour 90€ · soit 30€/unité
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--violet)]/30 transition hover:gap-3"
              >
                Commander mes flyers <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
