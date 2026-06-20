const items = [
  "Restaurants", "Garagistes", "Carrosseries", "Conciergeries", "Plombiers",
  "Électriciens", "Coiffeurs", "Boulangers", "Maçons", "Esthéticiennes",
  "Paysagistes", "Menuisiers", "Cabinets dentaires", "Pharmacies", "Fleuristes",
];

export function SectorsMarquee() {
  return (
    <section aria-label="Secteurs accompagnés" className="relative border-y border-white/5 bg-white/[0.015] py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="flex shrink-0 items-center gap-3 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--violet-glow)]" />
              <span className="font-display text-base">{it}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
