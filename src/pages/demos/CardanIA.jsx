import React, { useState, useMemo } from "react";
import {
  Gauge, ClipboardCheck, CalendarClock, Wrench, Activity,
  UsersRound, ReceiptText, ShieldCheck, Settings, Search,
  Bell, ChevronRight, AlertTriangle, CheckCircle2, Clock,
  TrendingUp, TrendingDown, Phone, Mail, Car, Package,
  Truck, FileText, Banknote, Plus, Filter, MoreHorizontal,
  ArrowUpRight, Sparkles, Zap, ShieldAlert, Recycle, Snowflake,
  CircleDot, ArrowRight, ChevronDown, MapPin, Hash
} from "lucide-react";

// ============================================================
// CARDAN IA — Maquette de prospection
// Single-file, données fictives, navigable
// ============================================================

const COLORS = {
  ink: "#0F1419",         // sidebar / fonte
  inkSoft: "#1A1F26",     // texte principal sur clair
  steel: "#3B6E8F",       // bleu acier accent
  steelDark: "#2B4C6F",
  steelLight: "#5A8AAD",
  rust: "#D97A2C",        // orange chauffé
  rustDark: "#B8631F",
  paper: "#F5F2EC",       // papier kraft
  paperWarm: "#EDE7DB",
  card: "#FFFFFF",
  border: "#D9D2C3",
  borderDark: "#2A3038",
  textOnDark: "#E8E4DC",
  textOnDarkMuted: "#8A8F96",
  green: "#4A7C59",
  red: "#A8392E",
  amber: "#C89324",
};

// ============================================================
// DONNÉES FICTIVES RÉALISTES
// ============================================================

const ORDERS = [
  { id: "OR-2403", plate: "EH-547-RT", brand: "Renault", model: "Clio IV 1.5 dCi", year: 2018, km: 142850, customer: "Mme Lefevre Martine", phone: "06 12 34 56 78", status: "en_cours", tech: "Karim B.", entered: "06/05 08:15", promised: "06/05 17:00", reason: "Voyant moteur + à-coups accélération", diagCodes: ["P0299", "P0401"], estimated: 387.50, parts: ["Vanne EGR", "Joint EGR", "Filtre habitacle"], lift: 2 },
  { id: "OR-2404", plate: "FA-821-PK", brand: "Peugeot", model: "3008 1.6 BlueHDi", year: 2020, km: 78420, customer: "M. Bouquet Cyril", phone: "06 87 22 14 09", status: "diag", tech: "Karim B.", entered: "06/05 09:00", promised: "07/05 12:00", reason: "Bruit roulement avant droit", diagCodes: [], estimated: null, parts: [], lift: 1 },
  { id: "OR-2405", plate: "EJ-294-MN", brand: "Citroën", model: "C3 Aircross 1.2 PureTech", year: 2021, km: 41200, customer: "M. Da Silva Joaquim", phone: "07 45 12 88 03", status: "attente_pieces", tech: "Mathieu R.", entered: "05/05 14:30", promised: "07/05 17:00", reason: "Distribution + galets (révision 100k)", diagCodes: [], estimated: 1287.00, parts: ["Kit distrib Gates", "Pompe à eau", "Liquide refroidissement 5L"], lift: 3 },
  { id: "OR-2406", plate: "DR-128-VG", brand: "Volkswagen", model: "Golf VII 1.6 TDI", year: 2017, km: 198400, customer: "Sté Plomberie Vidal", phone: "04 90 12 45 78", status: "en_cours", tech: "Mathieu R.", entered: "06/05 07:45", promised: "06/05 18:00", reason: "Vidange + pré-CT", diagCodes: [], estimated: 195.40, parts: ["Huile 5W30 5L", "Filtre huile", "Filtre air"], lift: 4 },
  { id: "OR-2407", plate: "FB-965-XQ", brand: "Dacia", model: "Sandero Stepway TCe 90", year: 2022, km: 28100, customer: "Mlle Hernandez Léa", phone: "06 33 78 22 45", status: "termine", tech: "Karim B.", entered: "05/05 10:00", promised: "05/05 17:00", reason: "Plaquettes AV + disques", diagCodes: [], estimated: 312.80, parts: ["Plaquettes Brembo", "Disques Brembo paire"], lift: null },
  { id: "OR-2408", plate: "EZ-447-LM", brand: "Toyota", model: "Yaris Hybrid", year: 2019, km: 89300, customer: "M. Chen Wei", phone: "07 88 41 02 19", status: "devis_envoye", tech: "Karim B.", entered: "05/05 16:00", promised: "07/05 09:00", reason: "Climatisation inopérante", diagCodes: [], estimated: 645.00, parts: ["Compresseur clim Denso", "R1234yf 500g", "Huile compresseur"], lift: null },
];

const PARTS_SEARCH = [
  { ref: "7.24809.21.0", desc: "Vanne EGR Pierburg pour Renault 1.5 dCi K9K", suppliers: [
    { name: "Autodistribution", price: 187.40, stock: "Dispo", delivery: "J+1 14h", oem: false },
    { name: "Oscaro Pro", price: 174.90, stock: "Dispo", delivery: "J+1 12h", oem: false },
    { name: "Mister Auto Pro", price: 169.00, stock: "Dispo", delivery: "J+2", oem: false },
    { name: "Renault OE", price: 312.50, stock: "Sur cmde", delivery: "J+3", oem: true },
    { name: "Casse Auto Pradet", price: 95.00, stock: "1 dispo", delivery: "Retrait", oem: false, used: true },
  ]},
];

const TECH_PLANNING = [
  { tech: "Karim B.", role: "Chef d'atelier", color: "#3B6E8F", slots: [
    { time: "08:00", or: "OR-2403", label: "Diag EGR Clio", duration: 2, status: "en_cours" },
    { time: "10:00", or: "OR-2404", label: "Diag roulement 3008", duration: 1, status: "planifié" },
    { time: "11:00", or: null, label: "Pause", duration: 1, status: "pause" },
    { time: "14:00", or: "OR-2408", label: "Recharge clim Yaris", duration: 1.5, status: "planifié" },
    { time: "15:30", or: "OR-2405", label: "Distribution C3", duration: 3, status: "planifié" },
  ]},
  { tech: "Mathieu R.", role: "Mécanicien confirmé", color: "#D97A2C", slots: [
    { time: "08:00", or: "OR-2406", label: "Vidange Golf TDI", duration: 1, status: "en_cours" },
    { time: "09:00", or: "OR-2407", label: "Plaquettes Sandero (fin)", duration: 1, status: "en_cours" },
    { time: "10:00", or: null, label: "Pré-CT 4 véh.", duration: 3, status: "planifié" },
    { time: "14:00", or: null, label: "Réception clients", duration: 1, status: "planifié" },
    { time: "15:00", or: "OR-2405", label: "Distribution C3 (avec Karim)", duration: 3, status: "planifié" },
  ]},
];

const CUSTOMERS = [
  { name: "Lefevre Martine", type: "Particulier", vehicles: 1, lastVisit: "06/05/2026", ca12m: 487, status: "active" },
  { name: "Bouquet Cyril", type: "Particulier", vehicles: 2, lastVisit: "06/05/2026", ca12m: 1245, status: "active" },
  { name: "Sté Plomberie Vidal", type: "Pro - Flotte", vehicles: 7, lastVisit: "06/05/2026", ca12m: 8420, status: "vip" },
  { name: "Da Silva Joaquim", type: "Particulier", vehicles: 1, lastVisit: "05/05/2026", ca12m: 1287, status: "active" },
  { name: "Hernandez Léa", type: "Particulier", vehicles: 1, lastVisit: "05/05/2026", ca12m: 312, status: "new" },
  { name: "Chen Wei", type: "Particulier", vehicles: 1, lastVisit: "05/05/2026", ca12m: 645, status: "active" },
  { name: "Sté Bâti-Sud SARL", type: "Pro - Flotte", vehicles: 4, lastVisit: "28/04/2026", ca12m: 4120, status: "active" },
  { name: "Mariani Pascale", type: "Particulier", vehicles: 1, lastVisit: "12/02/2026", ca12m: 0, status: "dormant" },
];

const INVOICES = [
  { num: "F-2026-0412", date: "06/05/2026", customer: "Lefevre Martine", or: "OR-2403", ttc: 387.50, status: "draft" },
  { num: "F-2026-0411", date: "05/05/2026", customer: "Hernandez Léa", or: "OR-2407", ttc: 312.80, status: "paye" },
  { num: "F-2026-0410", date: "05/05/2026", customer: "Sté Plomberie Vidal", or: "OR-2401", ttc: 1124.60, status: "envoye" },
  { num: "F-2026-0409", date: "03/05/2026", customer: "Mercier David", or: "OR-2398", ttc: 798.40, status: "retard_15" },
  { num: "F-2026-0408", date: "30/04/2026", customer: "Roussel Jean-Marc", or: "OR-2395", ttc: 245.00, status: "paye" },
  { num: "F-2026-0407", date: "28/04/2026", customer: "Sté Aube Transport", or: "OR-2392", ttc: 2147.80, status: "retard_30" },
  { num: "F-2026-0406", date: "25/04/2026", customer: "Bonnet Sylvie", or: "OR-2389", ttc: 487.20, status: "paye" },
];

// ============================================================
// PRIMITIVES UI
// ============================================================

