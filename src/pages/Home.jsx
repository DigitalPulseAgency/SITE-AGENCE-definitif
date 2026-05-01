import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Bio from '../components/Bio';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Bio />
      <FAQ />
      <FinalCTA />
    </>
  );
}
