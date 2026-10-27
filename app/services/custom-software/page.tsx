import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Custom software", description: "Software designed and built around how your business works." };

const who = [
  "Founders turning an idea into a first working version",
  "Small teams run on spreadsheets and manual steps",
  "Businesses whose current software is slow or hard to change",
];
const gets = [
  "A written scope and project plan",
  "Screens you approve before anything is built",
  "Tested, working software in regular releases",
  "Source code, documentation and a handover session",
  "Deployment to a cloud account you own",
];
const steps = [
  ["Shape the plan", "A short call and a written scope: goals, users, must-haves and a timeline you can plan around."],
  ["Build in small releases", "You see working software every week and can change direction early, when changes are cheap."],
  ["Launch and look after it", "We deploy, train your team and stay on for fixes and the next round of improvements."],
];
const faqs = [
  ["How long does a project take?", "Small tools usually take a few weeks. Larger products are split into phases. You get a timeline in the written scope before work starts."],
  ["Who owns the code?", "You do. We hand over the repository, documentation and deployment access when the work is done."],
  ["Can you improve software we already have?", "Yes. We start with a short review, then fix the biggest problems first instead of rewriting everything."],
];

export default function CustomSoftware() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Custom software</span></nav>
          <h1>Custom software, built around <span className="text-shimmer">how you work</span>.</h1>
          <p className="lead">When off-the-shelf tools force you to adapt, we build the one that fits. Clear scope, steady releases, code you own.</p>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap detail">
          <div className="detail-col">
            <h2>Who it helps</h2>
            <ul className="checks">{who.map((w) => <li key={w}>{w}</li>)}</ul>
          </div>
          <div className="detail-col">
            <h2>What you get</h2>
            <ul className="checks">{gets.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec-sm process on-deep">
        <div className="wrap">
          <h2>How it works</h2>
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <li key={t}><span className="step-n">{i + 1}</span><h3>{t}</h3><p className="muted">{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap faq-wrap">
          <h2>Questions before you start</h2>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta cta-sm">
        <div className="wrap">
          <h2>Ready to scope <span className="text-shimmer">your project?</span></h2>
          <div className="actions"><Link href="/contact?topic=custom-software" className="btn">Start a project</Link></div>
        </div>
      </section>
    </>
  );
}
