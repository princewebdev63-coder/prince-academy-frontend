import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import { HeroPlus } from "@/components/home/HeroPlus";
import StickyScrollReveal from "@/components/home/StickyScrollReveal";
import CampusFacilities from "@/components/home/CampusFacilities";
import FAQSection from "@/components/home/FAQSection";
import WhyPrinceAcademy from "@/components/home/WhyPrinceAcademy";
import VisionPrinceAcademy from "@/components/home/VisionPrinceAcademy";
import CampusGallery from "@/components/home/CampusGallery";

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Hero />
      <StatsStrip />
      <HeroPlus />
      <StickyScrollReveal />
      <CampusFacilities/>
      <WhyPrinceAcademy/>
      <VisionPrinceAcademy/>
      <CampusGallery/>
      <FAQSection />
    </main>
  );
}
