"use client";
import { useState } from "react";

interface TimelineStage {
  week: string;
  badge: string;
  title: string;
  desc: string;
  status: "done" | "active" | "launch";
}

const stages: TimelineStage[] = [
  {
    week: "Week 1",
    badge: "Architecture",
    title: "Scope and designs approved",
    desc: "Clickable prototypes, database schema & fixed milestones approved.",
    status: "done",
  },
  {
    week: "Weeks 2 to 6",
    badge: "Active Sprints",
    title: "Working builds in your hands",
    desc: "Testable staging links delivered every Friday by 5 PM.",
    status: "active",
  },
  {
    week: "Week 7+",
    badge: "Production",
    title: "Live, monitored & handed over",
    desc: "Deployed to your cloud with full repository IP & documentation.",
    status: "launch",
  },
];

export default function HeroTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1); // Active sprint highlighted by default

  return (
    <figure
      className="modern-board"
      aria-label="Example project timeline"
      role="region"
    >
      {/* Board Top Header */}
      <div className="board-top-header">
        <div className="board-header-left">
          <span className="live-pulse-dot" aria-hidden="true" />
          <span className="board-title">Sprint Cadence</span>
        </div>
        <span className="board-badge">7-Week Guarantee</span>
      </div>

      {/* Connected Timeline List */}
      <div className="timeline-track-wrap">
        <div className="timeline-spine" aria-hidden="true" />
        <ol className="timeline-list">
          {stages.map((st, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <li
                key={st.week}
                className={`timeline-item ${isHovered ? "is-selected" : ""} ${st.status}`}
                onMouseEnter={() => setHoveredIndex(i)}
                tabIndex={0}
                onFocus={() => setHoveredIndex(i)}
              >
                {/* Node icon / dot */}
                <div className="timeline-node" aria-hidden="true">
                  {st.status === "done" && (
                    <span className="node-icon done">✓</span>
                  )}
                  {st.status === "active" && (
                    <span className="node-icon active">
                      <span className="node-ripple" />
                    </span>
                  )}
                  {st.status === "launch" && (
                    <span className="node-icon launch">✦</span>
                  )}
                </div>

                {/* Node Content */}
                <div className="timeline-info">
                  <div className="timeline-meta">
                    <span className="timeline-week">{st.week}</span>
                    <span className="timeline-tag">{st.badge}</span>
                  </div>
                  <strong className="timeline-heading">{st.title}</strong>
                  <p className="timeline-desc">{st.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Modern Bottom Progress Footer */}
      <div className="board-footer-bar">
        <div className="footer-metric-row">
          <span className="footer-label">Sprint Velocity</span>
          <span className="footer-val">Friday 5 PM Builds</span>
        </div>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" />
        </div>
        <div className="footer-tags">
          <span>✓ 100% Code Handover</span>
          <span>✓ Direct Engineer Access</span>
        </div>
      </div>
    </figure>
  );
}
