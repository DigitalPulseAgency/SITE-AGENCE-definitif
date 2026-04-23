import { useState, useEffect } from 'react';
import { CAL_LINK } from '../config/links';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          
          {/* LOGO — Visible partout */}
          <a 
            href="#hero" 
            onClick={handleNavClick('hero')}
            className="flex items-center flex-shrink-0"
          >
            <img 
              src="/logo/logo_light_bg.png" 
              alt="DigitalPulse Agency" 
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
          </a>

          {/* NAVIGATION DESKTOP — CACHÉE SUR MOBILE */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#hero" onClick={handleNavClick('hero')} className="text-[#1F1B2E] hover:text-[#6B3FE8] transition-colors font-medium text-sm lg:text-base">Accueil</a>
            <a href="#offres" onClick={handleNavClick('offres')} className="text-[#1F1B2E] hover:text-[#6B3FE8] transition-colors font-medium text-sm lg:text-base">Offres</a>
            <a href="#sites" onClick={handleNavClick('sites')} className="text-[#1F1B2E] hover:text-[#6B3FE8] transition-colors font-medium text-sm lg:text-base">Sites</a>
            <a href="#a-propos" onClick={handleNavClick('a-propos')} className="text-[#1F1B2E] hover:text-[#6B3FE8] transition-colors font-medium text-sm lg:text-base">À propos</a>
            <a href="#faq" onClick={handleNavClick('faq')} className="text-[#1F1B2E] hover:text-[#6B3FE8] transition-colors font-medium text-sm lg:text-base">FAQ</a>
          </nav>

          {/* BOUTONS DESKTOP UNIQUEMENT — CACHÉS SUR MOBILE */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Pilule téléphone */}
            <a 
              href="tel:+33615940883" 
              className="group inline-flex items-center gap-2 bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 text-green-700 hover:text-green-800 font-semibold py-2 px-3 lg:px-4 rounded-full transition-all duration-200 hover:scale-105"
            >
              <span className="relative flex items-center justify-center">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </span>
              <span className="hidden lg:inline font-bold tracking-wide text-sm">06 15 94 08 83</span>
            </a>

            {/* CTA Diagnostic gratuit */}
            <a 
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#6B3FE8] text-white font-bold py-2.5 px-5 lg:py-3 lg:px-6 rounded-xl hover:bg-[#5A32D4] hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/20 text-sm lg:text-base"
            >
              Diagnostic gratuit
            </a>
          </div>

          {/* BURGER BUTTON — VISIBLE UNIQUEMENT SUR MOBILE */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6 text-[#1F1B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      {/* MENU MOBILE PLEIN ÉCRAN — VISIBLE UNIQUEMENT QUAND OUVERT */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          
          {/* Overlay sombre cliquable */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" 
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Panneau menu qui slide depuis la droite */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slideInRight">
            
            {/* Header du menu avec bouton close */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img 
                src="/logo/logo_light_bg.png" 
                alt="DigitalPulse Agency" 
                className="h-10 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Fermer le menu"
              >
                <svg className="w-6 h-6 text-[#1F1B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation verticale */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-2">
                <li>
                  <a href="#hero" onClick={handleNavClick('hero')} className="block py-3 px-4 text-xl font-bold text-[#1F1B2E] hover:bg-violet-50 hover:text-[#6B3FE8] rounded-lg transition-colors">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#offres" onClick={handleNavClick('offres')} className="block py-3 px-4 text-xl font-bold text-[#1F1B2E] hover:bg-violet-50 hover:text-[#6B3FE8] rounded-lg transition-colors">
                    Offres
                  </a>
                </li>
                <li>
                  <a href="#sites" onClick={handleNavClick('sites')} className="block py-3 px-4 text-xl font-bold text-[#1F1B2E] hover:bg-violet-50 hover:text-[#6B3FE8] rounded-lg transition-colors">
                    Sites
                  </a>
                </li>
                <li>
                  <a href="#a-propos" onClick={handleNavClick('a-propos')} className="block py-3 px-4 text-xl font-bold text-[#1F1B2E] hover:bg-violet-50 hover:text-[#6B3FE8] rounded-lg transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={handleNavClick('faq')} className="block py-3 px-4 text-xl font-bold text-[#1F1B2E] hover:bg-violet-50 hover:text-[#6B3FE8] rounded-lg transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Footer du menu avec contact + CTA */}
            <div className="border-t border-gray-100 p-6 space-y-4">
              
              {/* Lien téléphone */}
              <a 
                href="tel:+33615940883" 
                className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors"
              >
                <span className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </span>
                <div className="flex flex-col">
                  <span className="font-bold text-green-700 text-base">06 15 94 08 83</span>
                  <span className="text-xs text-green-600">Lun-Sam, 9h-20h</span>
                </div>
              </a>

              {/* CTA principal */}
              <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-[#6B3FE8] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#5A32D4] transition-colors shadow-lg shadow-violet-500/20"
              >
                Diagnostic gratuit
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
