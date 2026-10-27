"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="ftr on-deep" role="contentinfo">
      {/* 1. Pre-Footer Action Banner */}
      <div className="wrap">
        <div className="ftr-banner">
          <div className="ftr-banner-left">
            <div className="ftr-status-badge">
              <span className="live-pulse-dot" aria-hidden="true" />
              <span>Available for New Projects</span>
            </div>
            <h2>
              Have an idea or a stuck project?{" "}
              <span className="text-shimmer">Let&apos;s build together.</span>
            </h2>
            <p className="muted">
              We reply within 24 hours with an honest assessment and a clear roadmap—no sales decks.
            </p>
          </div>
          <div className="ftr-banner-actions">
            <Link href="/contact" className="btn">
              Start a project
            </Link>
            <a
              href="mailto:hello@aiidltechnologies.com"
              className="btn btn-outline-light"
            >
              hello@aiidltechnologies.com
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Multi-Column Grid */}
      <div className="wrap ftr-main-grid">
        {/* Brand Column */}
        <div className="ftr-col ftr-col-brand">
          <Link href="/" className="brand brand-light" aria-label="AIIDL Technologies Home">
            <Logo />
            <span>AIIDL <b>Technologies</b></span>
          </Link>
          <p className="muted ftr-brand-desc">
            Bespoke software, mobile applications, and resilient cloud systems designed and built for founders and growing teams.
          </p>
          <div className="ftr-response-tag">
            <span className="ftr-bolt" aria-hidden="true">⚡</span>
            <span>Direct engineer response under 24 hours</span>
          </div>
        </div>

        {/* Services Navigation */}
        <div className="ftr-col">
          <span className="ftr-heading">Services</span>
          <ul className="ftr-links">
            <li>
              <Link href="/services/custom-software">Custom software</Link>
            </li>
            <li>
              <Link href="/contact?topic=web-mobile">Web and mobile apps</Link>
            </li>
            <li>
              <Link href="/contact?topic=cloud-devops">Cloud and DevOps</Link>
            </li>
            <li>
              <Link href="/contact">Codebase audit &amp; handover</Link>
            </li>
            <li>
              <Link href="/services" className="ftr-all-link">
                All services overview →
              </Link>
            </li>
          </ul>
        </div>

        {/* Capabilities Column */}
        <div className="ftr-col">
          <span className="ftr-heading">Tech Stack</span>
          <ul className="ftr-links">
            <li><span>Next.js 15 &amp; React 19</span></li>
            <li><span>TypeScript &amp; Python</span></li>
            <li><span>PostgreSQL &amp; Redis</span></li>
            <li><span>AWS &amp; Cloud Architecture</span></li>
            <li><span>Automated CI/CD Pipelines</span></li>
          </ul>
        </div>

        {/* Contact & Location Column */}
        <div className="ftr-col">
          <span className="ftr-heading">Contact &amp; Hub</span>
          <ul className="ftr-links">
            <li>
              <Link href="/contact">Book a scoping call</Link>
            </li>
            <li>
              <a href="mailto:hello@aiidltechnologies.com">hello@aiidltechnologies.com</a>
            </li>
            <li>
              <span className="ftr-subtext">Bengaluru &amp; Remote</span>
            </li>
            <li>
              <span className="ftr-timezone-pill">
                <span className="dot-mini" /> IST (UTC +5:30)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Colophon & Back to Top */}
      <div className="wrap ftr-bottom-bar">
        <div className="ftr-legal">
          <p>© {new Date().getFullYear()} AIIDL Technologies Private Limited. All rights reserved.</p>
          <p className="ftr-concept-note muted">
            Concept presentation site built with Next.js &amp; design tokens.
          </p>
        </div>
        <button
          type="button"
          className="ftr-back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <span className="arrow-up" aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}
