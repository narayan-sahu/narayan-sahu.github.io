"use client";
import { useEffect, useState } from "react";
import { portfolio as p } from "@/data/portfolio";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "top"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Certifications", "certifications"], ...(p.blog.length ? [["Blog", "blog"]] : []), ["Contact", "contact"],
];
const lastId = links[links.length - 1][1];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el); });

    // On tall screens the last section can never reach the observer band above, so
    // when the page is scrolled to the very end the last link is highlighted instead.
    const onScroll = () =>
      setAtBottom(window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, []);

  const current = atBottom ? lastId : active;

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label={`${p.name}, home`}><Logo /></a>
        <nav aria-label="Primary" className="nav-links-wrap">
          <ul id="nav-links" className={open ? "open" : ""}>
            {links.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={current === id ? "true" : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="icon-btn menu-btn" aria-expanded={open} aria-controls="nav-links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
