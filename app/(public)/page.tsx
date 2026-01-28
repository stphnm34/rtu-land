import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChoose } from "@/components/home/WhyChoose";
import { DeveloperShowcase } from "@/components/home/DeveloperShowcase";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <FeaturedProjects />
      <WhyChoose />
      <DeveloperShowcase />
      <Stats />
      <CTA />
      <Contact />
    </div>
  );
}
