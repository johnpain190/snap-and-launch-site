
import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/Hero";
import { TokenInfo } from "@/components/TokenInfo";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { Disclaimer } from "@/components/Disclaimer";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <TokenInfo />
      <Benefits />
      <Timeline />
      <FAQ />
      <Disclaimer />
    </MainLayout>
  );
};

export default Index;
