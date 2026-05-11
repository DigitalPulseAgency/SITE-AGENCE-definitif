import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import SocialBanner from '../components/SocialBanner';
import Bio from '../components/Bio';
import FAQ from '../components/FAQ';
import ProofBanner from '../components/ProofBanner';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SocialBanner />
      <Bio />
      <FAQ />
      <ProofBanner />
      <FinalCTA />
    </>
  );
}
