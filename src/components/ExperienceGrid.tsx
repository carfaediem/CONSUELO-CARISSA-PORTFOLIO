import { Stamp, CheckCircle } from '@/components/slab'
import { EXPERIENCE } from '@/data/portfolio'

/**
 * Experience - "The paper trail: experience, filed & stamped". Each role is
 * a filed index card on a ruled spine, newest first, with its dates stamped
 * in the corner. Content lives in src/data/portfolio.ts.
 */
export default function ExperienceGrid() {
  return (
    <section className="pgrid pgrid--flow" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience, filed &amp; stamped</span>
        <h1 className="pgrid__title" id="experience-title">
          The paper <em>trail</em>
        </h1>
        <p className="pgrid__lede">
          Socials, editorial, production and the stage: the roles behind the writing.
        </p>
      </header>

      <ol className="cc-trail" role="list">
        {EXPERIENCE.map((r) => (
          <li key={r.title} className="cc-role">
            <span className="cc-role__pin" aria-hidden="true">
              <Stamp size={16} weight="fill" />
            </span>
            <article className="cc-role__card">
              <header className="cc-role__head">
                <div>
                  <h2 className="cc-role__title">{r.title}</h2>
                  <p className="cc-role__org">{r.org}</p>
                </div>
                {r.when && <span className="cc-role__stamp">{r.when}</span>}
              </header>
              <ul className="cc-role__list" role="list">
                {r.bullets.map((b) => (
                  <li key={b}>
                    <CheckCircle size={16} weight="duotone" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
