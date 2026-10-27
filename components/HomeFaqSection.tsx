import Link from "next/link";

const faqs = [
  {
    q: "How do your weekly builds work?",
    a: "Every Friday by 5 PM, we ship an updated build to a secure staging environment. You get a direct URL and a 2-minute Loom walkthrough showing exactly what was built, what was tested, and what's next. You test it directly and leave feedback.",
  },
  {
    q: "Can you fix or take over a codebase we already have?",
    a: "Yes. We start with a rapid 3-day architecture and code audit. We identify the critical blockers, security vulnerabilities, and performance bottlenecks, then propose a staged remediation roadmap rather than an expensive ground-up rewrite.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do, 100%. We build directly in repositories you own or transfer them at milestone sign-offs. We deploy to your AWS, GCP, or cloud accounts so you have complete autonomy and zero vendor lock-in.",
  },
  {
    q: "What if our scope or requirements change during development?",
    a: "Because we work in transparent weekly sprints, changes are easy and affordable to make early on. If a priority shifts, we swap out backlog items of equal effort without blowing up your budget or requiring lengthy contract revisions.",
  },
  {
    q: "What happens after the product is deployed?",
    a: "Every project includes a 30-day post-launch warranty covering any bugs or performance issues. We also provide handover training, architectural documentation, and flexible ongoing retainer options if you want continuous feature development.",
  },
];

export default function HomeFaqSection() {
  return (
    <section className="sec faq-sec" id="faq" aria-label="Frequently asked questions">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <span className="pill">Common Questions</span>
          <h2>Everything you need to know <span className="text-shimmer">before starting</span>.</h2>
          <p className="muted">
            Have a question not listed here? Talk directly to one of our engineers—no sales reps or pressure.
          </p>
          <div className="faq-action">
            <Link href="/contact" className="btn btn-sm">
              Ask a custom question
            </Link>
          </div>
        </div>

        <div className="faq-items">
          {faqs.map((f, i) => (
            <details key={i} className="faq-detail">
              <summary>
                <span>{f.q}</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
