import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";

import { Solutions } from "@/components/site/Solutions";
import { Pricing } from "@/components/site/Pricing";
import { Differentiation } from "@/components/site/Differentiation";

import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        
        <Differentiation />
        <Solutions />
        <Pricing />
        
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
