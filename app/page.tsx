"use client";
import { useState } from "react";
import Link from "next/link";
import SiteLoader from "../components/SiteLoader";
import HeroStudio from "../components/HeroStudio";
import TrustMarquee from "../components/TrustMarquee";
import StatsSection from "../components/StatsSection";
import ConceptProjects from "../components/ConceptProjects";
import ProcessSection from "../components/ProcessSection";
import ComparisonSection from "../components/ComparisonSection";
import TestimonialsSection from "../components/TestimonialsSection";
import HomeFaqSection from "../components/HomeFaqSection";
import ServicesInteractive from "../components/ServicesInteractive";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      {/* 0. Entrance Preloader (0-100% digital counter, studio metadata & curtain exit) */}
      <SiteLoader onComplete={() => setHasLoaded(true)} />

      {/* 1. Redesigned Studio Hero (Zajno-inspired monumental aiidl® typography, sliced glitch/ziggle hover & showreel) */}
      <HeroStudio hasLoaded={hasLoaded} />

      {/* 2. Trusted Platforms Modern Capsule Marquee */}
      <TrustMarquee />

      {/* 3. Interactive Services Section with hover preview & expand */}
      <ServicesInteractive />

      {/* 4. Stats & Speed Metrics */}
      <StatsSection />

      {/* 5. Concept Projects (Interactive & Animated) */}
      <ConceptProjects />

      {/* 6. Four-stage sprint process */}
      <ProcessSection />

      {/* 7. Comparison Table */}
      <ComparisonSection />

      {/* 8. Founder Testimonials */}
      <TestimonialsSection />

      {/* 9. Homepage FAQ */}
      <HomeFaqSection />

      {/* 10. Closing Hero CTA */}
      <section className="cta on-deep">
        <div className="wrap">
          <span className="pill">Get In Touch</span>
          <h2>Tell us what you <span className="text-shimmer">want to build.</span></h2>
          <p className="lead">
            A few lines about your idea or your stuck project is enough to start. We will get back to you within 24 hours with honest advice.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn">
              Start a project
            </Link>
            <Link href="/services" className="tlink">
              Explore all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
