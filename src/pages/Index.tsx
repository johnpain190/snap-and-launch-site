
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TokenInfo } from "@/components/TokenInfo";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Header />
      <Hero />
      <TokenInfo />
      <Benefits />
      <Timeline />
      <FAQ />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
