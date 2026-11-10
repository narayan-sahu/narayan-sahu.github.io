import { portfolio as p } from "@/data/portfolio";
import { getBrandLogo } from "./BrandLogos";
import Icon from "./Icons";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section container">
      <h2>Certifications</h2>
      <ul className="grid g3">
        {p.certifications.map((c) => {
          const brand = getBrandLogo(c.issuer);
          return (
            <li className="card cert" key={c.name}>
              <span className="badge" aria-hidden="true">
                {c.logo
                  ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={c.logo} alt="" width={28} height={28} />
                  : brand ?? c.issuer.slice(0, 2)}
              </span>
              <div>
                <h3>{c.name}</h3>
                <p className="muted small">
                  {[c.issuer, c.status, c.issued, c.credentialId && `ID ${c.credentialId}`].filter(Boolean).join(" · ")}
                </p>
                {c.credentialUrl && (
                  <a className="verify-link" href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                    Verify credential
                    <Icon name="arrow" size={16} />
                    <span className="sr"> for {c.name} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