const Pill = ({ children, color = "steel", soft = false }) => {
  const palette = {
    steel: { bg: soft ? "#E8EEF3" : COLORS.steel, fg: soft ? COLORS.steelDark : "#fff", bd: COLORS.steel },
    rust: { bg: soft ? "#FBE8D8" : COLORS.rust, fg: soft ? COLORS.rustDark : "#fff", bd: COLORS.rust },
    green: { bg: soft ? "#E2EDE6" : COLORS.green, fg: soft ? COLORS.green : "#fff", bd: COLORS.green },
    red: { bg: soft ? "#F4E1DE" : COLORS.red, fg: soft ? COLORS.red : "#fff", bd: COLORS.red },
    amber: { bg: soft ? "#F6ECD5" : COLORS.amber, fg: soft ? "#7A5A14" : "#fff", bd: COLORS.amber },
    ink: { bg: soft ? "#E5E2D9" : COLORS.ink, fg: soft ? COLORS.ink : "#fff", bd: COLORS.ink },
  }[color];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "2px 8px", borderRadius: 3,
      background: palette.bg, color: palette.fg,
      fontSize: 10.5, fontWeight: 600, letterSpacing: 0.4,
      textTransform: "uppercase", fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      border: soft ? `1px solid ${palette.bd}33` : "none",
    }}>{children}</span>
  );
};

const Card = ({ children, style, accent = false }) => (
  <div style={{
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 4,
    boxShadow: accent ? `0 1px 0 ${COLORS.steel}, 0 4px 12px rgba(15,20,25,0.04)` : "0 1px 0 rgba(0,0,0,0.02)",
    position: "relative",
    ...style,
  }}>
    {children}
  </div>
);

const CardHeader = ({ title, subtitle, action, icon: Icon }) => (
  <div style={{
    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
    padding: "16px 20px 12px", borderBottom: `1px dashed ${COLORS.border}`,
  }}>
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      {Icon && <div style={{
        width: 32, height: 32, borderRadius: 3,
        background: COLORS.paperWarm, color: COLORS.steel,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${COLORS.border}`,
      }}><Icon size={16} strokeWidth={2} /></div>}
      <div>
        <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: COLORS.steelDark, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{title}</div>
        {subtitle && <div style={{ fontSize: 13, color: "#5A5F66", marginTop: 2 }}>{subtitle}</div>}
      </div>
    </div>
    {action}
  </div>
);

// ============================================================
// SIDEBAR
// ============================================================

const NAV = [
  { id: "dashboard", label: "Poste de pilotage", icon: Gauge },
  { id: "or", label: "Réception & OR", icon: ClipboardCheck },
  { id: "atelier", label: "Atelier & Planning", icon: CalendarClock },
  { id: "pieces", label: "Pièces & Fournisseurs", icon: Package },
  { id: "diag", label: "Diag Assist IA", icon: Activity, accent: true },
  { id: "clients", label: "Clients & Véhicules", icon: UsersRound },
  { id: "factu", label: "Devis & Facturation", icon: ReceiptText },
  { id: "conformite", label: "Conformité & Déchets", icon: ShieldCheck },
];

function Sidebar({ active, setActive }) {
  return (
    <aside style={{
      width: 248, background: COLORS.ink, color: COLORS.textOnDark,
      display: "flex", flexDirection: "column",
      borderRight: `1px solid ${COLORS.borderDark}`,
      position: "relative",
    }}>
      {/* Grain texture overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='180' height='180' filter='url(%23n)'/></svg>\")",
      }} />

      {/* Logo block */}
      <div style={{ padding: "22px 20px 18px", borderBottom: `1px solid ${COLORS.borderDark}`, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 4,
            background: `linear-gradient(135deg, ${COLORS.steel}, ${COLORS.steelDark})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.4)",
          }}>
            <CircleDot size={20} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', 'Oswald', Impact, sans-serif",
              fontSize: 22, letterSpacing: 2, lineHeight: 1, color: "#fff", fontWeight: 400,
            }}>CARDAN</div>
            <div style={{
              fontSize: 9.5, letterSpacing: 3, color: COLORS.rust, fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace", marginTop: 2,
            }}>· I A ·</div>
          </div>
        </div>
        <div style={{ fontSize: 10, color: COLORS.textOnDarkMuted, marginTop: 12, letterSpacing: 0.5, fontStyle: "italic", lineHeight: 1.4 }}>
          « Tout passe par lui. »
        </div>
      </div>

      {/* Garage info */}
      <div style={{ padding: "14px 20px", borderBottom: `1px solid ${COLORS.borderDark}`, position: "relative" }}>
        <div style={{ fontSize: 10, color: COLORS.textOnDarkMuted, letterSpacing: 1.4, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Atelier connecté</div>
        <div style={{ fontSize: 13, color: "#fff", marginTop: 4, fontWeight: 600 }}>Garage Mercier & Fils</div>
        <div style={{ fontSize: 11, color: COLORS.textOnDarkMuted, marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}>
          <MapPin size={10} /> Carpentras · 84
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 8px", position: "relative", overflowY: "auto" }}>
        <div style={{ fontSize: 10, color: COLORS.textOnDarkMuted, letterSpacing: 1.5, textTransform: "uppercase", padding: "6px 12px", fontFamily: "'JetBrains Mono', monospace" }}>Modules</div>
        {NAV.map(item => {
          const isActive = active === item.id;
          const Icon = item.icon;
          return (
            <button key={item.id} onClick={() => setActive(item.id)} style={{
              display: "flex", alignItems: "center", gap: 11, width: "100%",
              padding: "10px 12px", margin: "1px 0",
              background: isActive ? `linear-gradient(90deg, ${COLORS.steel}22, transparent)` : "transparent",
              border: "none", borderLeft: isActive ? `2px solid ${COLORS.rust}` : "2px solid transparent",
              color: isActive ? "#fff" : COLORS.textOnDarkMuted,
              fontSize: 13, fontWeight: isActive ? 600 : 500,
              cursor: "pointer", textAlign: "left",
              borderRadius: 0, transition: "all 0.15s",
              fontFamily: "inherit",
            }}>
              <Icon size={16} strokeWidth={isActive ? 2.4 : 2} color={isActive ? COLORS.rust : COLORS.textOnDarkMuted} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.accent && <Sparkles size={11} color={COLORS.rust} />}
            </button>
          );
        })}
      </nav>

      {/* Bottom — Settings + user */}
      <div style={{ padding: "12px 8px", borderTop: `1px solid ${COLORS.borderDark}`, position: "relative" }}>
        <button style={{
          display: "flex", alignItems: "center", gap: 11, width: "100%",
          padding: "9px 12px", background: "transparent", border: "none",
          color: COLORS.textOnDarkMuted, fontSize: 12.5, cursor: "pointer", textAlign: "left",
          fontFamily: "inherit",
        }}>
          <Settings size={15} /> Réglages
        </button>
        <div style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", marginTop: 6,
          background: "rgba(255,255,255,0.02)", borderRadius: 4,
          border: `1px solid ${COLORS.borderDark}`,
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.rust}, ${COLORS.rustDark})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11.5, fontWeight: 700, color: "#fff",
          }}>JM</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, color: "#fff", fontWeight: 600, lineHeight: 1.2 }}>Jean-Michel Mercier</div>
            <div style={{ fontSize: 10.5, color: COLORS.textOnDarkMuted, marginTop: 1 }}>Gérant</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ============================================================
// TOP BAR
// ============================================================

function TopBar({ title, subtitle, breadcrumb }) {
  return (
    <div style={{
      padding: "16px 32px",
      borderBottom: `1px solid ${COLORS.border}`,
      background: COLORS.paper,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#7A7F86", letterSpacing: 0.6, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>
          {breadcrumb.map((b, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ChevronRight size={11} />}
              <span style={{ color: i === breadcrumb.length - 1 ? COLORS.steel : "#7A7F86", fontWeight: i === breadcrumb.length - 1 ? 600 : 400 }}>{b}</span>
            </React.Fragment>
          ))}
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', 'Oswald', Impact, sans-serif",
          fontSize: 30, letterSpacing: 1.5, margin: "6px 0 2px",
          color: COLORS.inkSoft, fontWeight: 400, lineHeight: 1,
        }}>{title}</h1>
        {subtitle && <div style={{ fontSize: 13, color: "#5A5F66" }}>{subtitle}</div>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 12px", background: COLORS.card,
          border: `1px solid ${COLORS.border}`, borderRadius: 3,
          width: 280,
        }}>
          <Search size={14} color="#7A7F86" />
          <input placeholder="Immat, client, OR, pièce…" style={{
            border: "none", outline: "none", fontSize: 13, flex: 1, background: "transparent",
            fontFamily: "'JetBrains Mono', monospace", color: COLORS.inkSoft,
          }} />
          <span style={{ fontSize: 10, color: "#A0A4AB", padding: "2px 5px", border: `1px solid ${COLORS.border}`, borderRadius: 2, fontFamily: "'JetBrains Mono', monospace" }}>⌘K</span>
        </div>
        <button style={{
          width: 36, height: 36, borderRadius: 3,
          background: COLORS.card, border: `1px solid ${COLORS.border}`,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          position: "relative",
        }}>
          <Bell size={15} color={COLORS.inkSoft} />
          <span style={{ position: "absolute", top: 5, right: 5, width: 7, height: 7, borderRadius: "50%", background: COLORS.rust, border: "1.5px solid #fff" }}></span>
        </button>
        <button style={{
          padding: "8px 16px", borderRadius: 3,
          background: COLORS.steel, color: "#fff", border: "none",
          fontSize: 12.5, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 6,
          boxShadow: `0 1px 0 ${COLORS.steelDark}, 0 2px 6px rgba(59,110,143,0.2)`,
          fontFamily: "inherit",
        }}>
          <Plus size={14} /> Nouvel OR
        </button>
      </div>
    </div>
  );
}

