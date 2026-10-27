import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Tell us about your project." };

const starters: Record<string, string> = {
  "custom-software": "I'd like to talk about custom software. ",
  "web-mobile": "I'd like to talk about a web or mobile app. ",
  "cloud-devops": "I'd like to talk about cloud and DevOps. ",
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  return (
    <section className="page-head">
      <div className="wrap contact-grid">
        <div>
          <h1>Tell us about <span className="text-shimmer">your project</span>.</h1>
          <p className="lead">Share what you want to build and who it is for. A few lines is plenty.</p>
          <ul className="checks">
            <li>What the software should do</li>
            <li>Who will use it</li>
            <li>Any date you need to hit</li>
          </ul>
        </div>
        <ContactForm initialMessage={(topic && starters[topic]) || ""} />
      </div>
    </section>
  );
}
