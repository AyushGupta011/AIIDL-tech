"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const servicesList = [
  {
    title: "Custom software",
    badge: "Featured",
    desc: "Internal tools, customer portals & tailored workflows.",
    href: "/services/custom-software",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Web and mobile apps",
    desc: "Fast websites, web apps, iOS & Android products.",
    href: "/contact?topic=web-mobile",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Cloud and DevOps",
    desc: "Hosting, automated deployments & uptime monitoring.",
    href: "/contact?topic=cloud-devops",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when route changes
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [path]);

  // Handle escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isServicesActive = path.startsWith("/services");

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="brand" aria-label="AIIDL Technologies, go to home page">
          <Logo />
          <span>AIIDL <b>Technologies</b></span>
        </Link>

        <button
          type="button"
          className={`menu-btn ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="hamburger-box" aria-hidden="true">
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </span>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav id="site-nav" className="nav" data-open={open} aria-label="Main">
          <Link
            href="/"
            className="nav-top-link"
            aria-current={path === "/" ? "page" : undefined}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="nav-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="nav-dropdown-trigger">
              <Link
                href="/services"
                className={`nav-top-link ${isServicesActive ? "active" : ""}`}
                aria-current={isServicesActive ? "page" : undefined}
              >
                Services
              </Link>
              <button
                type="button"
                className="dropdown-chevron-btn"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Toggle Services menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((prev) => !prev);
                }}
              >
                <svg
                  className={`nav-chevron ${servicesOpen ? "is-open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`dropdown-menu ${servicesOpen ? "is-visible" : ""}`}
              role="menu"
              aria-label="Services menu"
            >
              <div className="dropdown-list">
                {servicesList.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => {
                      setServicesOpen(false);
                      setOpen(false);
                    }}
                  >
                    <span className="dropdown-item-icon">{s.icon}</span>
                    <span className="dropdown-item-text">
                      <span className="dropdown-item-title">
                        {s.title}
                        {s.badge && <span className="dropdown-badge">{s.badge}</span>}
                      </span>
                      <span className="dropdown-item-desc">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="dropdown-footer">
                <Link
                  href="/services"
                  className="dropdown-footer-link"
                  role="menuitem"
                  onClick={() => {
                    setServicesOpen(false);
                    setOpen(false);
                  }}
                >
                  <span>All services overview</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="btn btn-sm"
            aria-current={path === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
