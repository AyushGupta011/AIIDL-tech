const technologies = [
  { name: "Next.js 15", category: "Fullstack" },
  { name: "TypeScript", category: "Language" },
  { name: "React 19", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Python / FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS Cloud", category: "DevOps" },
  { name: "Docker", category: "Containers" },
  { name: "Node.js", category: "Runtime" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "GraphQL", category: "APIs" },
  { name: "Redis", category: "Caching" },
];

export default function TechTicker() {
  return (
    <section className="ticker-sec" aria-label="Technologies we use">
      <div className="wrap ticker-intro">
        <span className="ticker-label">Proven production stack</span>
        <p className="ticker-sub">We build on resilient, modern technologies that eliminate technical debt.</p>
      </div>

      <div className="ticker-wrapper" aria-hidden="true">
        <div className="ticker-track">
          {/* First set */}
          {technologies.map((t, idx) => (
            <div key={`tech-1-${idx}`} className="ticker-pill">
              <span className="ticker-dot" />
              <span className="ticker-name">{t.name}</span>
              <span className="ticker-cat">{t.category}</span>
            </div>
          ))}
          {/* Duplicate set for seamless continuous marquee */}
          {technologies.map((t, idx) => (
            <div key={`tech-2-${idx}`} className="ticker-pill">
              <span className="ticker-dot" />
              <span className="ticker-name">{t.name}</span>
              <span className="ticker-cat">{t.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
