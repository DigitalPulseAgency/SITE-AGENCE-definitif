import { Hero } from '../components/home/Hero';
import { ConcreteExamples } from '../components/home/ConcreteExamples';
import { Stats } from '../components/home/Stats';
import { AIInfra } from '../components/home/AIInfra';
import { AIVoiceAgents } from '../components/home/AIVoiceAgents';
import { Services } from '../components/home/Services';
import { AutomationExplainer } from '../components/home/AutomationExplainer';
import { Bio } from '../components/home/Bio';
import { Process } from '../components/home/Process';
import { MonthlyOffer } from '../components/home/MonthlyOffer';
import { RestaurantTeaser } from '../components/home/RestaurantTeaser';
import { ClosingNote } from '../components/home/ClosingNote';
import { FinalCTA } from '../components/home/FinalCTA';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="home-v2">
      <Hero />
      <ConcreteExamples />
      <Stats />
      <AIInfra />
      <AIVoiceAgents />
      <Services />
      <AutomationExplainer />
      <Bio />
      <Process />
      <MonthlyOffer />
      <RestaurantTeaser />
      <FAQ />
      <ClosingNote />
      <FinalCTA />
    </div>
  );
}
