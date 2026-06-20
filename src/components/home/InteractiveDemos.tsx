import { useState } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Utensils, Wrench, KeyRound, HardHat, Plus, Check, GripVertical, Star, Calendar, Package } from "lucide-react";

const metiers = [
  { id: "resto", label: "Restauration", icon: Utensils },
  { id: "garage", label: "Garage / Carrosserie", icon: Wrench },
  { id: "conciergerie", label: "Conciergerie", icon: KeyRound },
  { id: "artisan", label: "Artisan BTP", icon: HardHat },
];

/* ---------- RESTAURATION ---------- */
type Booking = { id: string; name: string; people: number; time: string };
function RestoDemo() {
  const [bookings, setBookings] = useState<Booking[]>([
    { id: "1", name: "Table Dupont", people: 4, time: "19:30" },
    { id: "2", name: "Mr. Lévy", people: 2, time: "20:00" },
    { id: "3", name: "Famille Garcia", people: 6, time: "20:30" },
  ]);
  const [name, setName] = useState("");
  const [people, setPeople] = useState("2");
  const [time, setTime] = useState("20:15");

  const add = () => {
    if (!name) return;
    setBookings((b) => [...b, { id: crypto.randomUUID(), name, people: Number(people), time }]);
    setName("");
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold">Réservations du soir</p>
          <span className="rounded-full bg-[var(--mint)]/15 px-2.5 py-1 text-xs text-[var(--mint)]">
            {bookings.length} ce soir
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          <AnimatePresence initial={false}>
            {bookings.map((b) => (
              <motion.li
                key={b.id}
                layout
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, x: 40 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm">{b.name}</p>
                  <p className="text-xs text-muted-foreground">{b.people} pers. · {b.time}</p>
                </div>
                <button
                  onClick={() => setBookings((bb) => bb.filter((x) => x.id !== b.id))}
                  className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-muted-foreground hover:text-foreground"
                  aria-label="Confirmer et archiver"
                >
                  <Check className="h-3.5 w-3.5" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <p className="font-display text-sm font-semibold">Ajouter une résa</p>
        <div className="mt-4 space-y-3">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom du client" className="bg-white/5" />
          <div className="grid grid-cols-2 gap-3">
            <Input value={people} onChange={(e) => setPeople(e.target.value)} type="number" min="1" placeholder="Pers." className="bg-white/5" />
            <Input value={time} onChange={(e) => setTime(e.target.value)} placeholder="20:15" className="bg-white/5" />
          </div>
          <Button onClick={add} className="w-full bg-gradient-to-r from-[var(--violet)] to-[var(--violet-glow)]">
            <Plus className="mr-1 h-4 w-4" /> Ajouter
          </Button>
        </div>
        <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-muted-foreground">
          <p>💡 L'automatisation envoie le SMS de confirmation, ajoute au plan de salle et bloque les stocks.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- GARAGE — Kanban drag ---------- */
type CarStatus = "diag" | "devis" | "atelier" | "livre";
type CarCard = { id: string; plate: string; model: string; status: CarStatus };

const columns: { id: CarStatus; label: string; tint: string }[] = [
  { id: "diag", label: "Diagnostic", tint: "from-sky-500/30 to-sky-500/10" },
  { id: "devis", label: "Devis envoyé", tint: "from-violet-500/30 to-violet-500/10" },
  { id: "atelier", label: "Atelier", tint: "from-amber-500/30 to-amber-500/10" },
  { id: "livre", label: "Livré", tint: "from-emerald-500/30 to-emerald-500/10" },
];

function GarageDemo() {
  const [cards, setCards] = useState<Record<CarStatus, CarCard[]>>({
    diag: [
      { id: "a", plate: "AB-123-CD", model: "Renault Clio", status: "diag" },
      { id: "b", plate: "FG-456-HI", model: "Peugeot 208", status: "diag" },
    ],
    devis: [{ id: "c", plate: "JK-789-LM", model: "Citroën C3", status: "devis" }],
    atelier: [{ id: "d", plate: "NO-321-PQ", model: "VW Golf", status: "atelier" }],
    livre: [],
  });

  const advance = (id: string, from: CarStatus) => {
    const order: CarStatus[] = ["diag", "devis", "atelier", "livre"];
    const idx = order.indexOf(from);
    if (idx >= order.length - 1) return;
    const to = order[idx + 1];
    setCards((c) => {
      const card = c[from].find((x) => x.id === id);
      if (!card) return c;
      return {
        ...c,
        [from]: c[from].filter((x) => x.id !== id),
        [to]: [...c[to], { ...card, status: to }],
      };
    });
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {columns.map((col) => (
        <div key={col.id} className={`relative rounded-2xl border border-white/10 bg-gradient-to-b ${col.tint} p-3`}>
          <div className="flex items-center justify-between px-1 pb-3">
            <p className="text-xs font-semibold uppercase tracking-widest">{col.label}</p>
            <span className="text-xs text-muted-foreground">{cards[col.id].length}</span>
          </div>
          <Reorder.Group axis="y" values={cards[col.id]} onReorder={(v) => setCards((c) => ({ ...c, [col.id]: v }))} className="space-y-2">
            <AnimatePresence>
              {cards[col.id].map((card) => (
                <Reorder.Item
                  key={card.id}
                  value={card}
                  className="cursor-grab rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur active:cursor-grabbing"
                  whileDrag={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(147,51,234,0.5)" }}
                >
                  <div className="flex items-start gap-2">
                    <GripVertical className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{card.model}</p>
                      <p className="font-mono text-xs text-muted-foreground">{card.plate}</p>
                    </div>
                  </div>
                  {col.id !== "livre" && (
                    <button
                      onClick={() => advance(card.id, col.id)}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-muted-foreground transition hover:text-foreground"
                    >
                      Faire avancer →
                    </button>
                  )}
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </div>
      ))}
    </div>
  );
}

/* ---------- CONCIERGERIE ---------- */
type Bien = { id: string; nom: string; ville: string; menage: "todo" | "encours" | "ok"; checkin: string };
function ConciergerieDemo() {
  const [biens, setBiens] = useState<Bien[]>([
    { id: "1", nom: "Appartement vue mer", ville: "Nice", menage: "todo", checkin: "16:00" },
    { id: "2", nom: "Studio centre", ville: "Lyon", menage: "encours", checkin: "15:00" },
    { id: "3", nom: "Loft canal", ville: "Paris", menage: "ok", checkin: "18:00" },
  ]);
  const cycle = (id: string) => {
    setBiens((b) => b.map((x) => x.id === id ? {
      ...x, menage: x.menage === "todo" ? "encours" : x.menage === "encours" ? "ok" : "todo"
    } : x));
  };
  const labels = { todo: "À faire", encours: "En cours", ok: "Prêt" } as const;
  const tint = { todo: "bg-rose-500/15 text-rose-200", encours: "bg-amber-500/15 text-amber-200", ok: "bg-emerald-500/15 text-emerald-200" } as const;
  return (
    <div className="grid gap-3">
      {biens.map((b) => (
        <motion.div
          key={b.id}
          layout
          className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
        >
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold">{b.nom}</p>
            <p className="text-xs text-muted-foreground">{b.ville} · check-in {b.checkin}</p>
          </div>
          <button
            onClick={() => cycle(b.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${tint[b.menage]}`}
          >
            {labels[b.menage]} →
          </button>
        </motion.div>
      ))}
      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-muted-foreground">
        💡 Quand un statut passe à "Prêt", le voyageur reçoit son code d'accès auto + le rapport part au propriétaire.
      </div>
    </div>
  );
}

/* ---------- ARTISAN ---------- */
function ArtisanDemo() {
  const [step, setStep] = useState(0);
  const steps = [
    { icon: Calendar, label: "Photo chantier", detail: "Image envoyée depuis le tél" },
    { icon: Package, label: "Devis IA généré", detail: "Pièces + main d'œuvre estimées" },
    { icon: Check, label: "Envoyé au client", detail: "PDF signé, archivé dans le dossier" },
    { icon: Star, label: "Relance avis", detail: "SMS auto 3 jours après fin de chantier" },
  ];
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <p className="font-display text-sm font-semibold">Du chantier au paiement</p>
        <div className="mt-4 space-y-2">
          {steps.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setStep(i)}
              className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
                i === step ? "border-[var(--violet)] bg-[var(--violet)]/10" : "border-white/5 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${i === step ? "bg-gradient-to-br from-[var(--violet)] to-[var(--violet-glow)]" : "bg-white/5"}`}>
                <s.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.detail}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--violet-glow)]">Étape {step + 1} / 4</p>
            <p className="font-display text-xl font-semibold">{steps[step].label}</p>
            <p className="text-sm text-muted-foreground">{steps[step].detail}</p>
            <div className="mt-4 grid gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3">
              {step === 0 && (
                <div className="grid h-40 place-items-center rounded-lg bg-gradient-to-br from-[var(--violet)]/30 to-transparent text-sm text-muted-foreground">
                  📷 photo_chantier_142.jpg
                </div>
              )}
              {step === 1 && (
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between"><span>Remplacement tuyau cuivre 2m</span><span className="text-muted-foreground">84,00 €</span></li>
                  <li className="flex justify-between"><span>Robinet thermostatique</span><span className="text-muted-foreground">112,00 €</span></li>
                  <li className="flex justify-between"><span>Main d'œuvre (1h30)</span><span className="text-muted-foreground">97,50 €</span></li>
                  <li className="mt-2 flex justify-between border-t border-white/10 pt-2 font-semibold"><span>Total HT</span><span>293,50 €</span></li>
                </ul>
              )}
              {step === 2 && (
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-[var(--mint)]" />
                  <span>Devis-2104.pdf envoyé à <span className="text-foreground">m.lemaire@gmail.com</span></span>
                </div>
              )}
              {step === 3 && (
                <div className="text-sm">
                  <p className="text-muted-foreground">SMS programmé pour le 14 mars :</p>
                  <p className="mt-2 rounded-lg bg-white/5 p-3 text-foreground">
                    "Bonjour Mme Lemaire, merci pour votre confiance ! Si tout va bien, un avis Google nous aiderait beaucoup 🌟 [lien]"
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function InteractiveDemos() {
  return (
    <section id="demos" className="relative overflow-hidden px-4 py-28 sm:px-6">
      <div aria-hidden className="absolute inset-x-0 top-1/2 -z-10 h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.26_295/0.18),transparent_60%)]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet-glow)]">Section vedette</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            Teste une vraie <span className="text-gradient-violet">mini-app de ton métier</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Clique, ajoute, fais glisser. Ce ne sont pas des screenshots : ce sont des morceaux fonctionnels de ce qu'on construit pour nos clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong mt-14 rounded-3xl border border-white/10 p-4 shadow-2xl shadow-black/40 sm:p-6 md:p-8"
        >
          <Tabs defaultValue="resto" className="w-full">
            <TabsList className="flex h-auto w-full flex-wrap gap-2 bg-transparent p-0">
              {metiers.map((m) => (
                <TabsTrigger
                  key={m.id}
                  value={m.id}
                  className="group flex-1 min-w-[140px] gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-[var(--violet)] data-[state=active]:to-[var(--violet-glow)] data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-[var(--violet)]/30"
                >
                  <m.icon className="h-4 w-4" />
                  <span className="truncate">{m.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6">
              <TabsContent value="resto"><RestoDemo /></TabsContent>
              <TabsContent value="garage"><GarageDemo /></TabsContent>
              <TabsContent value="conciergerie"><ConciergerieDemo /></TabsContent>
              <TabsContent value="artisan"><ArtisanDemo /></TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
