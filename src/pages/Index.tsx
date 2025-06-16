
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TokenInfo } from "@/components/TokenInfo";
import { Features } from "@/components/Features";
import { Tokenomics } from "@/components/Tokenomics";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Header />
      <Hero />
      <TokenInfo />
      <Features />
      <Tokenomics />
      <Benefits />
      <Timeline />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
