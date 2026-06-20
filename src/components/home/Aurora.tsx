export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-[oklch(0.55_0.26_295/0.55)] blur-[120px] animate-aurora" />
      <div className="absolute top-20 right-[-10%] h-[480px] w-[480px] rounded-full bg-[oklch(0.62_0.24_320/0.45)] blur-[120px] animate-aurora" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-[-15%] left-1/3 h-[460px] w-[460px] rounded-full bg-[oklch(0.78_0.18_180/0.25)] blur-[120px] animate-aurora" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,oklch(0.13_0.02_280)_70%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
