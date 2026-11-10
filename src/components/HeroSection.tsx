import { portfolio as p } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section id="top" className="hero container">
      <div>
        <p className="eyebrow">Cloud Native · DevOps · SRE</p>
        <h1>{p.name}</h1>
        <p className="headline">{p.headline}</p>
        <p className="lead">{p.intro}</p>
        <div className="cta">
          <a className="btn primary" href="#projects">Explore My Projects</a>
          {p.links.resume && <a className="btn" href={p.links.resume} target="_blank" rel="noopener noreferrer">View Resume</a>}
          {p.links.github && <a className="btn" href={p.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {p.links.linkedin && <a className="btn" href={p.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
        <ul className="tags" aria-label="Technical focus">{p.focus.map((f) => <li key={f}>{f}</li>)}</ul>
      </div>
      <figure className="photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.profileImage} width={400} height={500} fetchPriority="high" decoding="async" alt={`Portrait of ${p.name}`} />
      </figure>
    </section>
  );
}
