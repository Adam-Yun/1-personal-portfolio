import { developer, mailto } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <SectionHeading index="05" title="Contact" />
        <p className="contact-copy" data-reveal>
          I&apos;m always open to new opportunities and interesting problems. Drop me a line and
          I&apos;ll get back to you.
        </p>
        <a href={mailto} className="contact-email" data-reveal>
          {developer.email}
        </a>
      </div>
    </section>
  );
}
