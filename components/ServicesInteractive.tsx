"use client";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";

interface ServiceItem {
  id: string;
  num: string;
  code: string;
  title: string;
  desc: string;
  href: string;
  image: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "custom-software",
    num: "01",
    code: "//01",
    title: "Custom Software",
    desc: "Web and platform engineering for teams who have outgrown off-the-shelf tools.",
    href: "/services/custom-software",
    image: "/services/custom-software.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "cloud-devops",
    num: "02",
    code: "//02",
    title: "Cloud & DevOps",
    desc: "Migration, automation, and observability on AWS, Azure, and GCP — billed to your actual usage.",
    href: "/contact?topic=cloud-devops",
    image: "/services/cloud-devops.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: "mobile-web",
    num: "03",
    code: "//03",
    title: "Mobile & Web Apps",
    desc: "Native-feeling iOS and Android apps and responsive web, shipped from a shared core.",
    href: "/contact?topic=web-mobile",
    image: "/services/mobile-web.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "data-ai",
    num: "04",
    code: "//04",
    title: "Data & AI",
    desc: "Pipelines, warehouses, and applied machine learning that put answers where work happens.",
    href: "/contact",
    image: "/services/data-ai.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12" />
      </svg>
    ),
  },
];

export default function ServicesInteractive() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorOffset({ x, y });
  };

  return (
    <section className="sec svc-interactive-sec" id="services" aria-label="Services and capabilities">
      <div className="wrap">
        {/* Section Header */}
        <div className="svc-interactive-head">
          <span className="pill">Capabilities</span>
          <h2>
            What we <span className="text-shimmer">build with you</span>
          </h2>
          <p className="lead muted">
            Pick a single capability or hand us the whole problem — the same team sees it through from architecture to launch.
          </p>
        </div>

        {/* Interactive Hover Accordion List */}
        <div className="svc-table" ref={containerRef}>
          {services.map((s, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <Link
                key={s.id}
                href={s.href}
                className={`svc-row ${isHovered ? "is-hovered" : ""}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onMouseMove={handleMouseMove}
                aria-label={`${s.title}: ${s.desc}`}
              >
                {/* 1. Left Thumbnail Preview Box */}
                <div className="svc-thumb-col">
                  <div
                    className={`svc-thumb-box ${isHovered ? "has-bg" : ""}`}
                    style={{
                      backgroundImage: isHovered ? `url(${s.image})` : undefined,
                    }}
                  >
                    <span className="svc-thumb-num">{s.num}</span>
                    <div className="svc-thumb-icon" aria-hidden="true">
                      {s.icon}
                    </div>
                  </div>
                </div>

                {/* 2. Center Title & Floating Preview Card */}
                <div className="svc-title-col">
                  <div className="svc-code-prefix">{s.code}</div>
                  <h3 className="svc-title-text">{s.title}</h3>

                  {/* Floating Image Preview Popover */}
                  {isHovered && (
                    <div
                      className="svc-floating-card"
                      aria-hidden="true"
                      style={{
                        left: `${Math.min(Math.max(cursorOffset.x, 100), 380)}px`,
                        top: `${cursorOffset.y - 100}px`,
                      }}
                    >
                      <div className="svc-floating-img-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.image}
                          alt={s.title}
                          className="svc-floating-img"
                        />
                        <div className="svc-floating-tag">
                          <span>{s.title}</span>
                          <span className="floating-arrow">↗</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Right Description & Arrow */}
                <div className="svc-desc-col">
                  <p className="svc-desc-text">{s.desc}</p>
                  <span className="svc-arrow" aria-hidden="true">
                    »
                  </span>
                </div>

                {/* Mobile Inline Preview (visible on smaller screens) */}
                <div className="svc-mobile-img" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
