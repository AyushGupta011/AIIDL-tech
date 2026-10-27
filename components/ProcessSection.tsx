const steps = [
  {
    step: "01",
    phase: "Week 1",
    title: "Scope & clickable prototype",
    desc: "A short architecture session and a written scope: clear deliverables, user journeys, and screens you approve before code begins.",
    deliverables: ["Approved design screens", "Technical architecture plan", "Fixed timeline & milestones"],
  },
  {
    step: "02",
    phase: "Weeks 2 to 5",
    title: "Weekly working builds",
    desc: "You test real builds every Friday. Direct access to your developers means feedback is applied immediately while changes are cheap.",
    deliverables: ["Hands-on staging links", "Weekly recorded demos", "Direct engineer Slack/chat"],
  },
  {
    step: "03",
    phase: "Week 6",
    title: "Hardening & performance",
    desc: "Automated test coverage, accessibility (WCAG AA) compliance, mobile responsiveness audit, and 95+ Lighthouse speed optimization.",
    deliverables: ["Automated testing suite", "Speed & performance audit", "Security & backup check"],
  },
  {
    step: "04",
    phase: "Week 7+",
    title: "Live deploy & code handover",
    desc: "We deploy to your AWS/GCP/cloud account, provide full documentation and video guides, and stay on for post-launch peace of mind.",
    deliverables: ["Cloud deployment in your name", "Full repository IP handover", "30-day post-launch support"],
  },
];

export default function ProcessSection() {
  return (
    <section className="sec process-sec on-deep" id="process" aria-label="Our working process">
      <div className="wrap">
        <div className="process-head">
          <span className="pill">How We Work</span>
          <h2>A disciplined <span className="text-shimmer">four-step cadence</span>. No surprises.</h2>
          <p className="muted">
            Most software projects derail because of poor communication and long feedback loops. We fixed that with continuous weekly visibility.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((st) => (
            <div key={st.step} className="process-card">
              <div className="process-card-top">
                <span className="process-num">{st.step}</span>
                <span className="process-phase">{st.phase}</span>
              </div>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
              <div className="process-deliverables">
                <span className="deliverables-title">Deliverables:</span>
                <ul>
                  {st.deliverables.map((d) => (
                    <li key={d}>
                      <span className="process-check" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
