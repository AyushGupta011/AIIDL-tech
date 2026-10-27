"use client";
import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";

interface HeroStudioProps {
  hasLoaded?: boolean;
}

interface LetterItem {
  id: number;
  char: string;
  isReg?: boolean;
}

const letterData: LetterItem[] = [
  { id: 0, char: "A" },
  { id: 1, char: "I" },
  { id: 2, char: "I" },
  { id: 3, char: "D" },
  { id: 4, char: "L" },
];

export default function HeroStudio({ hasLoaded = true }: HeroStudioProps) {
  // Wave state for each letter
  const [letterOffsets, setLetterOffsets] = useState<number[]>(() => new Array(letterData.length).fill(0));
  const [letterRotations, setLetterRotations] = useState<number[]>(() => new Array(letterData.length).fill(0));
  const [letterScales, setLetterScales] = useState<number[]>(() => new Array(letterData.length).fill(1));
  const [isWaving, setIsWaving] = useState(false);

  // Video hover & modal state
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const showreelRef = useRef<HTMLDivElement>(null);

  // Interactive mousepad wave algorithm:
  // As the user drags their mouse across the text, letters lift and wave according to distance to cursor
  const handleTextMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setIsWaving(true);
    const mouseX = e.clientX;
    const radius = 280; // horizontal wave influence radius in px

    const newOffsets: number[] = [];
    const newRotations: number[] = [];
    const newScales: number[] = [];

    letterRefs.current.forEach((el) => {
      if (!el) {
        newOffsets.push(0);
        newRotations.push(0);
        newScales.push(1);
        return;
      }

      const rect = el.getBoundingClientRect();
      const letterCenter = rect.left + rect.width / 2;
      const dist = Math.abs(mouseX - letterCenter);

      if (dist < radius) {
        // Bell-curve cosine wave calculation
        const factor = Math.cos((dist / radius) * (Math.PI / 2));
        const factorSq = Math.pow(factor, 1.8);
        const waveLift = -54 * factorSq; // peak lift up to -54px
        const tiltAngle = ((mouseX - letterCenter) / radius) * -16 * factor; // wave crest angle
        const scaleVal = 1 + 0.16 * factorSq;

        newOffsets.push(waveLift);
        newRotations.push(tiltAngle);
        newScales.push(scaleVal);
      } else {
        newOffsets.push(0);
        newRotations.push(0);
        newScales.push(1);
      }
    });

    setLetterOffsets(newOffsets);
    setLetterRotations(newRotations);
    setLetterScales(newScales);
  };

  const handleTextMouseLeave = () => {
    setIsWaving(false);
    // Smooth reset
    setLetterOffsets(new Array(letterData.length).fill(0));
    setLetterRotations(new Array(letterData.length).fill(0));
    setLetterScales(new Array(letterData.length).fill(1));
  };

  const handleShowreelMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!showreelRef.current) return;
    const rect = showreelRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      className={`hero-studio-sec ${hasLoaded ? "is-entered" : ""}`}
      aria-label="Studio Hero and Showreel"
    >
      <div className="hero-studio-inner">
        {/* 1. Monumental Typography with Interactive Mouse Wave / Ripple */}
        <div
          className="hero-monumental-wrap"
          onMouseMove={handleTextMouseMove}
          onMouseLeave={handleTextMouseLeave}
          title="Drag mouse or cursor across AIIDL to create waves"
        >
          <div className={`hero-monumental-title ${isWaving ? "is-waving-active" : ""}`}>
            {/* Monumental Interactive Waving Text */}
            <h1 className="hero-giant-text">
              {letterData.map((item, index) => {
                const offset = letterOffsets[index] || 0;
                const rotation = letterRotations[index] || 0;
                const scale = letterScales[index] || 1;
                const isItemActive = Math.abs(offset) > 2;

                return (
                  <span
                    key={item.id}
                    ref={(el) => {
                      letterRefs.current[index] = el;
                    }}
                    className={`char ${item.isReg ? "char-reg" : ""} ${isItemActive ? "is-peaking" : ""}`}
                    style={{
                      transform: `translate3d(0, ${offset}px, 0) rotate(${rotation}deg) scale(${scale})`,
                      transition: "transform 0.14s cubic-bezier(0.15, 0.85, 0.25, 1), color 0.2s, text-shadow 0.2s",
                    }}
                  >
                    {item.char}
                  </span>
                );
              })}
            </h1>

            {/* Subtle Glitch Shadow Ripple (activates while waving) */}
            <div className="hero-wave-glow-layer" aria-hidden="true">
              {letterData.map((item, index) => {
                const offset = letterOffsets[index] || 0;
                return (
                  <span
                    key={`glow-${item.id}`}
                    className={`char ${item.isReg ? "char-reg" : ""}`}
                    style={{
                      transform: `translate3d(0, ${offset * 0.9}px, 0)`,
                      opacity: Math.abs(offset) > 4 ? 0.35 : 0,
                    }}
                  >
                    {item.char}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Showreel Showcase Container with Website-Related Digital Engineering Visual */}
        <div
          ref={showreelRef}
          className={`hero-showreel-card ${isVideoHovered ? "is-glitching" : ""}`}
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => {
            setIsVideoHovered(false);
            setMousePos({ x: 0, y: 0 });
          }}
          onMouseMove={handleShowreelMouseMove}
          onClick={() => setIsPlayingShowreel(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsPlayingShowreel(true);
            }
          }}
          aria-label="Watch AIIDL Studio Showreel: Digital Platform & Cloud Engineering"
        >
          {/* Base Visual: High-Tech Software Engineering & AI Dashboard Architecture */}
          <div className="showreel-img-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-software-studio.jpg"
              alt="AIIDL Technologies software architecture, cloud platforms, and AI engineering dashboard"
              className="showreel-base-img"
              style={{
                transform: `scale(${isVideoHovered ? 1.025 : 1}) translate3d(${mousePos.x * 0.45}px, ${mousePos.y * 0.45}px, 0)`,
              }}
            />

            {/* RGB Chromatic Aberration Glitch Layer 1 (Cyan/Blue horizontal slice) */}
            <div className="showreel-glitch-layer slice-rgb-cyan" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero-software-studio.jpg" alt="" className="showreel-glitch-img" />
            </div>

            {/* RGB Chromatic Aberration Glitch Layer 2 (Magenta/Red horizontal slice) */}
            <div className="showreel-glitch-layer slice-rgb-magenta" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero-software-studio.jpg" alt="" className="showreel-glitch-img" />
            </div>

            {/* RGB Chromatic Aberration Glitch Layer 3 (Yellow/Noise displacement slice) */}
            <div className="showreel-glitch-layer slice-rgb-yellow" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero-software-studio.jpg" alt="" className="showreel-glitch-img" />
            </div>

            {/* CRT Scanline Flicker Overlay */}
            <div className="showreel-scanline-overlay" aria-hidden="true" />
          </div>

          {/* Center Play Button & Showreel Badge */}
          <div
            className="showreel-play-anchor"
            style={{
              transform: `translate3d(${mousePos.x * 0.65}px, ${mousePos.y * 0.65}px, 0)`,
            }}
          >
            <div className="showreel-play-btn" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
            <div className="showreel-play-info">
              <span className="showreel-play-title">Watch Showreel</span>
              <span className="showreel-play-years">2025–26</span>
            </div>
          </div>

          {/* Corner Interactive Tag */}
          <div className="showreel-corner-tag">
            <span className="corner-tag-pulse" />
            <span>Digital Engineering &amp; AI Showreel</span>
          </div>
        </div>
      </div>

      {/* 3. Fullscreen Showreel Modal Player */}
      {isPlayingShowreel && (
        <div
          className="showreel-modal-backdrop"
          onClick={() => setIsPlayingShowreel(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Studio Showreel Player"
        >
          <div
            className="showreel-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setIsPlayingShowreel(false)}
              aria-label="Close showreel player"
            >
              ✕
            </button>

            <div className="showreel-video-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-software-studio.jpg"
                alt="AIIDL Technologies Software and Cloud Showreel"
                className="modal-showreel-img"
              />
              <div className="modal-video-badge">
                <div className="modal-badge-inner">
                  <span className="live-pulse-dot" />
                  <span>AIIDL PLATFORM &amp; ENGINEERING REEL · 2025–26</span>
                </div>
                <h3 className="modal-badge-heading">
                  High-Performance Software, Systems &amp; Applied AI Products
                </h3>
                <p className="modal-badge-desc">
                  Building scalable digital platforms, distributed cloud architectures, and bespoke interfaces for founders and fast-moving teams.
                </p>
                <div className="modal-badge-actions">
                  <Link href="/contact" className="btn" onClick={() => setIsPlayingShowreel(false)}>
                    Start a project with us
                  </Link>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setIsPlayingShowreel(false)}
                  >
                    Close preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
