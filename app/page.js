import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import { HeroPlus } from "@/components/home/HeroPlus";
import StickyScrollReveal from "@/components/home/ResultStats";
import CampusFacilities from "@/components/home/CampusFacilities";
import FAQSection from "@/components/home/FAQSection";
import WhyPrinceAcademy from "@/components/home/WhyPrinceAcademy";
import VisionPrinceAcademy from "@/components/home/VisionPrinceAcademy";
import CampusGallery from "@/components/home/CampusGallery";
import ResultStateSection from "@/components/home/ResultStateSection";
import Philosophy  from "@/components/home/Philosophy";
import TextTicker from "@/components/home/TextTicker";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-clip bg-background">
      <Hero />
      <StatsStrip />
      <HeroPlus />
      <Philosophy/>
      <CampusFacilities/>
      <WhyPrinceAcademy/>
      <TextTicker />
      <ResultStateSection/>
      <VisionPrinceAcademy/>
      <CampusGallery/>
      {/* <StickyScrollReveal /> */}
      {/* <FAQSection /> */}
    </main>
  );
}
