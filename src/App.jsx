import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SiteInternet from './pages/SiteInternet';
import ReseauxSociaux from './pages/ReseauxSociaux';
import Publicite from './pages/Publicite';
import FicheGoogle from './pages/FicheGoogle';
import Automatisations from './pages/Automatisations';
import Ecommerce from './pages/Ecommerce';
import Restaurants from './pages/Restaurants';
import Conciergerie from './pages/Conciergerie';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import CGV from './pages/CGV';
import AutoChoice from './pages/demos/AutoChoice';
import CardanIA from './pages/demos/CardanIA';
import CarrossIA from './pages/demos/CarrossIA';

function AppShell() {
  const { pathname } = useLocation();
  // À chaque changement de page, on remonte tout en haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // Les démos métiers sont des apps immersives — pas de header / footer site
  const isImmersive = pathname.startsWith('/demo/cardan') || pathname.startsWith('/demo/carrossia');

  return (
    <>
      {!isImmersive && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites-internet" element={<SiteInternet />} />
        <Route path="/reseaux-sociaux" element={<ReseauxSociaux />} />
        <Route path="/publicite" element={<Publicite />} />
        <Route path="/fiche-google" element={<FicheGoogle />} />
        <Route path="/automatisations" element={<Automatisations />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/conciergerie" element={<Conciergerie />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/demo/auto" element={<AutoChoice />} />
        <Route path="/demo/cardan" element={<CardanIA />} />
        <Route path="/demo/carrossia" element={<CarrossIA />} />
      </Routes>
      {!isImmersive && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
