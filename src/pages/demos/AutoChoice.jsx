import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Car, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AutoChoice() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Quel est ton métier ?
        </h1>
        <p className="text-lg text-white/70 text-center mt-4 max-w-2xl mx-auto">
          Choisis ta démo et découvre une app conçue pour ton activité.
        </p>

        {/* Grille 2 cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {/* MÉCANICIENS */}
          <Link
            to="/demo/cardan"
            className="group block bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-transparent border-2 border-orange-400/30 rounded-2xl p-8 hover:border-orange-400/60 hover:shadow-[0_0_30px_rgba(217,122,44,0.3)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <Wrench className="w-12 h-12 text-orange-400 mb-6" strokeWidth={2} />
            <h2 className="text-3xl font-bold mb-3">Mécaniciens</h2>
            <p className="text-white/75 leading-relaxed mb-6">
              Diagnostic, ordres de réparation, stock pièces, planning atelier, devis client. Tout dans une seule app spécialement pensée pour la mécanique générale.
            </p>
            <div className="inline-flex items-center gap-2 text-orange-300 font-semibold group-hover:gap-3 transition-all">
              Découvrir CARDAN IA
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* CARROSSIERS */}
          <Link
            to="/demo/carrossia"
            className="group block bg-gradient-to-br from-amber-400/10 via-amber-500/5 to-transparent border-2 border-amber-400/30 rounded-2xl p-8 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <Car className="w-12 h-12 text-amber-400 mb-6" strokeWidth={2} />
            <h2 className="text-3xl font-bold mb-3">Carrossiers</h2>
            <p className="text-white/75 leading-relaxed mb-6">
              Gestion des dossiers sinistres, suivi atelier, communication assurance et client, devis et facturation. Une app pensée pour la carrosserie/peinture.
            </p>
            <div className="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:gap-3 transition-all">
              Découvrir CARROSSIA
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

        </div>

        {/* Retour */}
        <div className="mt-12 text-center">
          <Link
            to="/automatisations"
            className="inline-flex items-center gap-2 text-white/60 hover:text-violet-300 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux automatisations
          </Link>
        </div>

      </div>
    </div>
  );
}
