"use client";
import { useEffect, useRef, useState } from "react";
import HeroTimeline from "./HeroTimeline";

export default function HeroParallax() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 30;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 30;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Parallax offsets (capped for smoothness)
  const offsetBase = Math.min(scrollY * 0.08, 60);
  const offsetImage = Math.min(scrollY * -0.16, 0);
  const offsetBadge = Math.min(scrollY * -0.22, 0);
  const offsetChip = Math.min(scrollY * -0.12, 0);

  return (
    <div
      ref={containerRef}
      className="hero-parallax-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive parallax project timeline and engineering preview"
    >
      {/* Ambient Parallax Glow Orb */}
      <div
        className="parallax-glow-orb"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.8}px, ${offsetBase}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Main Base Card: Interactive Timeline Board */}
      <div
        className="parallax-layer-main"
        style={{
          transform: `perspective(1000px) rotateX(${-mouseOffset.y * 0.5}deg) rotateY(${mouseOffset.x * 0.5}deg)`,
        }}
      >
        <HeroTimeline />
      </div>

      {/* Parallax Floating Image Card 1: Live Staging Build */}
      <div
        className="parallax-floating-img-card"
        style={{
          transform: `translate3d(${mouseOffset.x * 1.4}px, ${offsetImage}px, 0) rotate(3deg)`,
        }}
        aria-hidden="true"
      >
        <div className="p-card-top-tag">
          <span className="live-pulse-dot" />
          <span>Live Staging Build</span>
        </div>
        <div className="p-card-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/services/custom-software.jpg"
            alt="Custom software workspace"
            className="p-card-img"
          />
        </div>
        <div className="p-card-caption">
          <b>Sprint 03</b> · Clickable Preview
        </div>
      </div>

      {/* Parallax Floating Chip 2: Cloud SLA & Uptime */}
      <div
        className="parallax-floating-chip chip-sla"
        style={{
          transform: `translate3d(${-mouseOffset.x * 1.8}px, ${offsetBadge}px, 0) rotate(-2.5deg)`,
        }}
        aria-hidden="true"
      >
        <span className="chip-bolt">⚡</span>
        <span>AWS Cloud · 99.98% SLA</span>
      </div>

      {/* Parallax Floating Chip 3: Code Ownership */}
      <div
        className="parallax-floating-chip chip-ownership"
        style={{
          transform: `translate3d(${mouseOffset.x * 1.2}px, ${offsetChip}px, 0) rotate(1.5deg)`,
        }}
        aria-hidden="true"
      >
        <span className="chip-check">✓</span>
        <span>100% Repository IP Handover</span>
      </div>
    </div>
  );
}
