"use client"

import { AboutSection, ContactSection, HeroSection, PortfolioSection, ServicesSection, WorkSection } from "@/app/sections";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen relative z-0 bg-primary mt-20 mb-52">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
