import { portfolio as p } from "@/data/portfolio";

export default function BlogSection() {
  if (p.blog.length === 0) return null; // hidden until the first real article exists
  return (
    <section id="blog" className="section container">
      <h2>Technical writing</h2>
      <div className="grid g3">
        {p.blog.map((a) => (
          <article className="card" key={a.url}>
            <p className="muted small">{a.date} · {a.readingTime}</p>
            <h3><a href={a.url}>{a.title}</a></h3>
            <p>{a.description}</p>
            <ul className="tags">{a.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
