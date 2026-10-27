const stats = [
  {
    value: "7",
    unit: "Weeks",
    label: "Average time to launch",
    desc: "From initial scoping call to live, deployed product in your users' hands.",
    highlight: "Speed without tech debt",
  },
  {
    value: "100",
    unit: "%",
    label: "Code ownership",
    desc: "Full IP transfer, clean repositories, and deployment to cloud accounts you own.",
    highlight: "Zero vendor lock-in",
  },
  {
    value: "Weekly",
    unit: "Demos",
    label: "Hands-on Friday builds",
    desc: "Working software you test every week. No three-month radio silence.",
    highlight: "Transparent progress",
  },
  {
    value: "99.9",
    unit: "%",
    label: "Target reliability",
    desc: "Automated test suites, CI/CD pipelines, and proactive health monitoring.",
    highlight: "Production hardened",
  },
];

export default function StatsSection() {
  return (
    <section className="sec-sm stats-sec" aria-label="Key delivery metrics">
      <div className="wrap">
        <div className="stats-head">
          <span className="pill">Predictable Delivery</span>
          <h2>Built for founders who value <span className="text-shimmer">velocity and clarity</span>.</h2>
          <p className="muted">
            We don't do endless discovery phases or 50-page slides. We ship real software, week after week.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-top">
                <span className="stat-val">{s.value}</span>
                <span className="stat-unit">{s.unit}</span>
              </div>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
              <div className="stat-badge">
                <span className="dot-sm" />
                <span>{s.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
