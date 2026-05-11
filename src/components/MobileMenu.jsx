import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  X, ChevronDown, Home, Briefcase, User, HelpCircle,
  Globe, Instagram, MapPin, Sparkles, Linkedin, Phone, Zap
} from 'lucide-react';
import { CAL_LINK, INSTAGRAM_LINK, TIKTOK_LINK, LINKEDIN_LINK } from '../config/links';
import TikTokIcon from './icons/TikTokIcon';

const SERVICES = [
  { label: 'Sites internet', path: '/sites-internet', Icon: Globe },
  { label: 'Réseaux sociaux', path: '/reseaux-sociaux', Icon: Instagram },
  { label: 'Fiche Google', path: '/fiche-google', Icon: MapPin },
  { label: 'Automatisations IA', path: '/automatisations', Icon: Sparkles },
];

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll lock + ESC handler
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  // Reset sous-menu Services à chaque fermeture du menu
  useEffect(() => {
    if (!isOpen) setServicesOpen(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const goToRoute = (path) => (e) => {
    e.preventDefault();
    onClose();
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const goToAnchor = (sectionId) => (e) => {
    e.preventDefault();
    onClose();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 250);
    } else {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div
      role="dialog"
      aria-label="Menu de navigation"
      className="md:hidden fixed inset-0 z-[100] flex flex-col overflow-y-auto text-white"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #1a0d2e 50%, #0a0a0f 100%)',
        animation: 'fadeInMenu 0.25s ease-out'
      }}
    >
      <style>{`
        @keyframes fadeInMenu {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* HEADER */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[rgba(10,10,15,0.9)] backdrop-blur-xl">
        <span className="text-2xl font-bold text-white">Menu</span>
        <button
          onClick={onClose}
          aria-label="Fermer le menu"
          className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 transition-colors text-white"
        >
          <X size={26} strokeWidth={2.5} />
        </button>
      </div>

      {/* CORPS */}
      <nav className="flex-1 flex flex-col gap-2 px-6 pt-8 pb-4">

        <a
          href="/"
          onClick={goToRoute('/')}
          className="flex items-center gap-3.5 px-4 py-4 min-h-[56px] rounded-xl text-white text-lg font-semibold hover:bg-violet-500/12 active:bg-violet-500/20 transition-colors"
        >
          <Home size={22} strokeWidth={2} className="text-white" />
          <span>Accueil</span>
        </a>

        {/* Services (déployable) */}
        <button
          type="button"
          onClick={() => setServicesOpen((v) => !v)}
          aria-expanded={servicesOpen}
          className={`w-full text-left flex items-center gap-3.5 px-4 py-4 min-h-[56px] rounded-xl text-white text-lg font-semibold transition-colors ${
            servicesOpen ? 'bg-violet-500/12' : 'hover:bg-violet-500/12 active:bg-violet-500/20'
          }`}
        >
          <Briefcase size={22} strokeWidth={2} className="text-white" />
          <span className="flex-1">Services</span>
          <ChevronDown
            size={20}
            strokeWidth={2.5}
            className="text-[#B59FFF] transition-transform duration-300"
            style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        {/* Sous-menu Services */}
        <div
          className="ml-4 border-l-2 border-violet-500/30 overflow-hidden transition-all duration-300"
          style={{ maxHeight: servicesOpen ? '500px' : '0px' }}
        >
          <div className="flex flex-col py-2">
            {SERVICES.map(({ label, path, Icon }) => (
              <a
                key={path}
                href={path}
                onClick={goToRoute(path)}
                className="flex items-center gap-3 px-4 py-3 text-white/80 text-base font-medium hover:text-white hover:bg-violet-500/8 rounded-lg transition-colors"
              >
                <Icon size={18} strokeWidth={2} className="text-[#B59FFF]" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <a
          href="/#a-propos"
          onClick={goToAnchor('a-propos')}
          className="flex items-center gap-3.5 px-4 py-4 min-h-[56px] rounded-xl text-white text-lg font-semibold hover:bg-violet-500/12 active:bg-violet-500/20 transition-colors"
        >
          <User size={22} strokeWidth={2} className="text-white" />
          <span>À propos</span>
        </a>

        <a
          href="/#faq"
          onClick={goToAnchor('faq')}
          className="flex items-center gap-3.5 px-4 py-4 min-h-[56px] rounded-xl text-white text-lg font-semibold hover:bg-violet-500/12 active:bg-violet-500/20 transition-colors"
        >
          <HelpCircle size={22} strokeWidth={2} className="text-white" />
          <span>FAQ</span>
        </a>

        {/* SÉPARATEUR */}
        <hr className="border-t border-white/10 my-6" />

        {/* CTA principal — Diagnostic */}
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="btn btn-primary w-full inline-flex items-center justify-center gap-2 py-4 text-base font-bold mb-3"
        >
          <Zap size={18} strokeWidth={2.5} />
          Réserver mon diagnostic gratuit
        </a>

        {/* CTA téléphone */}
        <a
          href="tel:+33615940883"
          onClick={onClose}
          className="btn btn-success w-full inline-flex items-center justify-center gap-2 py-4 text-base font-bold"
        >
          <Phone size={18} strokeWidth={2.5} />
          06 15 94 08 83
        </a>

        {/* RÉSEAUX SOCIAUX */}
        <div className="flex justify-center gap-3 mt-8 mb-6">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#B59FFF] hover:bg-violet-500/12 hover:border-violet-500/40 transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href={TIKTOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#B59FFF] hover:bg-violet-500/12 hover:border-violet-500/40 transition-colors"
          >
            <TikTokIcon size={22} />
          </a>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#B59FFF] hover:bg-violet-500/12 hover:border-violet-500/40 transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </nav>
    </div>
  );
}