// ============================================================
// 1. POSTE DE PILOTAGE
// ============================================================

function Dashboard() {
  const kpis = [
    { label: "CA du jour", value: "2 487", unit: "€ HT", trend: +12, icon: Banknote, signature: true },
    { label: "OR ouverts", value: "14", unit: "actifs", trend: +2, icon: ClipboardCheck },
    { label: "Taux occupation atelier", value: "78", unit: "%", trend: -4, icon: Wrench, warn: true },
    { label: "Heures facturables / payées", value: "82", unit: "%", trend: +6, icon: Activity },
  ];

  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* Bandeau IA "ce que j'ai fait pendant la nuit" */}
      <Card style={{ marginBottom: 22, background: `linear-gradient(135deg, ${COLORS.ink}, #1F2530)`, border: `1px solid ${COLORS.borderDark}`, color: COLORS.textOnDark, padding: 20, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.rust} 0 1px, transparent 1px 12px)`,
        }} />
        <div style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: 16 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 4,
            background: `linear-gradient(135deg, ${COLORS.rust}, ${COLORS.rustDark})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)",
          }}>
            <Sparkles size={22} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10.5, letterSpacing: 1.4, color: COLORS.rust, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Cardan IA · Briefing du matin · 06/05 · 07h12</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginTop: 6, lineHeight: 1.4 }}>
              Bonjour Jean-Michel. J'ai préparé votre journée pendant la nuit.
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 14, flexWrap: "wrap" }}>
              <div><div style={{ fontSize: 11, color: COLORS.textOnDarkMuted, letterSpacing: 0.6 }}>Pièces commandées auto</div><div style={{ fontSize: 18, fontFamily: "'JetBrains Mono', monospace", color: "#fff", fontWeight: 600 }}>3 réfs · 287 €</div></div>
              <div><div style={{ fontSize: 11, color: COLORS.textOnDarkMuted, letterSpacing: 0.6 }}>SMS rappels CT envoyés</div><div style={{ fontSize: 18, fontFamily: "'JetBrains Mono', monospace", color: "#fff", fontWeight: 600 }}>12 clients</div></div>
              <div><div style={{ fontSize: 11, color: COLORS.textOnDarkMuted, letterSpacing: 0.6 }}>Relances impayés</div><div style={{ fontSize: 18, fontFamily: "'JetBrains Mono', monospace", color: COLORS.rust, fontWeight: 600 }}>2 envoyées · 945 €</div></div>
              <div><div style={{ fontSize: 11, color: COLORS.textOnDarkMuted, letterSpacing: 0.6 }}>Devis pré-rédigés</div><div style={{ fontSize: 18, fontFamily: "'JetBrains Mono', monospace", color: "#fff", fontWeight: 600 }}>2 prêts à valider</div></div>
            </div>
          </div>
          <button style={{
            padding: "8px 14px", borderRadius: 3, background: "rgba(255,255,255,0.08)",
            color: "#fff", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer",
            fontSize: 12, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6,
          }}>
            Voir le détail <ArrowUpRight size={13} />
          </button>
        </div>
      </Card>

      {/* KPI grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 22 }}>
        {kpis.map((k, i) => (
          <Card key={i} accent={k.signature} style={{ padding: 18, position: "relative", overflow: "hidden" }}>
            {k.signature && <div style={{
              position: "absolute", top: 0, right: 0, width: 80, height: 80,
              background: `radial-gradient(circle at top right, ${COLORS.rust}22, transparent 70%)`,
              pointerEvents: "none",
            }} />}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <k.icon size={18} color={k.signature ? COLORS.rust : k.warn ? COLORS.amber : COLORS.steel} />
              <Pill color={k.trend > 0 ? "green" : "red"} soft>
                {k.trend > 0 ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                {k.trend > 0 ? "+" : ""}{k.trend}%
              </Pill>
            </div>
            <div style={{ fontSize: 10.5, color: "#7A7F86", letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{k.label}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 30, fontWeight: 700, color: COLORS.inkSoft, lineHeight: 1,
              }}>{k.value}</span>
              <span style={{ fontSize: 12, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace" }}>{k.unit}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Mid grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 14, marginBottom: 22 }}>
        {/* Atelier en direct */}
        <Card>
          <CardHeader title="Atelier en direct" subtitle="4 ponts · 2 techniciens présents" icon={Wrench} action={
            <Pill color="green" soft><span style={{ width: 6, height: 6, background: COLORS.green, borderRadius: "50%", display: "inline-block" }}></span> Live</Pill>
          } />
          <div style={{ padding: "8px 0" }}>
            {[
              { lift: "Pont 1", or: "OR-2404", veh: "Peugeot 3008 · FA-821-PK", task: "Diag roulement AVD", tech: "Karim B.", elapsed: "1h12", status: "diag" },
              { lift: "Pont 2", or: "OR-2403", veh: "Renault Clio IV · EH-547-RT", task: "Démontage vanne EGR", tech: "Karim B.", elapsed: "0h47", status: "en_cours" },
              { lift: "Pont 3", or: "OR-2405", veh: "Citroën C3 Aircross · EJ-294-MN", task: "EN ATTENTE pièces (J+1)", tech: "—", elapsed: "—", status: "attente" },
              { lift: "Pont 4", or: "OR-2406", veh: "VW Golf VII · DR-128-VG", task: "Vidange + filtres", tech: "Mathieu R.", elapsed: "0h32", status: "en_cours" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 1fr 130px 90px 80px", gap: 14, padding: "12px 20px", borderBottom: i < 3 ? `1px dashed ${COLORS.border}` : "none", alignItems: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, color: COLORS.steelDark, letterSpacing: 0.5 }}>{row.lift}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.inkSoft }}>{row.veh}</div>
                  <div style={{ fontSize: 11.5, color: "#5A5F66", marginTop: 1 }}>{row.task}</div>
                </div>
                <div style={{ fontSize: 12, color: "#5A5F66", fontFamily: "'JetBrains Mono', monospace" }}>{row.or} · {row.tech}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: COLORS.inkSoft, fontWeight: 600 }}>{row.elapsed}</div>
                <Pill color={row.status === "attente" ? "amber" : row.status === "diag" ? "steel" : "green"} soft>
                  {row.status === "attente" ? "Attente" : row.status === "diag" ? "Diag" : "En cours"}
                </Pill>
              </div>
            ))}
          </div>
        </Card>

        {/* Alertes IA */}
        <Card>
          <CardHeader title="Alertes & Recos IA" icon={ShieldAlert} action={<Pill color="rust">3</Pill>} />
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: AlertTriangle, color: COLORS.red, title: "Facture F-2026-0407 en retard de 30j", body: "Sté Aube Transport · 2 147,80 € · Lettre RAR conseillée", action: "Activer" },
              { icon: Clock, color: COLORS.amber, title: "OR-2405 : retard probable estimé +2h", body: "Distribution C3 — pièce livrée à 14h au lieu de 10h", action: "Prévenir client" },
              { icon: Sparkles, color: COLORS.steel, title: "Opportunité : 4 clients dormants détectés", body: "CT < 30j et pas de visite > 14 mois", action: "Lancer campagne" },
            ].map((a, i) => (
              <div key={i} style={{ padding: 12, background: COLORS.paperWarm, borderRadius: 3, border: `1px solid ${COLORS.border}`, position: "relative" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <a.icon size={16} color={a.color} style={{ marginTop: 1, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.inkSoft, lineHeight: 1.3 }}>{a.title}</div>
                    <div style={{ fontSize: 11.5, color: "#5A5F66", marginTop: 3, lineHeight: 1.4 }}>{a.body}</div>
                    <button style={{
                      marginTop: 8, padding: "4px 10px", borderRadius: 2,
                      background: "transparent", color: COLORS.steel,
                      border: `1px solid ${COLORS.steel}`, fontSize: 11, fontWeight: 600,
                      cursor: "pointer", fontFamily: "inherit",
                    }}>{a.action} →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom : revenue chart placeholder + agenda du jour */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }}>
        <Card>
          <CardHeader title="CA des 14 derniers jours" subtitle="Comparé à la moyenne" icon={TrendingUp} />
          <div style={{ padding: 20, height: 220, display: "flex", alignItems: "flex-end", gap: 6 }}>
            {[1850, 2120, 1690, 2480, 2890, 3120, 0, 0, 2240, 1980, 2350, 2780, 2487, 0].map((v, i) => {
              const max = 3500;
              const h = v === 0 ? 4 : (v / max) * 180;
              const isToday = i === 12;
              const isWeekend = v === 0;
              return (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: "100%", height: h,
                    background: isToday ? `linear-gradient(180deg, ${COLORS.rust}, ${COLORS.rustDark})` :
                               isWeekend ? "transparent" :
                               `linear-gradient(180deg, ${COLORS.steel}, ${COLORS.steelDark})`,
                    border: isWeekend ? `1px dashed ${COLORS.border}` : "none",
                    borderRadius: "2px 2px 0 0",
                    position: "relative",
                  }}>
                    {isToday && <div style={{
                      position: "absolute", top: -22, left: "50%", transform: "translateX(-50%)",
                      fontSize: 9.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
                      color: COLORS.rust, letterSpacing: 0.5, whiteSpace: "nowrap",
                    }}>2487</div>}
                  </div>
                  <div style={{ fontSize: 9.5, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.4 }}>
                    {isWeekend ? "—" : `J-${12 - i}`}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <CardHeader title="Agenda du jour" subtitle="Mercredi 6 mai" icon={CalendarClock} />
          <div style={{ padding: "8px 0" }}>
            {[
              { time: "09:30", title: "M. Bouquet — dépôt 3008", type: "rdv" },
              { time: "11:00", title: "Livraison AD pièces lot #4421", type: "livraison" },
              { time: "14:00", title: "Mme Lefevre — restitution Clio", type: "rdv" },
              { time: "15:00", title: "Appel commercial Distri Cash", type: "appel" },
              { time: "17:30", title: "Mlle Hernandez — paiement Sandero", type: "paiement" },
            ].map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 20px", borderBottom: i < 4 ? `1px dashed ${COLORS.border}` : "none", alignItems: "center" }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700,
                  color: COLORS.steel, width: 42,
                }}>{e.time}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, color: COLORS.inkSoft }}>{e.title}</div>
                </div>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: e.type === "paiement" ? COLORS.green : e.type === "livraison" ? COLORS.rust : COLORS.steel }}></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============================================================
