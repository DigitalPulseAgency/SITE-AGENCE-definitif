import { ArrowRight, Sparkles, Car, UtensilsCrossed, Clock, PhoneCall, CalendarCheck, FileText, Repeat, LayoutDashboard, Lock, BadgeEuro, Star } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Automatisations() {
  // Ce qu'on automatise pour les agences de covering (spécialité n°1)
  const coveringFeatures = [
    { icon: PhoneCall, titre: 'Réceptionniste IA vocal', desc: "Pendant que vous posez, l'IA répond au téléphone, renseigne le client, qualifie la demande et fixe les rendez-vous de pose. Plus aucun appel manqué." },
    { icon: FileText, titre: 'Demandes & devis centralisés', desc: 'Toutes les demandes entrantes arrivent au même endroit, structurées et prêtes à chiffrer. Fini les infos éparpillées entre SMS, DM et appels.' },
    { icon: CalendarCheck, titre: 'Prise de rendez-vous de pose', desc: 'Vos clients réservent un créneau de pose en autonomie. Votre planning se remplit tout seul, sans aller-retour téléphonique.' },
    { icon: Repeat, titre: 'Relances & suivi automatisés', desc: 'Devis sans réponse, clients à relancer, suivi après pose : tout part automatiquement au bon moment.' },
    { icon: LayoutDashboard, titre: 'Tableau de bord centralisé', desc: 'Clients, rendez-vous, demandes en cours, suivi : tout votre quotidien piloté depuis un seul outil sur-mesure.' },
    { icon: Clock, titre: 'Des heures récupérées', desc: 'On élimine les tâches répétitives à faible valeur ajoutée pour vous rendre 4 à 12h par semaine — du temps que vous remettez sur la pose et la vente.' },
  ];

  // Ce qu'on déploie en restauration (spécialité n°2, déjà en place chez des clients)
  const restoFeatures = [
    { icon: PhoneCall, titre: 'Réceptionniste IA vocal de réservation', desc: "L'IA prend les réservations et répond aux questions par téléphone, même en plein coup de feu." },
    { icon: UtensilsCrossed, titre: 'Prise de commande & réservations', desc: 'Commande et réservation en ligne, intégrées à votre fonctionnement, sans commission de plateforme.' },
    { icon: Star, titre: 'Avis & fidélisation', desc: 'Collecte automatique des avis Google et relances de fidélité, sans y penser.' },
    { icon: LayoutDashboard, titre: 'Tout centralisé', desc: 'Réservations, messages et avis réunis au même endroit, pilotés simplement.' },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-25 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6B3FE8]/30 to-[#6B3FE8]/10 border border-[#6B3FE8]/40 mb-8">
            <Sparkles className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">Notre spécialité · Agences de covering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Spécialiste de l'automatisation<br />
            pour les <span className="text-[#6B3FE8]">agences de covering</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-6 max-w-3xl leading-relaxed">
            Je développe des infrastructures IA sur-mesure où j'implémente une solution adaptée à <strong className="text-white">chaque problématique de votre métier</strong> — pour éliminer les tâches répétitives, chronophages et à faible valeur ajoutée.
          </p>
          <p className="text-lg text-white/55 mb-10 max-w-3xl leading-relaxed">
            Une infrastructure pensée pour le covering : réceptionniste IA vocal, prise de rendez-vous de pose, devis centralisés, relances automatiques. Le tout tourne 24h/24 et vous fait récupérer plusieurs heures chaque semaine.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5">
            Réserver mon diagnostic gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* COVERING — spécialité n°1 */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-[#6B3FE8]/15">
              <Car className="w-7 h-7 text-[#B59FFF]" />
            </div>
            <span className="text-sm font-bold text-[#B59FFF] uppercase tracking-widest">Notre cœur de métier</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Conçu pour les agences de covering.
          </h2>
          <p className="text-lg text-white/65 max-w-3xl mb-12 leading-relaxed">
            On connaît votre quotidien : le téléphone qui sonne pendant que vous êtes en pose, les devis à relancer, les rendez-vous à caler. On construit l'infrastructure qui prend tout ça en charge à votre place.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coveringFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#6B3FE8]/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#B59FFF]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.titre}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCÉNARIO CONCRET — COVERING */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#B59FFF] uppercase tracking-widest">Un cas concret</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Un devis demandé à 21h, signé pendant que vous posez.
            </h2>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mt-4 leading-relaxed">
              Voilà ce que votre infrastructure fait toute seule, pendant que vous êtes sous un véhicule ou fermé.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { h: '21h00', t: 'Un prospect demande un devis sur Instagram', d: 'Pendant que vous posez ou après la fermeture. Avant, ce message attendait le lendemain — souvent trop tard.' },
              { h: '21h00', t: "Le réceptionniste IA répond en 30 secondes", d: 'Il pose les 3 bonnes questions : modèle du véhicule, covering total ou partiel, type de finition. La demande est qualifiée.' },
              { h: '21h01', t: 'Pré-chiffrage + créneau de pose proposé', d: 'Une fourchette de prix est donnée et un créneau de pose est proposé directement dans votre agenda.' },
              { h: '21h02', t: "Acompte encaissé pour bloquer le créneau", d: 'Fini les no-show : le créneau n\'est réservé qu\'une fois l\'acompte versé.' },
              { h: 'J+2', t: 'Relance automatique si pas de réponse', d: 'Le devis sans suite est relancé tout seul. Le client ne file plus chez le concurrent par oubli.' },
              { h: 'Demain matin', t: 'Vous découvrez un RDV confirmé et payé', d: "Vous n'avez rien fait. La machine a travaillé toute la nuit à votre place." },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#6B3FE8]/40 transition-all duration-300">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-bold text-[#B59FFF] mono">{step.h}</span>
                </div>
                <div className="flex-shrink-0 w-px self-stretch bg-[#6B3FE8]/30" />
                <div>
                  <h3 className="font-bold text-white mb-1">{step.t}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 text-sm mt-8 max-w-2xl mx-auto">
            Chaque agence est différente : on construit le scénario exact selon <span className="text-white/80">votre façon de travailler</span>.
          </p>
        </div>
      </section>

      {/* RESTAURANTS — spécialité n°2 */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-[#6B3FE8]/15">
              <UtensilsCrossed className="w-7 h-7 text-[#B59FFF]" />
            </div>
            <span className="text-sm font-bold text-[#B59FFF] uppercase tracking-widest">Déjà déployé chez nos clients</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Et aussi : la restauration.
          </h2>
          <p className="text-lg text-white/65 max-w-3xl mb-12 leading-relaxed">
            On travaille déjà avec des restaurants et on y a implémenté des solutions concrètes. Prise de commande, réservations, avis, fidélisation : on automatise ce qui fait perdre du temps en plein service.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {restoFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#6B3FE8]/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#B59FFF]" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{f.titre}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RÉSULTAT — temps & argent */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gradient-to-br from-[#6B3FE8]/20 to-transparent border border-[#6B3FE8]/30 rounded-2xl p-7">
              <Clock className="w-7 h-7 text-[#B59FFF] mb-3" />
              <div className="text-4xl font-black mb-1">4 à 12h</div>
              <p className="text-white/60 text-sm">récupérées chaque semaine sur les tâches répétitives.</p>
            </div>
            <div className="bg-gradient-to-br from-[#6B3FE8]/20 to-transparent border border-[#6B3FE8]/30 rounded-2xl p-7">
              <BadgeEuro className="w-7 h-7 text-[#B59FFF] mb-3" />
              <div className="text-4xl font-black mb-1">Des milliers d'€</div>
              <p className="text-white/60 text-sm">économisés sur quelques mois, rien qu'en temps gagné.</p>
            </div>
            <div className="bg-gradient-to-br from-[#6B3FE8]/20 to-transparent border border-[#6B3FE8]/30 rounded-2xl p-7">
              <PhoneCall className="w-7 h-7 text-[#B59FFF] mb-3" />
              <div className="text-4xl font-black mb-1">24/7</div>
              <p className="text-white/60 text-sm">appels et rendez-vous gérés par l'réceptionniste IA vocal, sans interruption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SUR RENDEZ-VOUS (remplace les démos) */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#6B3FE8]/15 mb-6">
              <Lock className="w-7 h-7 text-[#B59FFF]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes applications, je vous les montre en vrai.
            </h2>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-8 leading-relaxed">
              Je ne mets pas mes applications en démo libre sur le site. Ce que je construis est sur-mesure, et ça se présente bien mieux en direct. Réservez un appel : je vous fais une démonstration live des infrastructures déjà déployées, et on voit ce qu'on peut bâtir pour votre agence.
            </p>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5">
              Voir une démo en direct
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre agence de covering<br />mérite de <span className="text-[#6B3FE8]">tourner toute seule</span>.
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ce qui vous prend du temps au quotidien, et on définit l'infrastructure IA qui vous le rend.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5">
            Je réserve mon diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
