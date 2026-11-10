import { portfolio as p } from "@/data/portfolio";

export default function AboutSection() {
  const clouds = p.skills.find((g) => g.category === "Cloud Platforms")?.items ?? [];

  // A row is hidden automatically when its value is empty.
  const facts: [string, string][] = [
    ["Role", p.title],
    p.experience ? ["Experience", p.experience] : null,
    clouds.length ? ["Cloud platforms", clouds.join(", ")] : null,
  ].filter(Boolean) as [string, string][];

  return (
    <section id="about" className="section container">
      <h2>About</h2>
      <div className="about-grid">
        <div className="prose">
          {p.about.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>

        <aside className="card glance" aria-label="At a glance">
          <h3>At a glance</h3>
          <dl>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