// 2. RÉCEPTION & OR
// ============================================================

function OrModule() {
  const statusMap = {
    en_cours: { label: "En cours", color: "steel" },
    diag: { label: "Diag", color: "amber" },
    attente_pieces: { label: "Attente pièces", color: "rust" },
    devis_envoye: { label: "Devis envoyé", color: "ink" },
    termine: { label: "Terminé", color: "green" },
  };

  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* Filtres */}
      <div style={{ display: "flex", gap: 8, marginBottom: 18, alignItems: "center" }}>
        {["Tous (14)", "En cours (4)", "Diag (1)", "Attente pièces (1)", "Devis envoyé (1)", "Terminés (7)"].map((f, i) => (
          <button key={i} style={{
            padding: "7px 14px", borderRadius: 3,
            background: i === 0 ? COLORS.ink : COLORS.card,
            color: i === 0 ? "#fff" : COLORS.inkSoft,
            border: `1px solid ${i === 0 ? COLORS.ink : COLORS.border}`,
            fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
          }}>{f}</button>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ padding: "7px 12px", borderRadius: 3, background: COLORS.card, border: `1px solid ${COLORS.border}`, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontFamily: "inherit" }}>
          <Filter size={12} /> Filtres avancés
        </button>
      </div>

      {/* Tableau OR */}
      <Card>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: COLORS.paperWarm, borderBottom: `1px solid ${COLORS.border}` }}>
                {["N° OR", "Véhicule", "Client", "Motif", "Tech", "Entrée → Promesse", "Estimé", "Statut", ""].map((h, i) => (
                  <th key={i} style={{
                    padding: "11px 14px", textAlign: "left", fontSize: 10.5,
                    color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase",
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((or, i) => (
                <tr key={or.id} style={{ borderBottom: `1px dashed ${COLORS.border}`, cursor: "pointer", transition: "background 0.1s" }}
                    onMouseEnter={e => e.currentTarget.style.background = COLORS.paperWarm}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: COLORS.steel }}>{or.id}</td>
                  <td style={{ padding: "12px 14px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: COLORS.inkSoft, fontSize: 12, background: COLORS.paperWarm, padding: "2px 6px", borderRadius: 2, alignSelf: "flex-start", border: `1px solid ${COLORS.border}` }}>{or.plate}</span>
                      <span style={{ fontSize: 11.5, color: "#5A5F66", marginTop: 4 }}>{or.brand} {or.model} · {or.year}</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 14px" }}>
                    <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontWeight: 500 }}>{or.customer}</div>
                    <div style={{ fontSize: 11, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace", marginTop: 1 }}>{or.phone}</div>
                  </td>
                  <td style={{ padding: "12px 14px", color: "#5A5F66", fontSize: 12, maxWidth: 200 }}>{or.reason}</td>
                  <td style={{ padding: "12px 14px", fontSize: 12 }}>{or.tech}</td>
                  <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: "#5A5F66" }}>
                    {or.entered}<br />→ {or.promised}
                  </td>
                  <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: COLORS.inkSoft, fontSize: 13 }}>
                    {or.estimated ? `${or.estimated.toFixed(2)} €` : "—"}
                  </td>
                  <td style={{ padding: "12px 14px" }}>
                    <Pill color={statusMap[or.status].color} soft>{statusMap[or.status].label}</Pill>
                  </td>
                  <td style={{ padding: "12px 14px" }}>
                    <ChevronRight size={14} color="#7A7F86" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* OR Detail preview card */}
      <div style={{ marginTop: 22 }}>
        <Card>
          <div style={{ padding: "20px 24px", borderBottom: `1px solid ${COLORS.border}`, background: COLORS.paperWarm, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: COLORS.inkSoft, letterSpacing: 1.2 }}>OR-2403</span>
                <Pill color="steel" soft>En cours</Pill>
                <Pill color="rust" soft><Sparkles size={9} /> Diag IA disponible</Pill>
              </div>
              <div style={{ fontSize: 12, color: "#5A5F66", marginTop: 4 }}>Aperçu détail · cliquable depuis la liste</div>
            </div>
            <button style={{ padding: "8px 14px", borderRadius: 3, background: COLORS.steel, color: "#fff", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Ouvrir l'OR complet →</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
            {/* Véhicule */}
            <div style={{ padding: 20, borderRight: `1px solid ${COLORS.border}` }}>
              <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, marginBottom: 10 }}>Véhicule</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                <Row label="Immat" value={<span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, background: COLORS.paperWarm, padding: "2px 6px", borderRadius: 2, border: `1px solid ${COLORS.border}` }}>EH-547-RT</span>} />
                <Row label="Modèle" value="Renault Clio IV 1.5 dCi" />
                <Row label="Année" value="2018" mono />
                <Row label="Km" value="142 850" mono />
                <Row label="VIN" value="VF1RJA00161234567" mono small />
                <Row label="Énergie" value="Diesel · K9K" />
              </div>
            </div>

            {/* Client */}
            <div style={{ padding: 20, borderRight: `1px solid ${COLORS.border}` }}>
              <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, marginBottom: 10 }}>Client</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                <Row label="Nom" value="Mme Lefevre Martine" />
                <Row label="Tel" value="06 12 34 56 78" mono />
                <Row label="Email" value="m.lefevre@orange.fr" small />
                <Row label="CA 12m" value="487 €" mono />
                <Row label="Visites" value="3 sur 14 mois" />
                <Row label="Notes" value="Préfère qu'on l'appelle" />
              </div>
            </div>

            {/* Diag */}
            <div style={{ padding: 20 }}>
              <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                Diagnostic <Sparkles size={11} color={COLORS.rust} />
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: "#7A7F86", marginBottom: 4 }}>Codes DTC remontés</div>
                <div style={{ display: "flex", gap: 5 }}>
                  <span style={{ padding: "3px 7px", background: COLORS.ink, color: COLORS.rust, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, borderRadius: 2 }}>P0299</span>
                  <span style={{ padding: "3px 7px", background: COLORS.ink, color: COLORS.rust, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, borderRadius: 2 }}>P0401</span>
                </div>
              </div>
              <div style={{ padding: 10, background: COLORS.paperWarm, borderRadius: 3, border: `1px dashed ${COLORS.steel}` }}>
                <div style={{ fontSize: 10.5, color: COLORS.steelDark, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}>HYPOTHÈSE IA · 87% confiance</div>
                <div style={{ fontSize: 12, color: COLORS.inkSoft, lineHeight: 1.4 }}>Vanne EGR encrassée + débit insuffisant. Cohérent avec le millésime et le kilométrage. Durée estimée : 1h45.</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

const Row = ({ label, value, mono, small }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
    <span style={{ fontSize: 11, color: "#7A7F86", textTransform: "uppercase", letterSpacing: 0.6, fontFamily: "'JetBrains Mono', monospace" }}>{label}</span>
    <span style={{
      fontSize: small ? 11 : 12.5, color: COLORS.inkSoft, textAlign: "right",
      fontFamily: mono ? "'JetBrains Mono', monospace" : "inherit",
      fontWeight: mono ? 600 : 500,
    }}>{value}</span>
  </div>
);

// ============================================================
// 3. ATELIER & PLANNING
// ============================================================

function PlanningModule() {
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button style={{ padding: "7px 12px", borderRadius: 3, background: COLORS.card, border: `1px solid ${COLORS.border}`, cursor: "pointer", fontFamily: "inherit", fontSize: 12 }}>← Hier</button>
          <div style={{ padding: "7px 16px", borderRadius: 3, background: COLORS.ink, color: "#fff", fontSize: 12, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>MER 06 MAI 2026</div>
          <button style={{ padding: "7px 12px", borderRadius: 3, background: COLORS.card, border: `1px solid ${COLORS.border}`, cursor: "pointer", fontFamily: "inherit", fontSize: 12 }}>Demain →</button>
          <div style={{ width: 1, height: 22, background: COLORS.border, margin: "0 6px" }}></div>
          <button style={{ padding: "7px 12px", borderRadius: 3, background: COLORS.steel, color: "#fff", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Vue technicien</button>
          <button style={{ padding: "7px 12px", borderRadius: 3, background: COLORS.card, border: `1px solid ${COLORS.border}`, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>Vue pont</button>
          <button style={{ padding: "7px 12px", borderRadius: 3, background: COLORS.card, border: `1px solid ${COLORS.border}`, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>Semaine</button>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ fontSize: 10, color: "#7A7F86", letterSpacing: 0.6, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Charge atelier</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: COLORS.steelDark }}>78%</span>
          </div>
          <div style={{ width: 1, height: 28, background: COLORS.border }}></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ fontSize: 10, color: "#7A7F86", letterSpacing: 0.6, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>H. facturables</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: COLORS.green }}>11.5h</span>
          </div>
        </div>
      </div>

      {/* Planning grid */}
      <Card style={{ overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${hours.length}, 1fr)`, borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ padding: "10px 14px", background: COLORS.paperWarm, fontSize: 10.5, color: COLORS.steelDark, fontWeight: 700, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", borderRight: `1px solid ${COLORS.border}` }}>Technicien</div>
          {hours.map(h => (
            <div key={h} style={{ padding: "10px 6px", background: COLORS.paperWarm, fontSize: 10.5, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace", textAlign: "center", fontWeight: 600, borderRight: `1px solid ${COLORS.border}` }}>{h}</div>
          ))}
        </div>

        {TECH_PLANNING.map((tech, ti) => (
          <div key={tech.tech} style={{ display: "grid", gridTemplateColumns: `200px repeat(${hours.length}, 1fr)`, position: "relative", borderBottom: ti < TECH_PLANNING.length - 1 ? `1px solid ${COLORS.border}` : "none", minHeight: 90 }}>
            <div style={{ padding: 14, borderRight: `1px solid ${COLORS.border}`, background: COLORS.paperWarm }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: tech.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 11, fontWeight: 700,
                }}>{tech.tech.split(" ").map(s => s[0]).join("")}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.inkSoft }}>{tech.tech}</div>
                  <div style={{ fontSize: 10.5, color: "#7A7F86" }}>{tech.role}</div>
                </div>
              </div>
            </div>

            {/* Hour grid background */}
            {hours.map((h, i) => (
              <div key={i} style={{ borderRight: `1px solid ${COLORS.border}`, background: i === 4 ? "#0F141908" : "transparent" }}></div>
            ))}

            {/* Slots overlay */}
            <div style={{ position: "absolute", left: 200, right: 0, top: 8, bottom: 8, pointerEvents: "none" }}>
              {tech.slots.map((s, i) => {
                const startHour = parseInt(s.time.split(":")[0]);
                const startMin = parseInt(s.time.split(":")[1]);
                const startOffset = (startHour - 8) + startMin / 60;
                const left = (startOffset / hours.length) * 100;
                const width = (s.duration / hours.length) * 100;
                const isPause = s.status === "pause";
                return (
                  <div key={i} style={{
                    position: "absolute", left: `${left}%`, width: `${width}%`,
                    top: 0, bottom: 0, padding: "0 3px", pointerEvents: "auto",
                  }}>
                    <div style={{
                      height: "100%",
                      background: isPause ? "transparent" : `linear-gradient(135deg, ${tech.color}, ${tech.color}dd)`,
                      border: isPause ? `1px dashed ${COLORS.border}` : "none",
                      borderRadius: 3,
                      padding: "8px 10px",
                      color: isPause ? "#7A7F86" : "#fff",
                      fontSize: 11, fontWeight: 600,
                      cursor: "pointer", overflow: "hidden",
                      boxShadow: isPause ? "none" : "inset 0 0 0 1px rgba(255,255,255,0.1)",
                      position: "relative",
                    }}>
                      {!isPause && s.or && <div style={{ fontSize: 9.5, opacity: 0.85, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5 }}>{s.or}</div>}
                      <div style={{ fontWeight: 600, lineHeight: 1.2, marginTop: s.or ? 2 : 0 }}>{s.label}</div>
                      {s.status === "en_cours" && <div style={{ position: "absolute", top: 6, right: 8, width: 6, height: 6, background: "#fff", borderRadius: "50%", boxShadow: "0 0 0 2px rgba(255,255,255,0.3)" }}></div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Card>

      {/* Bottom : KPI rentabilité */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginTop: 22 }}>
        {[
          { label: "Heures payées (jour)", val: "16h", mono: true },
          { label: "Heures facturables", val: "13.1h", mono: true, color: COLORS.green },
          { label: "Ratio performance", val: "82%", mono: true, color: COLORS.steel },
          { label: "Goulots détectés", val: "1", mono: true, color: COLORS.rust },
        ].map((k, i) => (
          <Card key={i} style={{ padding: 16 }}>
            <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", fontWeight: 700 }}>{k.label}</div>
            <div style={{ fontSize: 24, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: k.color || COLORS.inkSoft, marginTop: 6 }}>{k.val}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// 4. PIÈCES & FOURNISSEURS
// ============================================================

function PiecesModule() {
  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* Search bar IA */}
      <Card style={{ padding: 20, marginBottom: 18, background: `linear-gradient(135deg, #fff, ${COLORS.paperWarm})` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Sparkles size={16} color={COLORS.rust} />
          <div style={{ fontSize: 11, color: COLORS.rust, fontWeight: 700, letterSpacing: 1.2, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Recherche pièces unifiée · IA</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            defaultValue="Vanne EGR Renault Clio IV 1.5 dCi K9K 2018 EH-547-RT"
            style={{
              flex: 1, padding: "12px 14px", border: `1.5px solid ${COLORS.steel}`,
              borderRadius: 3, fontSize: 13.5, fontFamily: "'JetBrains Mono', monospace",
              color: COLORS.inkSoft, background: "#fff", outline: "none",
            }} />
          <button style={{
            padding: "0 24px", borderRadius: 3, background: COLORS.ink,
            color: "#fff", border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8,
          }}>
            <Zap size={14} /> Comparer 6 fournisseurs
          </button>
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "#7A7F86", marginRight: 4 }}>Suggéré :</span>
          {["VIN décodé : K9K 612", "TecDoc : 7.24809.21.0", "OE : 147109894R"].map((c, i) => (
            <span key={i} style={{ fontSize: 11, padding: "3px 8px", background: COLORS.paperWarm, border: `1px solid ${COLORS.border}`, borderRadius: 2, fontFamily: "'JetBrains Mono', monospace", color: COLORS.steelDark }}>{c}</span>
          ))}
        </div>
      </Card>

      {/* Comparator */}
      <Card>
        <CardHeader title="Comparatif 6 fournisseurs · Vanne EGR Pierburg 7.24809.21.0" subtitle="Pour OR-2403 · Renault Clio IV K9K · Mme Lefevre" icon={Package} action={<Pill color="green" soft><CheckCircle2 size={9} /> Trouvée</Pill>} />
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: COLORS.paperWarm, borderBottom: `1px solid ${COLORS.border}` }}>
              {["Fournisseur", "Type", "Référence", "Stock", "Délai", "Prix HT", "Action"].map((h, i) => (
                <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PARTS_SEARCH[0].suppliers.map((s, i) => {
              const isBest = i === 2; // Mister Auto Pro = best price
              return (
                <tr key={i} style={{
                  borderBottom: `1px dashed ${COLORS.border}`,
                  background: isBest ? `${COLORS.green}11` : "transparent",
                  position: "relative",
                }}>
                  <td style={{ padding: "13px 14px", fontWeight: 600, color: COLORS.inkSoft }}>
                    {isBest && <span style={{ display: "inline-block", width: 3, height: 24, background: COLORS.green, marginRight: 10, verticalAlign: "middle", borderRadius: 1 }}></span>}
                    {s.name}
                    {s.used && <Pill color="amber" soft><Recycle size={9} /> Réemploi VHU</Pill>}
                  </td>
                  <td style={{ padding: "13px 14px", fontSize: 12 }}>
                    {s.oem ? <Pill color="ink" soft>OE constructeur</Pill> : s.used ? <Pill color="amber" soft>Occasion</Pill> : <Pill color="steel" soft>Aftermarket</Pill>}
                  </td>
                  <td style={{ padding: "13px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>7.24809.21.0</td>
                  <td style={{ padding: "13px 14px", fontSize: 12.5, color: s.stock === "Sur cmde" ? COLORS.amber : COLORS.green, fontWeight: 600 }}>{s.stock}</td>
                  <td style={{ padding: "13px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5 }}>{s.delivery}</td>
                  <td style={{ padding: "13px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 700, color: isBest ? COLORS.green : COLORS.inkSoft }}>{s.price.toFixed(2)} €</td>
                  <td style={{ padding: "13px 14px" }}>
                    <button style={{
                      padding: "6px 12px", borderRadius: 2,
                      background: isBest ? COLORS.green : "transparent",
                      color: isBest ? "#fff" : COLORS.steel,
                      border: isBest ? "none" : `1px solid ${COLORS.steel}`,
                      fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                    }}>{isBest ? "Commander ✓" : "Choisir"}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ padding: "14px 20px", background: COLORS.paperWarm, borderTop: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sparkles size={13} color={COLORS.rust} />
            <span style={{ fontSize: 12, color: "#5A5F66" }}>
              <strong style={{ color: COLORS.inkSoft }}>Reco IA :</strong> Mister Auto Pro à 169,00 € — économie de 18,40 € vs habituel, livraison J+2 compatible avec promesse client.
            </span>
          </div>
          <span style={{ fontSize: 11, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace" }}>Recherche en 1.4s · 6 sources</span>
        </div>
      </Card>

      {/* Bottom row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 18 }}>
        <Card>
          <CardHeader title="Commandes en cours" icon={Truck} action={<Pill color="rust" soft>4 actives</Pill>} />
          <div>
            {[
              { sup: "Autodistribution", ref: "Lot #4421", items: 5, val: "287,40 €", eta: "Aujourd'hui 14h", or: "OR-2403, OR-2406" },
              { sup: "Oscaro Pro", ref: "Cmd 887214", items: 3, val: "412,80 €", eta: "Demain 10h", or: "OR-2405" },
              { sup: "Mister Auto Pro", ref: "Cmd MA-66201", items: 2, val: "164,00 €", eta: "Demain 12h", or: "OR-2408" },
              { sup: "Casse Pradet", ref: "Retrait", items: 1, val: "95,00 €", eta: "Sur place", or: "OR-2403" },
            ].map((c, i) => (
              <div key={i} style={{ padding: "13px 20px", borderBottom: i < 3 ? `1px dashed ${COLORS.border}` : "none", display: "flex", alignItems: "center", gap: 14 }}>
                <Truck size={15} color={COLORS.steel} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.inkSoft }}>{c.sup}</div>
                  <div style={{ fontSize: 11, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{c.ref} · {c.items} pièces · {c.or}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft }}>{c.val}</div>
                  <div style={{ fontSize: 11, color: COLORS.rust, marginTop: 2 }}>{c.eta}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Stock atelier · Top consommables" icon={Package} />
          <div>
            {[
              { name: "Huile 5W30 fût 60L", qty: 28, unit: "L", min: 20, status: "ok" },
              { name: "Filtre habitacle universel", qty: 4, unit: "U", min: 8, status: "low" },
              { name: "Liquide refroidissement type D", qty: 2, unit: "L", min: 10, status: "critical" },
              { name: "Plaquettes AV génériques", qty: 12, unit: "U", min: 6, status: "ok" },
              { name: "R1234yf gaz clim", qty: 850, unit: "g", min: 500, status: "ok" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "12px 20px", borderBottom: i < 4 ? `1px dashed ${COLORS.border}` : "none", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontWeight: 500 }}>{s.name}</div>
                  <div style={{ height: 4, background: COLORS.paperWarm, borderRadius: 2, marginTop: 6, overflow: "hidden" }}>
                    <div style={{
                      width: `${Math.min(100, (s.qty / (s.min * 2)) * 100)}%`,
                      height: "100%",
                      background: s.status === "ok" ? COLORS.green : s.status === "low" ? COLORS.amber : COLORS.red,
                    }}></div>
                  </div>
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft, minWidth: 60, textAlign: "right" }}>{s.qty} {s.unit}</div>
                {s.status !== "ok" && <Pill color={s.status === "low" ? "amber" : "red"} soft>{s.status === "low" ? "Bas" : "Critique"}</Pill>}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============================================================
// 5. DIAG ASSIST IA
// ============================================================

function DiagModule() {
  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 18 }}>
        {/* Saisie */}
        <Card>
          <CardHeader title="Saisie diagnostic" subtitle="OR-2403 · Clio IV K9K" icon={Activity} />
          <div style={{ padding: 20 }}>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, display: "block", marginBottom: 6 }}>Codes DTC remontés</label>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {["P0299", "P0401"].map(c => (
                  <span key={c} style={{ padding: "5px 10px", background: COLORS.ink, color: COLORS.rust, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, borderRadius: 2, display: "flex", alignItems: "center", gap: 6 }}>
                    {c} <span style={{ cursor: "pointer", opacity: 0.6 }}>×</span>
                  </span>
                ))}
              </div>
              <input placeholder="+ Ajouter un code…" style={{ width: "100%", padding: "8px 10px", border: `1px solid ${COLORS.border}`, borderRadius: 2, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", outline: "none" }} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, display: "block", marginBottom: 6 }}>Symptômes observés</label>
              <textarea defaultValue="Voyant moteur orange allumé. À-coups en accélération entre 2000 et 2500 tr/min. Fumée noire à froid. Pas de bruit anormal." rows={4} style={{ width: "100%", padding: "10px", border: `1px solid ${COLORS.border}`, borderRadius: 2, fontSize: 12.5, fontFamily: "inherit", resize: "vertical", outline: "none", color: COLORS.inkSoft }} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, display: "block", marginBottom: 6 }}>Conditions</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {["À chaud", "À froid ✓", "En charge", "Au ralenti ✓"].map((c, i) => (
                  <button key={i} style={{ padding: "7px 10px", borderRadius: 2, background: c.includes("✓") ? COLORS.steel : "transparent", color: c.includes("✓") ? "#fff" : COLORS.inkSoft, border: `1px solid ${c.includes("✓") ? COLORS.steel : COLORS.border}`, fontSize: 11.5, cursor: "pointer", fontFamily: "inherit" }}>{c.replace(" ✓", "")}</button>
                ))}
              </div>
            </div>

            <button style={{ width: "100%", padding: "12px", borderRadius: 3, background: COLORS.ink, color: "#fff", border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Sparkles size={14} color={COLORS.rust} /> Analyser avec Cardan IA
            </button>
          </div>
        </Card>

        {/* Hypothèses IA */}
        <Card>
          <CardHeader title="Hypothèses Cardan IA" subtitle="3 pistes classées par probabilité · Sources : 47 cas similaires" icon={Sparkles} action={<Pill color="rust"><Sparkles size={9} /> IA</Pill>} />
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                rank: 1, conf: 87, title: "Vanne EGR encrassée + débit insuffisant", short: "P0401 explicite. P0299 cohérent (sous-alimentation turbo liée à recirculation gaz).",
                duration: "1h45", labor: 113.45, parts: 169.00, totalEst: 282.45,
                actions: ["Démontage vanne EGR (test décrassage si possible)", "Si débit < 80%, remplacement vanne", "Reset codes + essai routier"],
                stats: "76% des cas similaires (Clio IV K9K 130-180k km) résolus par cette intervention",
              },
              {
                rank: 2, conf: 9, title: "Turbo (collerette/géométrie variable grippée)", short: "P0299 isolé serait suspect, mais P0401 simultané rend l'hypothèse moins probable.",
                duration: "3h00", labor: 195.00, parts: 480.00, totalEst: 675.00,
                actions: ["Test pression turbo", "Inspection actuator", "Si confirmé : remplacement turbo"],
                stats: "9% des cas similaires",
              },
              {
                rank: 3, conf: 4, title: "Capteur débitmètre d'air (MAF)", short: "Faible probabilité — code DTC dédié (P0100-P0103) absent.",
                duration: "0h45", labor: 48.75, parts: 89.00, totalEst: 137.75,
                actions: ["Test capteur au multimètre", "Si HS : remplacement"],
                stats: "4% des cas similaires",
              },
            ].map((h, i) => (
              <div key={i} style={{
                border: `1px solid ${i === 0 ? COLORS.steel : COLORS.border}`,
                borderRadius: 3, overflow: "hidden",
                boxShadow: i === 0 ? `0 0 0 3px ${COLORS.steel}11` : "none",
              }}>
                <div style={{
                  padding: "12px 16px", background: i === 0 ? `${COLORS.steel}0A` : COLORS.paperWarm,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderBottom: `1px solid ${COLORS.border}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 3,
                      background: i === 0 ? COLORS.steel : COLORS.ink, color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 13,
                    }}>{h.rank}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.inkSoft }}>{h.title}</div>
                      <div style={{ fontSize: 11.5, color: "#5A5F66", marginTop: 2 }}>{h.short}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "#7A7F86", letterSpacing: 0.6, fontFamily: "'JetBrains Mono', monospace" }}>CONFIANCE</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 700, color: i === 0 ? COLORS.steel : "#7A7F86", lineHeight: 1 }}>{h.conf}<span style={{ fontSize: 13 }}>%</span></div>
                  </div>
                </div>

                <div style={{ padding: "14px 16px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>Plan d'action proposé</div>
                    <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.6 }}>
                      {h.actions.map((a, j) => <li key={j}>{a}</li>)}
                    </ul>
                    <div style={{ fontSize: 11, color: "#7A7F86", marginTop: 8, fontStyle: "italic" }}>📊 {h.stats}</div>
                  </div>
                  <div style={{ background: COLORS.paperWarm, padding: 12, borderRadius: 2, border: `1px solid ${COLORS.border}` }}>
                    <div style={{ fontSize: 10, color: "#7A7F86", letterSpacing: 0.6, fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>ESTIMATION</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 11.5 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#7A7F86" }}>Durée</span><span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{h.duration}</span></div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#7A7F86" }}>M.O.</span><span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{h.labor.toFixed(2)} €</span></div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#7A7F86" }}>Pièces</span><span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{h.parts.toFixed(2)} €</span></div>
                      <div style={{ height: 1, background: COLORS.border, margin: "4px 0" }}></div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontWeight: 700 }}>Total HT</span><span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: COLORS.inkSoft }}>{h.totalEst.toFixed(2)} €</span></div>
                    </div>
                  </div>
                </div>

                {i === 0 && (
                  <div style={{ padding: "10px 16px", background: COLORS.ink, color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: COLORS.textOnDarkMuted }}>Pré-rempli sur OR-2403 + devis prêt</span>
                    <button style={{ padding: "6px 14px", borderRadius: 2, background: COLORS.rust, color: "#fff", border: "none", fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Valider et générer devis →</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============================================================
// 6. CLIENTS & VÉHICULES
// ============================================================

function ClientsModule() {
  const statusMap = {
    active: { label: "Actif", color: "green" },
    vip: { label: "VIP Pro", color: "rust" },
    new: { label: "Nouveau", color: "steel" },
    dormant: { label: "Dormant 14m", color: "amber" },
  };

  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* KPI bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 18 }}>
        {[
          { label: "Clients actifs", val: "847", sub: "+ 12 ce mois" },
          { label: "Véhicules suivis", val: "1 124", sub: "ratio 1.32" },
          { label: "Taux de retour 12m", val: "68%", sub: "secteur : 54%", color: COLORS.green },
          { label: "Note Google moyenne", val: "4.7", sub: "187 avis", icon: "★", color: COLORS.rust },
        ].map((k, i) => (
          <Card key={i} style={{ padding: 16 }}>
            <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", fontWeight: 700 }}>{k.label}</div>
            <div style={{ fontSize: 24, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: k.color || COLORS.inkSoft, marginTop: 6, display: "flex", alignItems: "baseline", gap: 4 }}>
              {k.icon && <span>{k.icon}</span>}{k.val}
            </div>
            <div style={{ fontSize: 11, color: "#7A7F86", marginTop: 2 }}>{k.sub}</div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, borderBottom: `1px solid ${COLORS.border}` }}>
        {["Tous", "Particuliers", "Pros / Flottes", "Dormants (38)", "Anniversaires CT (12)"].map((t, i) => (
          <button key={i} style={{
            padding: "8px 14px", background: "transparent",
            border: "none", borderBottom: i === 0 ? `2px solid ${COLORS.rust}` : "2px solid transparent",
            color: i === 0 ? COLORS.inkSoft : "#7A7F86",
            fontSize: 12.5, fontWeight: i === 0 ? 600 : 500,
            cursor: "pointer", fontFamily: "inherit", marginBottom: -1,
          }}>{t}</button>
        ))}
      </div>

      {/* Customers table */}
      <Card>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: COLORS.paperWarm, borderBottom: `1px solid ${COLORS.border}` }}>
              {["Client", "Type", "Véhicules", "Dernière visite", "CA 12 mois", "Statut", ""].map((h, i) => (
                <th key={i} style={{ padding: "11px 14px", textAlign: "left", fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c, i) => (
              <tr key={i} style={{ borderBottom: `1px dashed ${COLORS.border}`, cursor: "pointer", transition: "background 0.1s" }}
                  onMouseEnter={e => e.currentTarget.style.background = COLORS.paperWarm}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <td style={{ padding: "13px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${c.status === "vip" ? COLORS.rust : COLORS.steel}, ${c.status === "vip" ? COLORS.rustDark : COLORS.steelDark})`,
                      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700,
                    }}>{c.name.split(" ").slice(0, 2).map(s => s[0]).join("")}</div>
                    <span style={{ fontWeight: 600, color: COLORS.inkSoft }}>{c.name}</span>
                  </div>
                </td>
                <td style={{ padding: "13px 14px", fontSize: 12, color: "#5A5F66" }}>{c.type}</td>
                <td style={{ padding: "13px 14px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600 }}>
                    <Car size={12} /> {c.vehicles}
                  </span>
                </td>
                <td style={{ padding: "13px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{c.lastVisit}</td>
                <td style={{ padding: "13px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.inkSoft }}>
                  {c.ca12m === 0 ? <span style={{ color: "#7A7F86", fontWeight: 400 }}>—</span> : `${c.ca12m.toLocaleString("fr-FR")} €`}
                </td>
                <td style={{ padding: "13px 14px" }}><Pill color={statusMap[c.status].color} soft>{statusMap[c.status].label}</Pill></td>
                <td style={{ padding: "13px 14px", display: "flex", gap: 6 }}>
                  <button style={{ width: 26, height: 26, borderRadius: 2, border: `1px solid ${COLORS.border}`, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Phone size={11} /></button>
                  <button style={{ width: 26, height: 26, borderRadius: 2, border: `1px solid ${COLORS.border}`, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Mail size={11} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Bottom : campagne IA */}
      <Card style={{ marginTop: 18, padding: 0, overflow: "hidden", background: `linear-gradient(135deg, ${COLORS.ink}, #1F2530)`, color: "#fff" }}>
        <div style={{ padding: 20, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 48, height: 48, borderRadius: 4, background: `linear-gradient(135deg, ${COLORS.rust}, ${COLORS.rustDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles size={22} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10.5, letterSpacing: 1.4, color: COLORS.rust, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Campagne IA suggérée</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>Réveil clients dormants — 38 contacts</div>
            <div style={{ fontSize: 12.5, color: COLORS.textOnDarkMuted, marginTop: 4 }}>Dernière visite &gt; 14 mois · CT &lt; 30j · CA moyen 320 €. Estimation retour : 12 RDV (~3 800 € de CA potentiel).</div>
          </div>
          <button style={{ padding: "10px 18px", borderRadius: 3, background: COLORS.rust, color: "#fff", border: "none", fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Lancer la campagne →</button>
        </div>
      </Card>
    </div>
  );
}

// ============================================================
// 7. DEVIS & FACTURATION
// ============================================================

function FactuModule() {
  const statusMap = {
    draft: { label: "Brouillon", color: "ink" },
    envoye: { label: "Envoyée", color: "steel" },
    paye: { label: "Payée", color: "green" },
    retard_15: { label: "Retard 15j", color: "amber" },
    retard_30: { label: "Retard 30j+", color: "red" },
  };

  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* KPI Trésorerie */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 18 }}>
        {[
          { label: "CA mois en cours", val: "47 280", unit: "€ HT", color: COLORS.steel },
          { label: "Encaissé", val: "38 940", unit: "€", color: COLORS.green },
          { label: "À encaisser", val: "8 340", unit: "€" },
          { label: "Retards > 30j", val: "2 147", unit: "€", color: COLORS.red, alert: true },
        ].map((k, i) => (
          <Card key={i} style={{ padding: 16, position: "relative" }}>
            {k.alert && <div style={{ position: "absolute", top: 14, right: 14 }}><AlertTriangle size={14} color={COLORS.red} /></div>}
            <div style={{ fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", fontWeight: 700 }}>{k.label}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginTop: 6 }}>
              <span style={{ fontSize: 26, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: k.color || COLORS.inkSoft, lineHeight: 1 }}>{k.val}</span>
              <span style={{ fontSize: 12, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace" }}>{k.unit}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Bandeau Factur-X */}
      <Card style={{ marginBottom: 18, padding: 14, display: "flex", alignItems: "center", gap: 14, background: `${COLORS.amber}15`, border: `1px solid ${COLORS.amber}55` }}>
        <ShieldAlert size={20} color={COLORS.amber} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.inkSoft }}>Facturation électronique 2026 · 117 jours avant l'échéance</div>
          <div style={{ fontSize: 11.5, color: "#5A5F66", marginTop: 2 }}>Au 1er septembre 2026, vos factures fournisseurs devront être en Factur-X via une Plateforme Agréée. Cardan IA est compatible : Plateforme PA déjà connectée.</div>
        </div>
        <Pill color="green" soft><CheckCircle2 size={9} /> Prêt</Pill>
      </Card>

      {/* Invoices table */}
      <Card>
        <CardHeader title="Factures récentes" subtitle="14 dernières · 7 affichées" icon={ReceiptText} action={
          <button style={{ padding: "6px 12px", borderRadius: 3, background: COLORS.steel, color: "#fff", border: "none", fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 5 }}>
            <Plus size={11} /> Nouvelle facture
          </button>
        } />
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: COLORS.paperWarm, borderBottom: `1px solid ${COLORS.border}` }}>
              {["N° Facture", "Date", "Client", "OR lié", "TTC", "Statut", "Actions"].map((h, i) => (
                <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 10.5, color: COLORS.steelDark, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {INVOICES.map((inv, i) => (
              <tr key={i} style={{ borderBottom: `1px dashed ${COLORS.border}` }}>
                <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: COLORS.steel }}>{inv.num}</td>
                <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#5A5F66" }}>{inv.date}</td>
                <td style={{ padding: "12px 14px", color: COLORS.inkSoft, fontWeight: 500 }}>{inv.customer}</td>
                <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#5A5F66" }}>{inv.or}</td>
                <td style={{ padding: "12px 14px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.inkSoft }}>{inv.ttc.toFixed(2)} €</td>
                <td style={{ padding: "12px 14px" }}><Pill color={statusMap[inv.status].color} soft>{statusMap[inv.status].label}</Pill></td>
                <td style={{ padding: "12px 14px", display: "flex", gap: 6 }}>
                  <button style={{ padding: "4px 10px", borderRadius: 2, border: `1px solid ${COLORS.border}`, background: "#fff", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>PDF</button>
                  {inv.status.includes("retard") && <button style={{ padding: "4px 10px", borderRadius: 2, border: "none", background: COLORS.rust, color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Relancer IA</button>}
                  {inv.status === "envoye" && <button style={{ padding: "4px 10px", borderRadius: 2, border: `1px solid ${COLORS.steel}`, color: COLORS.steel, background: "#fff", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>Encaisser</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Bottom : relances IA en cours */}
      <Card style={{ marginTop: 18 }}>
        <CardHeader title="Relances automatiques en cours" subtitle="Cardan IA gère la cadence pour vous" icon={Sparkles} />
        <div>
          {[
            { client: "Mercier David", inv: "F-2026-0409", amount: "798,40 €", step: "Relance 1/3", next: "SMS dans 2j", channel: "SMS" },
            { client: "Sté Aube Transport", inv: "F-2026-0407", amount: "2 147,80 €", step: "Relance 3/3 — LRAR", next: "À envoyer aujourd'hui", channel: "Courrier", urgent: true },
          ].map((r, i) => (
            <div key={i} style={{ padding: "13px 20px", borderBottom: i < 1 ? `1px dashed ${COLORS.border}` : "none", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.inkSoft }}>{r.client}</div>
                <div style={{ fontSize: 11.5, color: "#7A7F86", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{r.inv} · {r.amount}</div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Pill color={r.urgent ? "red" : "steel"} soft>{r.step}</Pill>
                <span style={{ fontSize: 11.5, color: r.urgent ? COLORS.red : "#5A5F66", fontWeight: r.urgent ? 600 : 400 }}>{r.next}</span>
                <button style={{ padding: "6px 12px", borderRadius: 2, border: r.urgent ? "none" : `1px solid ${COLORS.steel}`, background: r.urgent ? COLORS.rust : "#fff", color: r.urgent ? "#fff" : COLORS.steel, fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  {r.urgent ? "Activer LRAR" : "Voir"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ============================================================
// 8. CONFORMITÉ & DÉCHETS
// ============================================================

function ConformiteModule() {
  return (
    <div style={{ padding: "24px 32px", background: COLORS.paper, minHeight: "calc(100vh - 88px)" }}>
      {/* Status global */}
      <Card style={{ marginBottom: 18, padding: 20, display: "flex", alignItems: "center", gap: 18, background: `linear-gradient(135deg, #fff, ${COLORS.paperWarm})` }}>
        <div style={{ width: 56, height: 56, borderRadius: 4, background: `linear-gradient(135deg, ${COLORS.green}, #2F5A3F)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)" }}>
          <ShieldCheck size={28} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: 1.4, color: COLORS.green, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Score de conformité</div>
          <div style={{ fontSize: 26, fontWeight: 700, color: COLORS.inkSoft, marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>94 / 100 <span style={{ fontSize: 13, color: COLORS.green, fontFamily: "inherit", fontWeight: 600 }}>· Excellent</span></div>
          <div style={{ fontSize: 12.5, color: "#5A5F66", marginTop: 4 }}>Dernière mise à jour réglementaire : facturation électronique 2026 (intégrée)</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30, textAlign: "center" }}>
          <div>
            <div style={{ fontSize: 22, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: COLORS.green }}>4</div>
            <div style={{ fontSize: 10.5, color: "#7A7F86", letterSpacing: 0.5, textTransform: "uppercase" }}>OK</div>
          </div>
          <div>
            <div style={{ fontSize: 22, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: COLORS.amber }}>2</div>
            <div style={{ fontSize: 10.5, color: "#7A7F86", letterSpacing: 0.5, textTransform: "uppercase" }}>À voir</div>
          </div>
          <div>
            <div style={{ fontSize: 22, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: COLORS.red }}>0</div>
            <div style={{ fontSize: 10.5, color: "#7A7F86", letterSpacing: 0.5, textTransform: "uppercase" }}>Urgent</div>
          </div>
        </div>
      </Card>

      {/* Conformity grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {[
          { icon: Recycle, title: "Pièces d'occasion VHU", subtitle: "Obligation depuis 01/04/2019", status: "ok", detail: "Proposition automatique sur 87% des OR éligibles. Centres VHU agréés connectés : 3.", action: "Voir registre" },
          { icon: Snowflake, title: "F-Gaz climatisation", subtitle: "Attestation capacité valide jusqu'au 12/2027", status: "ok", detail: "Registre R134a/R1234yf à jour. 4 recharges enregistrées ce mois (3,2 kg).", action: "Registre F-Gaz" },
          { icon: ShieldCheck, title: "Garantie légale conformité", subtitle: "2 ans neuf · 1 an occasion", status: "ok", detail: "Mention pré-remplie sur tous vos OR. Aucun litige en cours.", action: "Modèles" },
          { icon: FileText, title: "Devis obligatoire", subtitle: "Article L121-1 Code consom.", status: "ok", detail: "100% des OR > 100 € ont un devis signé client. Archivage 3 ans automatique.", action: "Audit" },
          { icon: Truck, title: "Élimination pneus usagés", subtitle: "Filière Aliapur", status: "warn", detail: "Bordereau juin 2025 non encore enregistré. 47 pneus en attente.", action: "Saisir bordereau" },
          { icon: AlertTriangle, title: "Plan de prévention atelier", subtitle: "Document Unique annuel", status: "warn", detail: "Mise à jour annuelle prévue · prochaine échéance 30/06/2026.", action: "Mettre à jour" },
        ].map((c, i) => (
          <Card key={i} style={{ padding: 18, position: "relative" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 38, height: 38, borderRadius: 3,
                background: c.status === "ok" ? `${COLORS.green}15` : c.status === "warn" ? `${COLORS.amber}20` : `${COLORS.red}15`,
                color: c.status === "ok" ? COLORS.green : c.status === "warn" ? COLORS.amber : COLORS.red,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `1px solid ${c.status === "ok" ? `${COLORS.green}33` : c.status === "warn" ? `${COLORS.amber}55` : `${COLORS.red}33`}`,
              }}>
                <c.icon size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.inkSoft }}>{c.title}</span>
                  {c.status === "ok" ? <CheckCircle2 size={13} color={COLORS.green} /> : <AlertTriangle size={13} color={COLORS.amber} />}
                </div>
                <div style={{ fontSize: 11, color: "#7A7F86", marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{c.subtitle}</div>
                <div style={{ fontSize: 12, color: "#5A5F66", marginTop: 8, lineHeight: 1.5 }}>{c.detail}</div>
                <button style={{
                  marginTop: 12, padding: "6px 12px", borderRadius: 2,
                  background: "transparent", color: c.status === "warn" ? COLORS.rust : COLORS.steel,
                  border: `1px solid ${c.status === "warn" ? COLORS.rust : COLORS.steel}`,
                  fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                }}>{c.action} →</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function CardanIA() {
  const [active, setActive] = useState("dashboard");

  const pages = {
    dashboard: { title: "Poste de pilotage", subtitle: "Vue d'ensemble — Mercredi 6 mai 2026 · 09h41", breadcrumb: ["Cardan IA", "Pilotage"], component: <Dashboard /> },
    or: { title: "Réception & Ordres de réparation", subtitle: "14 OR actifs · 4 en cours · 1 attente pièces", breadcrumb: ["Cardan IA", "Atelier", "Ordres de réparation"], component: <OrModule /> },
    atelier: { title: "Atelier & Planning", subtitle: "Vue technicien · 4 ponts · 2 mécanos présents", breadcrumb: ["Cardan IA", "Atelier", "Planning"], component: <PlanningModule /> },
    pieces: { title: "Pièces & Fournisseurs", subtitle: "6 fournisseurs connectés · Recherche unifiée IA", breadcrumb: ["Cardan IA", "Approvisionnement", "Pièces"], component: <PiecesModule /> },
    diag: { title: "Diag Assist IA", subtitle: "Assistance au diagnostic · 47 cas similaires en base", breadcrumb: ["Cardan IA", "Atelier", "Diagnostic"], component: <DiagModule /> },
    clients: { title: "Clients & Véhicules", subtitle: "847 clients actifs · 1 124 véhicules suivis", breadcrumb: ["Cardan IA", "Relation client", "Fichier"], component: <ClientsModule /> },
    factu: { title: "Devis & Facturation", subtitle: "Factur-X compatible · Échéance 09/2026 prête", breadcrumb: ["Cardan IA", "Gestion", "Facturation"], component: <FactuModule /> },
    conformite: { title: "Conformité & Déchets", subtitle: "Score 94/100 · Tous registres réglementaires", breadcrumb: ["Cardan IA", "Conformité"], component: <ConformiteModule /> },
  };

  const page = pages[active];

  return (
    <div style={{
      display: "flex", height: "100vh", overflow: "hidden",
      fontFamily: "'Söhne', 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
      background: COLORS.paper, color: COLORS.inkSoft,
      fontFeatureSettings: "'ss01', 'cv01'",
    }}>
      {/* Imports fonts via CSS in JS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        button:active { transform: translateY(0.5px); }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: ${COLORS.paperWarm}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${COLORS.steelLight}; }
      `}</style>

      <Sidebar active={active} setActive={setActive} />

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", position: "relative" }}>
        {/* Subtle paper grain overlay */}
        <div style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.5,
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0.025 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <TopBar title={page.title} subtitle={page.subtitle} breadcrumb={page.breadcrumb} />
          {page.component}
        </div>
      </main>
    </div>
  );
}
