import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import WhyUs from './components/WhyUs';
import Offers from './components/Offers';
import Websites from './components/Websites';
import HowItWorks from './components/HowItWorks';
import Niches from './components/Niches';
import ROI from './components/ROI';
import Automations from './components/Automations';
import Bio from './components/Bio';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <WhyUs />
        <Offers />
        <Websites />
        <HowItWorks />
        <Niches />
        <ROI />
        <Automations />
        <Bio />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
