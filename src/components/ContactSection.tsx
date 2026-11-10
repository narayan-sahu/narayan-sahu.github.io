import type { ReactNode } from "react";
import { portfolio as p } from "@/data/portfolio";
import Icon from "./Icons";

type Item = {
  label: string;
  icon: "mail" | "linkedin" | "github";
  href: string;
  text: string;
  hint: string;
  external: boolean;
};

const last = (url: string) => url.replace(/\/+$/, "").split("/").pop() ?? url;

// For emails: if the text ever has to wrap, break before the "@" instead of mid-domain.
const renderText = (t: string): ReactNode => {
  const i = t.indexOf("@");
  return i > 0 ? (
    <>
      {t.slice(0, i)}
      <wbr />
      {t.slice(i)}
    </>
  ) : (
    t
  );
};

export default function ContactSection() {
  const { github, linkedin, email } = p.links;

  // Any link set to null in portfolio.ts is hidden automatically.
  const items = [
    email && {
      label: "Email",
      icon: "mail",
      href: `mailto:${email}`,
      text: email,
      hint: "Best for opportunities and questions",
      external: false,
    },
    linkedin && {
      label: "LinkedIn",
      icon: "linkedin",
      href: linkedin,
      text: `/in/${last(linkedin)}`,
      hint: "Let's connect professionally",
      external: true,
    },
    github && {
      label: "GitHub",
      icon: "github",
      href: github,
      text: `@${last(github)}`,
      hint: "Browse my code and lab work",
      external: true,
    },
  ].filter(Boolean) as Item[];

  return (
    <section id="contact" className="section container">
      <h2 className="title-icon">
        <Icon name="link" size={22} /> Connect with me
      </h2>
      <p className="lead contact-lead">
        I am always happy to connect with recruiters and engineers. Feel free to reach out or look through my technical work.
      </p>
      <ul className="grid g3">
        {items.map(({ label, icon, href, text, hint, external }) => (
          <li className="card contact-card" key={label}>
            <a
              className="contact-link"
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="contact-ico" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
              <span className="contact-body">
                <span className="contact-label">{label}</span>
                <span className="contact-text">{renderText(text)}</span>
                <span className="contact-hint">{hint}</span>
              </span>
              {external && (
                <span className="contact-arrow" aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
              )}
              {external && <span className="sr"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
