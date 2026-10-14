import { mailto } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <SectionHeading index="05" title="Contact" />
        <p className="contact-copy" data-reveal>
          Open to new roles and interesting problems. Drop me a line and I&apos;ll get back to you.
        </p>
        <div className="contact-actions" data-reveal>
          <a href={mailto} className="btn btn-primary btn-lg">
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
}
