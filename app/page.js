import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import { HeroPlus } from "@/components/home/HeroPlus";
import StickyScrollReveal from "@/components/home/StickyScrollReveal";
import CampusFacilities from "@/components/home/CampusFacilities";

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Hero />
      <StatsStrip />
      <HeroPlus />
      <StickyScrollReveal />
      <CampusFacilities/>
    </main>
  );
}
