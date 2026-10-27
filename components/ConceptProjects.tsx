"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface MenuItem {
  name: string;
  price: number;
  time: string;
}

const menuItems: MenuItem[] = [
  { name: "Filter coffee", price: 90, time: "3 min" },
  { name: "Cold brew", price: 140, time: "2 min" },
  { name: "Paneer sandwich", price: 160, time: "8 min" },
];

const barDays = [
  { id: "mon", day: "M", pts: 24, height: 45 },
  { id: "tue", day: "T", pts: 32, height: 68 },
  { id: "wed", day: "W", pts: 28, height: 56 },
  { id: "thu", day: "T", pts: 42, height: 84 },
  { id: "fri", day: "F", pts: 50, height: 98, isHighlight: true },
];

export default function ConceptProjects() {
  // Mobile Ordering App State
  const [cartCount, setCartCount] = useState(2);
  const [cartTotal, setCartTotal] = useState(230);
  const [orderState, setOrderState] = useState<"idle" | "ordering" | "confirmed">("idle");
  const [justAddedIndex, setJustAddedIndex] = useState<number | null>(null);

  // Dashboard State
  const [selectedBar, setSelectedBar] = useState<number>(4); // Friday selected by default
  const [autoProgress, setAutoProgress] = useState(88);

  // Gentle background pulsation for dashboard velocity
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoProgress((prev) => (prev >= 94 ? 86 : prev + 2));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleAddItem = (item: MenuItem, index: number) => {
    setJustAddedIndex(index);
    setCartCount((c) => c + 1);
    setCartTotal((t) => t + item.price);
    setTimeout(() => setJustAddedIndex(null), 500);
  };

  const handleOrder = () => {
    if (orderState !== "idle") return;
    setOrderState("ordering");
    setTimeout(() => {
      setOrderState("confirmed");
      setTimeout(() => {
        setOrderState("idle");
      }, 3800);
    }, 850);
  };

  return (
    <section className="sec work on-deep" id="work">
      <div className="wrap">
        <div className="work-head">
          <span className="pill">Proof of Craft</span>
          <h2>Two concept projects, built to feel alive.</h2>
          <p className="muted">
            Invented concepts demonstrating how we design, architect, and optimize software for high-speed usage.
          </p>
        </div>

        <div className="cards">
          {/* Card A: Cafe Mobile App */}
          <article className="card card-a">
            <div className="card-top-bar">
              <span className="pill">Concept 01 · Mobile &amp; Web</span>
              <span className="interactive-badge">Interactive Demo</span>
            </div>

            <div
              className="mock"
              role="region"
              aria-label="Interactive smartphone cafe ordering demo"
            >
              <div className="phone-device">
                <div className="phone-inner">
                  {/* Status Bar */}
                  <div className="phone-status">
                    <span className="status-time">9:41</span>
                    <div className="dynamic-island" aria-hidden="true">
                      <span className="island-lens" />
                    </div>
                    <span className="status-signal">5G ▮</span>
                  </div>

                  {/* App Brand Header */}
                  <div className="phone-app-header">
                    <div className="cafe-logo-badge" aria-hidden="true">☕</div>
                    <div>
                      <b className="phone-title">Corner Cup</b>
                      <span className="phone-status-badge">
                        <span className="dot-green" /> Open · Ready in 8 min
                      </span>
                    </div>
                  </div>

                  {/* Menu Item Rows */}
                  <div className="phone-menu-list">
                    {menuItems.map((item, idx) => (
                      <div
                        key={item.name}
                        className={`p-row ${justAddedIndex === idx ? "pulse-add" : ""}`}
                      >
                        <div className="p-row-info">
                          <span className="p-name">{item.name}</span>
                          <span className="p-time">{item.time} prep</span>
                        </div>
                        <div className="p-row-action">
                          <span className="p-price">₹{item.price}</span>
                          <button
                            type="button"
                            className="p-add-btn"
                            aria-label={`Add ${item.name} to cart`}
                            onClick={() => handleAddItem(item, idx)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Button */}
                  <button
                    type="button"
                    className={`phone-cta ${orderState}`}
                    onClick={handleOrder}
                  >
                    {orderState === "idle" && (
                      <>
                        <span>Order ahead</span>
                        <span className="order-pill-badge">
                          {cartCount} items · ₹{cartTotal}
                        </span>
                      </>
                    )}
                    {orderState === "ordering" && (
                      <span className="ordering-state">
                        <span className="spin-ring" /> Sending to counter...
                      </span>
                    )}
                    {orderState === "confirmed" && (
                      <span className="confirmed-state">
                        ✓ Order #412 Confirmed! Ready in 8m
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="card-info">
              <h3>Cafe ordering site</h3>
              <p>
                Regulars browse the menu, tap to order ahead and skip the queue. Engineered for frictionless sub-second touch response at the counter.
              </p>
              <Link href="/contact?topic=custom-software" className="tlink">
                Plan a mobile product with us
              </Link>
            </div>
          </article>

          {/* Card B: Team Sprint Dashboard */}
          <article className="card card-b">
            <div className="card-top-bar">
              <span className="pill">Concept 02 · Internal Tools</span>
              <span className="interactive-badge">Live Velocity</span>
            </div>

            <div
              className="mock"
              role="region"
              aria-label="Interactive sprint dashboard demo"
            >
              <div className="dash-device">
                {/* Window chrome */}
                <div className="dash-chrome">
                  <div className="chrome-dots">
                    <span className="c-dot red" />
                    <span className="c-dot yellow" />
                    <span className="c-dot green" />
                  </div>
                  <span className="chrome-title">AIIDL Sprint 24 — Staging</span>
                  <span className="chrome-status">Live Sync</span>
                </div>

                <div className="dash-content">
                  {/* Top Stats Strip */}
                  <div className="dash-stats-row">
                    <div className="dash-kpi">
                      <small>Sprint Progress</small>
                      <b>{autoProgress}%</b>
                    </div>
                    <div className="dash-kpi">
                      <small>Velocity</small>
                      <b>50 pts</b>
                    </div>
                    <div className="dash-kpi">
                      <small>Release Cadence</small>
                      <b className="text-orange">Every Friday</b>
                    </div>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="chart-box">
                    <div className="chart-title-row">
                      <span>Daily Story Point Burndown</span>
                      <small className="muted">Hover to inspect</small>
                    </div>
                    <div className="bars-container">
                      {barDays.map((b, i) => (
                        <div
                          key={b.id}
                          className={`bar-column ${selectedBar === i ? "active-bar" : ""}`}
                          onMouseEnter={() => setSelectedBar(i)}
                        >
                          <div className="bar-hover-tag">
                            {b.pts} pts
                          </div>
                          <div
                            className={`bar-body ${b.isHighlight ? "highlight-orange" : ""}`}
                            style={{ height: `${b.height}%` }}
                          />
                          <span className="bar-label">{b.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Task Status List */}
                  <div className="dash-task-list">
                    <div className="d-task-item">
                      <span className="d-task-name">Checkout flow optimization</span>
                      <span className="d-status-pill shipped">
                        <span className="dot-mini" /> Shipped
                      </span>
                    </div>
                    <div className="d-task-item">
                      <span className="d-task-name">Weekly PDF report exports</span>
                      <span className="d-status-pill on-track">
                        <span className="dot-mini pulse" /> On track
                      </span>
                    </div>
                    <div className="d-task-item">
                      <span className="d-task-name">OAuth login rewrite</span>
                      <span className="d-status-pill review">
                        <span className="dot-mini" /> Review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-info">
              <h3>Team velocity dashboard</h3>
              <p>
                One screen for weekly sprint velocity, blockers, and automated deployment status so standups take minutes instead of hours.
              </p>
              <Link href="/contact?topic=custom-software" className="tlink">
                Plan custom internal tools
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
