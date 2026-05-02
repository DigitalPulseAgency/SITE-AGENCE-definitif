import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SiteInternet from './pages/SiteInternet';
import ReseauxSociaux from './pages/ReseauxSociaux';
import FicheGoogle from './pages/FicheGoogle';
import Automatisations from './pages/Automatisations';
import Ecommerce from './pages/Ecommerce';
import Restaurants from './pages/Restaurants';
import Conciergerie from './pages/Conciergerie';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import CGV from './pages/CGV';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites-internet" element={<SiteInternet />} />
        <Route path="/reseaux-sociaux" element={<ReseauxSociaux />} />
        <Route path="/fiche-google" element={<FicheGoogle />} />
        <Route path="/automatisations" element={<Automatisations />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/conciergerie" element={<Conciergerie />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgv" element={<CGV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
