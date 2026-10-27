import type { Metadata } from "next";
import Link from "next/link";
import ServicesInteractive from "../../components/ServicesInteractive";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software, web and mobile apps, cloud & DevOps, and Data & AI tailored for founders and growing teams.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-head" style={{ paddingBottom: "16px" }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/">Home</Link> / <span>Services</span>
          </nav>
        </div>
      </section>

      {/* Interactive Services Table with Image Hover and Text Expansion */}
      <ServicesInteractive />

      {/* Closing CTA */}
      <section className="cta on-deep">
        <div className="wrap">
          <h2>Ready to build something <span className="text-shimmer">reliable?</span></h2>
          <div className="actions">
            <Link href="/contact" className="btn">Start a project</Link>
            <Link href="/" className="tlink">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
