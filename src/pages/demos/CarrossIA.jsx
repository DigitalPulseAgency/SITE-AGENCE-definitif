import React, { useState } from 'react';
import {
  LayoutDashboard, FileText, Wrench, Package, MessageSquare,
  Brain, Lightbulb, Settings, Search, Bell, Plus, ChevronRight,
  Clock, AlertTriangle, CheckCircle2, Car, User, Building2,
  Phone, Mail, Calendar, TrendingUp, Activity, Zap, Filter,
  ArrowUpRight, Circle, MoreHorizontal, Send, Paperclip,
  Camera, ClipboardList, Euro, Timer, ShieldCheck
} from 'lucide-react';

export default function CarrossIA() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const modules = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'sinistres', label: 'Dossiers sinistres', icon: FileText, badge: 12 },
    { id: 'atelier', label: 'Suivi atelier', icon: Wrench, badge: 7 },
    { id: 'pieces', label: 'Pièces & Stock', icon: Package, badge: 3 },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'ia', label: 'Assistant IA', icon: Brain },
    { id: 'problematiques', label: 'Centre de solutions', icon: Lightbulb },
    { id: 'reglages', label: 'Réglages', icon: Settings },
  ];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen bg-stone-50 text-stone-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Manrope', system-ui, sans-serif; }
        .display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
        }
        .stripe-pattern {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(234,88,12,0.08) 8px, rgba(234,88,12,0.08) 9px);
        }
      `}</style>

      <div className="flex h-screen">
        {/* SIDEBAR */}
        <aside className="w-72 bg-stone-950 text-stone-100 flex flex-col border-r border-stone-800">
          <div className="px-6 py-7 border-b border-stone-800/80 grain">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center relative overflow-hidden">
                <div className="stripe-pattern absolute inset-0 opacity-40"></div>
                <Wrench className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
              </div>
              <div>
                <div className="display text-2xl leading-none">CARROSS<span className="text-orange-500">IA</span></div>
                <div className="text-xs text-stone-500 mono mt-0.5">v0.1 — DÉMO</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-3 py-5 space-y-0.5">
            {modules.map(m => {
              const Icon = m.icon;
              const active = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left text-sm transition-all group ${
                    active
                      ? 'bg-orange-600 text-white'
                      : 'text-stone-400 hover:bg-stone-900 hover:text-stone-100'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={active ? 2.5 : 2} />
                  <span className="flex-1 font-medium">{m.label}</span>
                  {m.badge && (
                    <span className={`text-[10px] mono font-semibold px-1.5 py-0.5 rounded ${
                      active ? 'bg-white/20 text-white' : 'bg-stone-800 text-orange-400'
                    }`}>{m.badge}</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="px-4 py-4 border-t border-stone-800 bg-stone-900/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-bold">MD</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">M. Dupont</div>
                <div className="text-xs text-stone-500 truncate">Atelier Dupont & Fils</div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* TOP BAR */}
          <header className="h-16 bg-white border-b border-stone-200 flex items-center px-8 gap-6 shrink-0">
            <div className="flex-1 max-w-md relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Rechercher un dossier, client, immatriculation..."
                className="w-full bg-stone-100 border-0 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 hover:bg-stone-100 rounded-md">
                <Bell className="w-5 h-5 text-stone-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full"></span>
              </button>
              <button className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                <Plus className="w-4 h-4" strokeWidth={2.5} />
                Nouveau dossier
              </button>
            </div>
          </header>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto bg-stone-50">
            {activeModule === 'dashboard' && <Dashboard />}
            {activeModule === 'sinistres' && <Sinistres />}
            {activeModule === 'atelier' && <Atelier />}
            {activeModule === 'pieces' && <Pieces />}
            {activeModule === 'communication' && <Communication />}
            {activeModule === 'ia' && <AssistantIA />}
            {activeModule === 'problematiques' && <Problematiques />}
            {activeModule === 'reglages' && <Reglages />}
          </div>
        </main>
      </div>
    </div>
  );
}

// =============================================================
// MODULE 1 : DASHBOARD
// =============================================================
function Dashboard() {
  return (
    <div className="p-8 max-w-7xl">
      <div className="mb-8">
        <div className="flex items-baseline gap-4 mb-2">
          <h1 className="display text-5xl">Tableau de bord</h1>
          <div className="text-sm text-stone-500 mono">MARDI 12 NOV. 2024 — 09:42</div>
        </div>
        <p className="text-stone-600">Bonjour Marc, voici la situation de l'atelier ce matin.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <KpiCard label="Véhicules en atelier" value="7" trend="+2" icon={Car} accent="orange" />
        <KpiCard label="Dossiers ouverts" value="12" trend="3 urgents" icon={FileText} accent="stone" />
        <KpiCard label="CA en cours" value="18 420 €" trend="+12%" icon={Euro} accent="stone" />
        <KpiCard label="Délai moyen" value="6,2 j" trend="-0,8j" icon={Timer} accent="stone" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Activité du jour */}
        <div className="col-span-2 bg-white rounded-lg border border-stone-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="display text-2xl">Activité du jour</h2>
            <button className="text-xs mono text-stone-500 hover:text-orange-600 flex items-center gap-1">
              VOIR TOUT <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { time: '08:30', action: 'Expert ALLIANZ confirmé', detail: 'Peugeot 308 — M. Martin', tag: 'expertise', tagColor: 'bg-blue-100 text-blue-700' },
              { time: '09:15', action: 'Pièces livrées', detail: 'Renault Clio — Pare-choc avant + optique', tag: 'pièces', tagColor: 'bg-green-100 text-green-700' },
              { time: '09:30', action: 'Devis validé par AXA', detail: 'BMW Série 3 — 2 840 €', tag: 'assurance', tagColor: 'bg-purple-100 text-purple-700' },
              { time: '10:00', action: 'Sortie prévue', detail: 'Citroën C3 — Mme Bernard', tag: 'sortie', tagColor: 'bg-orange-100 text-orange-700' },
              { time: '14:30', action: 'Rendez-vous client', detail: 'État des lieux Audi A4 — M. Léon', tag: 'rdv', tagColor: 'bg-stone-200 text-stone-700' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-stone-100 last:border-0">
                <div className="mono text-xs text-stone-500 w-12">{item.time}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{item.action}</div>
                  <div className="text-xs text-stone-500">{item.detail}</div>
                </div>
                <span className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded mono ${item.tagColor}`}>{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alertes IA */}
        <div className="bg-stone-950 text-white rounded-lg p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600 opacity-20 blur-3xl rounded-full"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-orange-600 rounded flex items-center justify-center">
                <Brain className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <h2 className="display text-2xl">Alertes IA</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-stone-900/80 rounded p-3 border-l-2 border-orange-500">
                <div className="flex items-start gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div className="text-sm font-semibold">Relance assurance MAAF</div>
                </div>
                <div className="text-xs text-stone-400 ml-6">Dossier Twingo — 9j sans réponse. Brouillon prêt.</div>
              </div>
              <div className="bg-stone-900/80 rounded p-3 border-l-2 border-yellow-500">
                <div className="flex items-start gap-2 mb-1">
                  <Clock className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <div className="text-sm font-semibold">Pièce en retard</div>
                </div>
                <div className="text-xs text-stone-400 ml-6">Aile AVD Mercedes — fournisseur AD à contacter.</div>
              </div>
              <div className="bg-stone-900/80 rounded p-3 border-l-2 border-blue-500">
                <div className="flex items-start gap-2 mb-1">
                  <Activity className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div className="text-sm font-semibold">Expertise sous-évaluée ?</div>
                </div>
                <div className="text-xs text-stone-400 ml-6">BMW Série 3 — analyse IA suggère contestation.</div>
              </div>
            </div>
            <button className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-2 rounded transition-colors">
              Ouvrir l'assistant IA
            </button>
          </div>
        </div>
      </div>

      {/* Charge atelier */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg border border-stone-200 p-6">
          <h2 className="display text-2xl mb-4">Charge atelier — semaine 46</h2>
          <div className="space-y-3">
            {[
              { day: 'LUN', pct: 95, label: 'Saturé' },
              { day: 'MAR', pct: 80, label: 'Optimal' },
              { day: 'MER', pct: 70, label: 'Optimal' },
              { day: 'JEU', pct: 45, label: 'Disponible' },
              { day: 'VEN', pct: 60, label: 'Optimal' },
            ].map(d => (
              <div key={d.day} className="flex items-center gap-3">
                <div className="mono text-xs font-semibold w-10">{d.day}</div>
                <div className="flex-1 h-7 bg-stone-100 rounded-sm relative overflow-hidden">
                  <div
                    className={`h-full ${d.pct > 90 ? 'bg-red-500' : d.pct > 60 ? 'bg-orange-500' : 'bg-green-500'}`}
                    style={{ width: `${d.pct}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-end px-2 text-xs font-semibold mono">
                    {d.pct}%
                  </div>
                </div>
                <div className="text-xs text-stone-500 w-20">{d.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-stone-200 p-6">
          <h2 className="display text-2xl mb-4">Indicateurs financiers</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-stone-500 mono mb-1">FACTURÉ CE MOIS</div>
              <div className="display text-3xl">42 380 €</div>
              <div className="text-xs text-green-600 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +18% vs n-1</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 mono mb-1">EN ATTENTE PAIEMENT</div>
              <div className="display text-3xl">12 840 €</div>
              <div className="text-xs text-orange-600 mt-1">3 dossiers &gt; 30j</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 mono mb-1">DEVIS EN COURS</div>
              <div className="display text-3xl">8 210 €</div>
              <div className="text-xs text-stone-500 mt-1">5 devis</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 mono mb-1">FRANCHISES À ENCAISSER</div>
              <div className="display text-3xl">2 100 €</div>
              <div className="text-xs text-stone-500 mt-1">4 clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, trend, icon: Icon, accent }) {
  return (
    <div className={`rounded-lg p-5 border ${accent === 'orange' ? 'bg-orange-600 text-white border-orange-700' : 'bg-white border-stone-200'}`}>
      <div className="flex items-start justify-between mb-3">
        <Icon className={`w-5 h-5 ${accent === 'orange' ? 'text-white' : 'text-stone-400'}`} strokeWidth={2} />
        <span className={`text-xs mono ${accent === 'orange' ? 'text-orange-100' : 'text-stone-500'}`}>{trend}</span>
      </div>
      <div className="display text-4xl mb-0.5">{value}</div>
      <div className={`text-xs ${accent === 'orange' ? 'text-orange-100' : 'text-stone-500'}`}>{label}</div>
    </div>
  );
}

// =============================================================
// MODULE 2 : DOSSIERS SINISTRES
// =============================================================
function Sinistres() {
  return (
    <div className="p-8">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="display text-5xl mb-1">Dossiers sinistres</h1>
          <p className="text-stone-600">12 dossiers actifs · 3 nécessitent une action</p>
        </div>
        <div className="flex gap-2">
          <button className="text-sm border border-stone-300 px-3 py-2 rounded flex items-center gap-2 hover:bg-stone-100">
            <Filter className="w-4 h-4" /> Filtrer
          </button>
          <button className="text-sm bg-stone-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-stone-800">
            <Plus className="w-4 h-4" /> Nouveau dossier
          </button>
        </div>
      </div>

      {/* Filtres rapides */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['Tous (12)', 'En attente expert (3)', 'En réparation (5)', 'En attente paiement (2)', 'Clôturés (—)'].map((f, i) => (
          <button key={i} className={`text-xs mono uppercase px-3 py-1.5 rounded-full border ${i===0 ? 'bg-stone-900 text-white border-stone-900' : 'bg-white border-stone-300 text-stone-600 hover:border-stone-900'}`}>{f}</button>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr className="text-left">
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">N° Dossier</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Client / Véhicule</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Assurance</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Étape</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Montant</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Délai</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {[
              { num: 'D-2024-0142', client: 'Martin Pierre', vehicule: 'Peugeot 308 — AB-123-CD', assur: 'Allianz', etape: 'Expertise prévue', etapeColor: 'bg-blue-100 text-blue-700', montant: '3 240 €', delai: '2j', delaiColor: 'text-stone-600' },
              { num: 'D-2024-0141', client: 'Bernard Sophie', vehicule: 'Citroën C3 — EF-456-GH', assur: 'MAIF', etape: 'En réparation', etapeColor: 'bg-orange-100 text-orange-700', montant: '1 890 €', delai: '5j', delaiColor: 'text-stone-600' },
              { num: 'D-2024-0140', client: 'Léon Philippe', vehicule: 'Audi A4 — IJ-789-KL', assur: 'AXA', etape: 'Devis validé', etapeColor: 'bg-green-100 text-green-700', montant: '4 720 €', delai: '1j', delaiColor: 'text-stone-600' },
              { num: 'D-2024-0138', client: 'Garcia Marie', vehicule: 'Renault Twingo — MN-012-OP', assur: 'MAAF', etape: 'Relance à faire', etapeColor: 'bg-red-100 text-red-700', montant: '1 240 €', delai: '9j', delaiColor: 'text-red-600 font-semibold' },
              { num: 'D-2024-0136', client: 'Nguyen Thi', vehicule: 'BMW Série 3 — QR-345-ST', assur: 'GMF', etape: 'Contestation expert', etapeColor: 'bg-purple-100 text-purple-700', montant: '6 580 €', delai: '4j', delaiColor: 'text-stone-600' },
              { num: 'D-2024-0135', client: 'Petit Julien', vehicule: 'Mercedes Classe A — UV-678-WX', assur: 'Matmut', etape: 'Pièces commandées', etapeColor: 'bg-yellow-100 text-yellow-700', montant: '5 120 €', delai: '7j', delaiColor: 'text-stone-600' },
              { num: 'D-2024-0133', client: 'Rousseau Anne', vehicule: 'Renault Clio — YZ-901-AB', assur: 'Generali', etape: 'Sortie aujourd\'hui', etapeColor: 'bg-green-100 text-green-700', montant: '2 340 €', delai: '0j', delaiColor: 'text-green-700' },
            ].map((d, i) => (
              <tr key={i} className="border-b border-stone-100 hover:bg-stone-50 cursor-pointer">
                <td className="px-4 py-3 mono text-xs">{d.num}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold">{d.client}</div>
                  <div className="text-xs text-stone-500">{d.vehicule}</div>
                </td>
                <td className="px-4 py-3">{d.assur}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${d.etapeColor}`}>{d.etape}</span>
                </td>
                <td className="px-4 py-3 mono font-semibold">{d.montant}</td>
                <td className={`px-4 py-3 mono ${d.delaiColor}`}>{d.delai}</td>
                <td className="px-4 py-3"><ChevronRight className="w-4 h-4 text-stone-400" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// =============================================================
// MODULE 3 : SUIVI ATELIER
// =============================================================
function Atelier() {
  const colonnes = [
    { titre: 'En attente', color: 'bg-stone-100 border-stone-300', count: 2, cards: [
      { plate: 'AB-123-CD', model: 'Peugeot 308', client: 'Martin P.', etape: 'Attend expert', urgence: 'normal' },
      { plate: 'CD-456-EF', model: 'Renault Mégane', client: 'Durand L.', etape: 'Attend devis', urgence: 'normal' },
    ]},
    { titre: 'En réparation', color: 'bg-orange-50 border-orange-300', count: 3, cards: [
      { plate: 'EF-456-GH', model: 'Citroën C3', client: 'Bernard S.', etape: 'Tôlerie', urgence: 'normal' },
      { plate: 'UV-678-WX', model: 'Mercedes Classe A', client: 'Petit J.', etape: 'Démontage', urgence: 'normal' },
      { plate: 'GH-789-IJ', model: 'Volkswagen Golf', client: 'Moreau F.', etape: 'Tôlerie', urgence: 'urgent' },
    ]},
    { titre: 'Peinture', color: 'bg-blue-50 border-blue-300', count: 1, cards: [
      { plate: 'IJ-789-KL', model: 'Audi A4', client: 'Léon P.', etape: 'Cabine', urgence: 'normal' },
    ]},
    { titre: 'Contrôle qualité', color: 'bg-purple-50 border-purple-300', count: 0, cards: []},
    { titre: 'Prêt à livrer', color: 'bg-green-50 border-green-300', count: 1, cards: [
      { plate: 'YZ-901-AB', model: 'Renault Clio', client: 'Rousseau A.', etape: 'À 10h', urgence: 'normal' },
    ]},
  ];

  return (
    <div className="p-8">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="display text-5xl mb-1">Suivi atelier</h1>
          <p className="text-stone-600">7 véhicules en cours · Glissez les cartes pour faire avancer le statut</p>
        </div>
        <div className="flex gap-2">
          <button className="text-sm border border-stone-300 px-3 py-2 rounded flex items-center gap-2 hover:bg-stone-100">Vue planning</button>
          <button className="text-sm bg-stone-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-stone-800">
            <Plus className="w-4 h-4" /> Ajouter véhicule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {colonnes.map((c, i) => (
          <div key={i} className={`rounded-lg border-t-4 ${c.color} bg-white p-3 min-h-[500px]`}>
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="font-bold text-sm">{c.titre}</h3>
              <span className="text-xs mono bg-stone-200 px-2 py-0.5 rounded-full">{c.count}</span>
            </div>
            <div className="space-y-2">
              {c.cards.map((card, j) => (
                <div key={j} className={`bg-white rounded-md border p-3 cursor-grab hover:shadow-md transition-shadow ${card.urgence === 'urgent' ? 'border-red-400 border-l-4' : 'border-stone-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="mono text-[10px] font-semibold bg-stone-900 text-white px-1.5 py-0.5 rounded">{card.plate}</div>
                    {card.urgence === 'urgent' && <span className="text-[10px] mono uppercase text-red-600 font-bold">Urgent</span>}
                  </div>
                  <div className="text-sm font-semibold mb-0.5">{card.model}</div>
                  <div className="text-xs text-stone-500 mb-2">{card.client}</div>
                  <div className="text-xs bg-stone-100 inline-block px-2 py-0.5 rounded">{card.etape}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// MODULE 4 : PIÈCES & STOCK
// =============================================================
function Pieces() {
  return (
    <div className="p-8">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="display text-5xl mb-1">Pièces & Stock</h1>
          <p className="text-stone-600">Suivi des commandes et alertes fournisseurs</p>
        </div>
        <button className="text-sm bg-stone-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-stone-800">
          <Plus className="w-4 h-4" /> Nouvelle commande
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="text-xs text-stone-500 mono mb-1">EN COMMANDE</div>
          <div className="display text-4xl">14</div>
          <div className="text-xs text-stone-500">pièces · 3 fournisseurs</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <div className="text-xs text-orange-700 mono mb-1">EN RETARD</div>
          <div className="display text-4xl text-orange-700">3</div>
          <div className="text-xs text-orange-700">à relancer</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="text-xs text-stone-500 mono mb-1">LIVRÉES AUJOURD'HUI</div>
          <div className="display text-4xl">5</div>
          <div className="text-xs text-stone-500">à contrôler</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
          <h3 className="font-bold">Commandes en cours</h3>
          <button className="text-xs mono text-stone-500 hover:text-orange-600">VOIR HISTORIQUE</button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr className="text-left">
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Pièce</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Dossier</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Fournisseur</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Commandée</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Livraison prévue</th>
              <th className="px-4 py-3 mono text-xs uppercase text-stone-500">Statut</th>
            </tr>
          </thead>
          <tbody>
            {[
              { piece: 'Aile AVD Mercedes Classe A', dossier: 'D-2024-0135', four: 'AD Pièces', com: '04/11', livr: '08/11', statut: 'En retard', sColor: 'bg-red-100 text-red-700' },
              { piece: 'Pare-choc AV Renault Twingo', dossier: 'D-2024-0138', four: 'OEM Renault', com: '06/11', livr: '13/11', statut: 'En route', sColor: 'bg-blue-100 text-blue-700' },
              { piece: 'Optique gauche BMW Série 3', dossier: 'D-2024-0136', four: 'OEM BMW', com: '07/11', livr: '14/11', statut: 'Préparée', sColor: 'bg-yellow-100 text-yellow-700' },
              { piece: 'Capot Peugeot 308', dossier: 'D-2024-0142', four: 'AD Pièces', com: '08/11', livr: '12/11', statut: 'Livrée', sColor: 'bg-green-100 text-green-700' },
              { piece: 'Pare-choc AR Citroën C3', dossier: 'D-2024-0141', four: 'OEM Citroën', com: '05/11', livr: '09/11', statut: 'En retard', sColor: 'bg-red-100 text-red-700' },
            ].map((r, i) => (
              <tr key={i} className="border-b border-stone-100 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold">{r.piece}</td>
                <td className="px-4 py-3 mono text-xs">{r.dossier}</td>
                <td className="px-4 py-3">{r.four}</td>
                <td className="px-4 py-3 mono text-xs text-stone-500">{r.com}</td>
                <td className="px-4 py-3 mono text-xs">{r.livr}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${r.sColor}`}>{r.statut}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// =============================================================
// MODULE 5 : COMMUNICATION
// =============================================================
function Communication() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="display text-5xl mb-1">Communication</h1>
        <p className="text-stone-600">SMS, e-mails et appels — automatisation des notifications client</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
            <h3 className="font-bold">Conversations récentes</h3>
            <div className="flex gap-1">
              <button className="text-xs mono px-2 py-1 bg-stone-900 text-white rounded">TOUS</button>
              <button className="text-xs mono px-2 py-1 text-stone-600 hover:bg-stone-100 rounded">SMS</button>
              <button className="text-xs mono px-2 py-1 text-stone-600 hover:bg-stone-100 rounded">EMAIL</button>
            </div>
          </div>
          <div>
            {[
              { type: 'SMS', name: 'Sophie Bernard', last: 'Merci, à demain pour récupérer la voiture !', time: '09:32', auto: false, unread: false },
              { type: 'EMAIL', name: 'Allianz — Service Sinistres', last: 'Validation accord d\'expertise — Dossier 0142', time: '09:15', auto: false, unread: true },
              { type: 'SMS', name: 'Pierre Martin', last: '[Auto] Votre Peugeot 308 est entrée en réparation', time: '08:30', auto: true, unread: false },
              { type: 'EMAIL', name: 'AD Pièces', last: 'Confirmation expédition commande 24-1842', time: '08:12', auto: false, unread: false },
              { type: 'SMS', name: 'Marie Garcia', last: 'Bonjour, avez-vous des nouvelles de l\'expert ?', time: 'Hier', auto: false, unread: true },
            ].map((c, i) => (
              <div key={i} className="px-5 py-3 border-b border-stone-100 hover:bg-stone-50 cursor-pointer flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-semibold text-stone-600 text-xs">
                  {c.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{c.name}</span>
                    <span className="mono text-[10px] uppercase text-stone-400">{c.type}</span>
                    {c.auto && <span className="text-[10px] mono px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">AUTO</span>}
                  </div>
                  <div className={`text-xs truncate ${c.unread ? 'text-stone-900 font-semibold' : 'text-stone-500'}`}>{c.last}</div>
                </div>
                <div className="mono text-xs text-stone-400 shrink-0">{c.time}</div>
                {c.unread && <div className="w-2 h-2 bg-orange-500 rounded-full"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-stone-950 text-white rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
              <h3 className="font-bold">Notifications auto</h3>
            </div>
            <p className="text-xs text-stone-400 mb-4">Vos clients sont prévenus automatiquement à chaque étape.</p>
            <div className="space-y-2 text-xs">
              {['Véhicule reçu', 'Expert mandaté', 'En réparation', 'Peinture en cours', 'Prêt à récupérer'].map((s, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-stone-800 last:border-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  <span>{s}</span>
                  <span className="ml-auto mono text-stone-500">SMS</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-stone-200 p-5">
            <h3 className="font-bold mb-3 text-sm">Statistiques du mois</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">SMS envoyés auto</span>
                <span className="font-semibold mono">142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Appels client évités</span>
                <span className="font-semibold mono text-green-600">~38</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Temps gagné estimé</span>
                <span className="font-semibold mono text-green-600">9h20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================
// MODULE 6 : ASSISTANT IA
// =============================================================
function AssistantIA() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 mb-3 bg-stone-950 text-white px-3 py-1 rounded-full">
          <Brain className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
          <span className="text-xs mono uppercase tracking-wider">Powered by IA</span>
        </div>
        <h1 className="display text-5xl mb-1">Assistant IA</h1>
        <p className="text-stone-600">Votre copilote 24/7 pour les tâches qui vous prennent du temps.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { icon: FileText, title: 'Rédiger une relance assurance', desc: 'Génère un courrier formel basé sur le dossier' },
          { icon: ShieldCheck, title: 'Analyser un rapport d\'expertise', desc: 'Détecte les sous-évaluations et propose une contestation' },
          { icon: ClipboardList, title: 'Créer un devis', desc: 'À partir de photos et description du sinistre' },
          { icon: MessageSquare, title: 'Répondre à un client', desc: 'Brouillon de réponse adaptée au ton' },
          { icon: Camera, title: 'Diagnostic photo', desc: 'Identification des dommages depuis une image' },
          { icon: Calendar, title: 'Planifier la semaine', desc: 'Optimise le planning atelier intelligemment' },
        ].map((c, i) => {
          const Icon = c.icon;
          return (
            <button key={i} className="text-left bg-white border border-stone-200 hover:border-orange-500 hover:shadow-md transition-all rounded-lg p-5 group">
              <div className="w-10 h-10 bg-stone-100 group-hover:bg-orange-100 rounded flex items-center justify-center mb-3 transition-colors">
                <Icon className="w-5 h-5 text-stone-700 group-hover:text-orange-600" />
              </div>
              <div className="font-bold mb-1">{c.title}</div>
              <div className="text-xs text-stone-500">{c.desc}</div>
            </button>
          );
        })}
      </div>

      <div className="bg-stone-950 text-white rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 bg-orange-600 rounded flex items-center justify-center">
            <Brain className="w-4 h-4" strokeWidth={2.5} />
          </div>
          <h3 className="display text-2xl">Discutez avec l'assistant</h3>
        </div>
        <div className="bg-stone-900 rounded p-4 mb-3 text-sm text-stone-300 italic">
          Exemple : "Rédige une relance pour le dossier de Mme Garcia, ça fait 9 jours que la MAAF ne répond pas."
        </div>
        <div className="flex gap-2 bg-stone-900 rounded p-2">
          <input
            type="text"
            placeholder="Posez votre question..."
            className="flex-1 bg-transparent border-0 text-white text-sm focus:outline-none px-3"
          />
          <button className="p-2 hover:bg-stone-800 rounded"><Paperclip className="w-4 h-4 text-stone-400" /></button>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-1.5">
            <Send className="w-3.5 h-3.5" /> Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================================
// MODULE 7 : PROBLÉMATIQUES / SOLUTIONS (CRM)
// =============================================================
function Problematiques() {
  return (
    <div className="p-8">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="display text-5xl mb-1">Centre de solutions</h1>
          <p className="text-stone-600">Toutes les problématiques rencontrées et leurs solutions, capitalisées au même endroit.</p>
        </div>
        <button className="text-sm bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-500 font-semibold">
          <Plus className="w-4 h-4" /> Soumettre un problème
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Problèmes résolus', value: '47', color: 'green' },
          { label: 'En cours d\'analyse', value: '3', color: 'orange' },
          { label: 'Solutions appliquées', value: '52', color: 'stone' },
          { label: 'Temps gagné estimé', value: '38h', color: 'stone' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-xs text-stone-500 mono mb-1 uppercase">{s.label}</div>
            <div className={`display text-3xl ${s.color === 'green' ? 'text-green-600' : s.color === 'orange' ? 'text-orange-600' : 'text-stone-900'}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {[
          {
            cat: 'Assurance',
            catColor: 'bg-purple-100 text-purple-700',
            titre: 'MAAF ne répond pas après 9 jours d\'attente sur dossier client',
            desc: 'Modèle de relance recommandée + escalade au médiateur si nécessaire.',
            statut: 'Solution appliquée',
            sColor: 'bg-green-100 text-green-700',
            date: 'Il y a 2 jours'
          },
          {
            cat: 'Pièces',
            catColor: 'bg-yellow-100 text-yellow-700',
            titre: 'Pièces multi-fournisseurs qui n\'arrivent jamais en même temps',
            desc: 'Mise en place d\'un système d\'alertes échelonnées + commande prioritaire chez fournisseur unique.',
            statut: 'Solution appliquée',
            sColor: 'bg-green-100 text-green-700',
            date: 'Il y a 1 semaine'
          },
          {
            cat: 'Expert',
            catColor: 'bg-blue-100 text-blue-700',
            titre: 'Expert sous-évalue régulièrement les réparations sur véhicules récents',
            desc: 'Procédure de contestation type avec arguments techniques + base de prix constructeur.',
            statut: 'En cours d\'analyse',
            sColor: 'bg-orange-100 text-orange-700',
            date: 'Il y a 3 jours'
          },
          {
            cat: 'Client',
            catColor: 'bg-stone-200 text-stone-700',
            titre: 'Trop d\'appels clients pour savoir où en est leur véhicule',
            desc: 'SMS automatiques à chaque étape de la réparation. Réduction estimée des appels : 70%.',
            statut: 'Solution appliquée',
            sColor: 'bg-green-100 text-green-700',
            date: 'Il y a 2 semaines'
          },
          {
            cat: 'Gestion',
            catColor: 'bg-orange-100 text-orange-700',
            titre: 'Devis qui prennent 1h à rédiger pour les assurances',
            desc: 'Génération automatique de devis depuis photos + base de tarifs + pré-remplissage.',
            statut: 'Solution appliquée',
            sColor: 'bg-green-100 text-green-700',
            date: 'Il y a 3 semaines'
          },
        ].map((p, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-400 cursor-pointer transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] mono uppercase tracking-wider px-2 py-0.5 rounded ${p.catColor}`}>{p.cat}</span>
                  <span className={`text-[10px] mono uppercase tracking-wider px-2 py-0.5 rounded ${p.sColor}`}>{p.statut}</span>
                  <span className="text-xs text-stone-400 ml-auto">{p.date}</span>
                </div>
                <div className="font-bold mb-1">{p.titre}</div>
                <div className="text-sm text-stone-600">{p.desc}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-400 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// MODULE 8 : RÉGLAGES
// =============================================================
function Reglages() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="display text-5xl mb-1">Réglages</h1>
        <p className="text-stone-600">Paramétrez votre application selon votre atelier.</p>
      </div>

      <div className="space-y-3">
        {[
          { titre: 'Profil de l\'atelier', desc: 'Nom, adresse, SIRET, logo, horaires', icon: Building2 },
          { titre: 'Équipe', desc: 'Gérer les membres de l\'équipe et leurs rôles', icon: User },
          { titre: 'Notifications automatiques', desc: 'Modèles SMS et e-mails pour les clients', icon: Bell },
          { titre: 'Assurances partenaires', desc: 'Liste des assureurs et contacts experts', icon: ShieldCheck },
          { titre: 'Fournisseurs de pièces', desc: 'Catalogue fournisseurs et délais moyens', icon: Package },
          { titre: 'Tarifs et taux horaire', desc: 'Configuration des prix et conventions', icon: Euro },
          { titre: 'Intégrations IA', desc: 'Configurer les automatisations IA', icon: Brain },
        ].map((r, i) => {
          const Icon = r.icon;
          return (
            <button key={i} className="w-full text-left bg-white border border-stone-200 hover:border-stone-400 rounded-lg p-5 flex items-center gap-4 transition-colors">
              <div className="w-10 h-10 bg-stone-100 rounded flex items-center justify-center">
                <Icon className="w-5 h-5 text-stone-700" />
              </div>
              <div className="flex-1">
                <div className="font-bold">{r.titre}</div>
                <div className="text-xs text-stone-500">{r.desc}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-400" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
