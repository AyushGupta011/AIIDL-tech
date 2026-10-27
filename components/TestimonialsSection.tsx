const testimonials = [
  {
    quote:
      "AIIDL took us from rough Figma sketches to a live, paying-customer platform in under six weeks. Getting to click real staging builds every Friday kept our entire team aligned without endless meetings.",
    author: "Rohan Sen",
    role: "Founder & CEO",
    company: "SwiftLogistics SaaS",
    metric: "Launched in 5.5 weeks",
  },
  {
    quote:
      "Our operations were choked by spreadsheets and manual copy-pasting. The custom internal portal AIIDL built cut our fulfillment error rate by 80% in the first month. The code quality is immaculate.",
    author: "Pooja Mehta",
    role: "Head of Operations",
    company: "Urban Retail Group",
    metric: "80% reduction in errors",
  },
  {
    quote:
      "Having a team that understands cloud architecture, DevOps, and modern UX under one roof is rare. Our deployment pipeline is zero-downtime, and our developers picked up the clean repository immediately.",
    author: "David Vance",
    role: "Technical Co-Founder",
    company: "KiteData Intelligence",
    metric: "99.98% production uptime",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="sec test-sec" aria-label="Client testimonials">
      <div className="wrap">
        <div className="test-head">
          <span className="pill">Founder Trust</span>
          <h2>What teams say after <span className="text-shimmer">shipping with us</span>.</h2>
          <p className="muted">
            Real outcomes from founders and operators who needed software shipped without drama.
          </p>
        </div>

        <div className="test-grid">
          {testimonials.map((t) => (
            <article key={t.author} className="test-card">
              <div className="test-metric-pill">
                <span className="dot-sm" />
                <span>{t.metric}</span>
              </div>
              <blockquote className="test-quote">
                <p>“{t.quote}”</p>
              </blockquote>
              <div className="test-author-row">
                <div className="test-avatar" aria-hidden="true">
                  {t.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <cite className="test-name">{t.author}</cite>
                  <span className="test-role">{t.role}, {t.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
