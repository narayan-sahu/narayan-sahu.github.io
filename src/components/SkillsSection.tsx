import { portfolio as p } from "@/data/portfolio";
import type { SkillGroup } from "@/data/portfolio";

const paths: Record<SkillGroup["icon"], string> = {
  cloud: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
  terminal: "M4 17l6-6-6-6M12 19h8",
  branch: "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9",
  box: "M21 8l-9-5-9 5v8l9 5 9-5zM3.3 7L12 12l8.7-5M12 22V12",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section container">
      <h2>Technical skills</h2>
      <div className="grid g3">
        {p.skills.map((g) => (
          <article className="card" key={g.category}>
            <span className="ico" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[g.icon]} /></svg>
            </span>
            <h3>{g.category}</h3>
            <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
