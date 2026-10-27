const comparisons = [
  {
    feature: "Release visibility",
    aiidl: "Live staging builds every Friday you can click and test",
    others: "Radio silence for 2–3 months before a 'big reveal'",
  },
  {
    feature: "Code & Cloud ownership",
    aiidl: "100% IP ownership, deployed directly into your own cloud",
    others: "Proprietary platforms, hosted on their servers with lock-in",
  },
  {
    feature: "Team structure",
    aiidl: "Direct collaboration with senior engineers on Slack/calls",
    others: "Layers of non-technical account reps and ticket queues",
  },
  {
    feature: "Turnaround time",
    aiidl: "7 weeks average from scope approval to production launch",
    others: "6–9 months bloated timelines with frequent delays",
  },
  {
    feature: "Quality standard",
    aiidl: "Strict TypeScript, automated CI/CD tests, WCAG AA compliance",
    others: "Quick duct-tape fixes and fragile untested scripts",
  },
];

export default function ComparisonSection() {
  return (
    <section className="sec comp-sec" aria-label="Comparison with alternatives">
      <div className="wrap">
        <div className="comp-head">
          <span className="pill">The AIIDL Difference</span>
          <h2>Built for <span className="text-shimmer">outcome-driven</span> founders.</h2>
          <p className="muted">
            Here is how partnering with AIIDL compares to traditional legacy agencies or unvetted freelancers.
          </p>
        </div>

        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th scope="col" className="comp-col-feature">What matters</th>
                <th scope="col" className="comp-col-aiidl">
                  <span className="comp-aiidl-tag">✦ With AIIDL</span>
                </th>
                <th scope="col" className="comp-col-others">Traditional Agencies / Freelancers</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((c, i) => (
                <tr key={i}>
                  <th scope="row" className="comp-row-title">{c.feature}</th>
                  <td className="comp-td-aiidl">
                    <div className="comp-cell">
                      <span className="comp-icon-good" aria-hidden="true">✓</span>
                      <span>{c.aiidl}</span>
                    </div>
                  </td>
                  <td className="comp-td-others">
                    <div className="comp-cell">
                      <span className="comp-icon-bad" aria-hidden="true">✕</span>
                      <span>{c.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
