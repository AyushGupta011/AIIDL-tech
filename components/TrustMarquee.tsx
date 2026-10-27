"use client";
import { useState } from "react";

interface PartnerLogo {
  id: string;
  name: string;
  color: string;
  svg: (color?: string) => React.ReactNode;
}

const partners: PartnerLogo[] = [
  {
    id: "spotify",
    name: "Spotify",
    color: "#1db954",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.309c-.216.353-.674.464-1.026.248-2.812-1.718-6.353-2.106-10.522-1.154-.403.092-.804-.158-.896-.562-.092-.403.158-.804.562-.896 4.564-1.042 8.484-.6 11.634 1.338.352.216.464.674.248 1.026zm1.468-3.262c-.271.442-.852.583-1.294.312-3.22-1.979-8.128-2.55-11.936-1.394-.499.151-1.028-.135-1.179-.634-.151-.499.135-1.028.634-1.179 4.354-1.321 9.775-.681 13.463 1.589.442.271.583.852.312 1.306zm.126-3.41c-3.861-2.292-10.228-2.504-13.905-1.388-.592.18-1.222-.152-1.402-.744-.18-.592.152-1.222.744-1.402 4.234-1.285 11.266-1.036 15.719 1.608.532.316.707 1.006.391 1.538-.316.532-1.006.707-1.547.388z" />
      </svg>
    ),
  },
  {
    id: "blender",
    name: "Blender",
    color: "#ea7600",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M11.91 1.074a.88.88 0 0 0-.442.131L5.95 4.697a.88.88 0 0 0-.422.652.88.88 0 0 0 .211.75l2.454 2.668a7.02 7.02 0 0 0-1.874 4.887c0 3.882 3.16 7.042 7.042 7.042 3.882 0 7.042-3.16 7.042-7.042 0-3.666-2.82-6.685-6.402-7.002l.62-3.563a.88.88 0 0 0-.693-1.008.88.88 0 0 0-.018-.008zm1.451 7.27a4.992 4.992 0 1 1-4.992 4.991 4.992 4.992 0 0 1 4.992-4.992zm-.002 2.052a2.94 2.94 0 1 0 2.94 2.94 2.94 2.94 0 0 0-2.94-2.94z" />
      </svg>
    ),
  },
  {
    id: "cloud",
    name: "Cloud Platform",
    color: "#0284c7",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    id: "bing",
    name: "Bing / Copilot",
    color: "#0078d4",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M5.4 2.4A.9.9 0 0 0 4.5 3.3v17.4a.9.9 0 0 0 1.25.83l6.3-2.6 3.65 2.5a.9.9 0 0 0 1.4-.73V13.8l2.5-1.4a.9.9 0 0 0 .45-.78v-4.2a.9.9 0 0 0-.54-.83l-7.3-3.1a.9.9 0 0 0-.82.1L7.5 5.7V3.3a.9.9 0 0 0-.9-.9H5.4zm2.1 6.3 3.8-2.4 4.5 1.9v2.2l-5.6 3.1a.9.9 0 0 0-.46.78v4.9l-2.24.9V8.7z" />
      </svg>
    ),
  },
  {
    id: "loom",
    name: "Loom",
    color: "#625df5",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="7" fill={color} />
        <path d="M8.5 7v10h7v-3h-4V7h-3z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    color: "#f38020",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    id: "shopify",
    name: "Shopify",
    color: "#96bf48",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M19.5 6.5l-2-2h-3v-1c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v1h-3l-2 2-1.5 13.5c-.1.7.5 1.5 1.2 1.5h15.6c.7 0 1.3-.8 1.2-1.5L19.5 6.5zm-8-3c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1h-3v-1zm4.5 7c0 2.2-1.8 4-4 4s-4-1.8-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2z" />
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    color: "#0f172a",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    color: "#2496ed",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M22.5 10.5c-.3-.2-1.5-.7-2.7-.2-.2-.8-.8-1.5-1.6-1.8l-.5-.2-.3.5c-.4.7-.6 1.5-.5 2.3-.4.2-1.4.7-1.4 2.2 0 1.1.9 2.5 2.5 2.5h.5c3.2 0 4.5-2.6 4.7-3.8l.1-.6-.8-.9zm-9.5-2h2v2h-2v-2zm0-3h2v2h-2v-2zm-3 3h2v2h-2v-2zm0-3h2v2h-2v-2zm-3 3h2v2h-2v-2zm-3 0h2v2h-2v-2zm9 6h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H1v-2h3zm-2.2 3.5C2.6 18.5 6.3 21 11.5 21c7.2 0 11.2-4.5 11.4-9.3-.7-.1-1.6 0-2.3.4-.6-1.7-2.1-2.9-4-3.1h-.2v1h-1.5V7H12v3H6v1.5H3.5l-.2-.5c-.3-.7-.9-1.2-1.6-1.5-.8 1.6-.3 3.5.1 4.5z" />
      </svg>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    color: "#3ecf8e",
    svg: (color = "currentColor") => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M21.362 9.354H12V.304a.3.3 0 0 0-.52-.204L2.638 10.646a.3.3 0 0 0 .204.52H12v9.05a.3.3 0 0 0 .52.204l8.842-10.546a.3.3 0 0 0-.204-.52z" />
      </svg>
    ),
  },
];

export default function TrustMarquee() {
  const [activeIdx, setActiveIdx] = useState<number | null>(3); // Bing Copilot highlighted initially, matching reference image

  return (
    <section className="marquee-sec" aria-label="Trusted technology platforms">
      <div className="wrap marquee-title-wrap">
        <span className="marquee-heading-pill">
          TRUSTED BY TEAMS BUILDING ON MODERN STACKS
        </span>
      </div>

      <div className="marquee-outer">
        <div className="marquee-fade-left" aria-hidden="true" />
        <div className="marquee-fade-right" aria-hidden="true" />

        <div className="marquee-track">
          {/* Loop 1 */}
          {partners.map((p, idx) => {
            const isFeatured = activeIdx === idx;
            return (
              <div
                key={`p1-${p.id}`}
                className={`marquee-capsule ${isFeatured ? "is-featured" : ""}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                title={p.name}
              >
                <div className="capsule-icon" aria-hidden="true">
                  {p.svg(isFeatured ? p.color : undefined)}
                </div>
                <span className="capsule-name">{p.name}</span>
              </div>
            );
          })}

          {/* Loop 2 (seamless repeat) */}
          {partners.map((p, idx) => {
            const isFeatured = activeIdx === idx;
            return (
              <div
                key={`p2-${p.id}`}
                className={`marquee-capsule ${isFeatured ? "is-featured" : ""}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                title={p.name}
              >
                <div className="capsule-icon" aria-hidden="true">
                  {p.svg(isFeatured ? p.color : undefined)}
                </div>
                <span className="capsule-name">{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
