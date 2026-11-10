import { portfolio as p } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section container">
      <h2>Featured projects</h2>
      <p className="muted">Personal lab work. Status is shown honestly; links appear once a project is published.</p>
      <div className="grid g3">
        {p.projects.map((pr) => {
          const links = [["Repository", pr.repoUrl], ["Live demo", pr.demoUrl], ["Docs", pr.docsUrl]].filter(([, u]) => u) as string[][];
          return (
            <article className="card" key={pr.title}>
              <div className="row">
                <span className="muted small">{pr.category}</span>
                <span className={`status ${pr.status === "Completed" ? "done" : ""}`}>● {pr.status}</span>
              </div>
              <h3>{pr.title}</h3>
              <p>{pr.summary}</p>
              <p className="muted"><strong>Demonstrates:</strong> {pr.demonstrates}</p>
              <ul className="tags">{pr.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              <div className="card-foot">
                {links.length === 0 && <span className="muted small">Repository: coming soon</span>}
                {links.map(([l, u]) => (
                  <a key={l} href={u} target="_blank" rel="noopener noreferrer">{l}<span className="sr"> for {pr.title}</span></a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
