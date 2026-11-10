import { portfolio as p } from "@/data/portfolio";
import Logo from "./Logo";
import Year from "./Year";
import BackToTop from "./BackToTop";
import Icon from "./Icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container row">
          <p className="brandline"><Logo /><span>© <Year initial={new Date().getFullYear()} /> {p.name} · Automate. Scale. Optimize. Deliver.</span></p>
          <div className="social-icons">
            {p.links.github && (
              <a href={p.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub">
                <Icon name="github" />
              </a>
            )}
            {p.links.linkedin && (
              <a href={p.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
                <Icon name="linkedin" />
              </a>
            )}
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
