import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'
import { BIO, QUICK_FACTS, SKILL_GROUPS, EDUCATION } from '@/data/portfolio'
import { asset } from '@/lib/asset'

/**
 * About - "A little about me". The bio beside the cover polaroid, the
 * tilted Quick Facts sheet, then the skills as stamps grouped the way the
 * Canva page groups them. Content lives in src/data/portfolio.ts.
 */
export default function AboutGrid() {
  return (
    <section className="pgrid pgrid--flow" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          A little <em>about me</em>
        </h1>
      </header>

      <div className="cc-about">
        <div className="cc-about__copy">
          <p className="cc-about__lead">{BIO.lead}</p>
          {BIO.body.map((p) => (
            <p key={p.slice(0, 24)} className="cc-about__p">
              {p}
            </p>
          ))}

          <div className="cc-about__cells">
            <span className="cc-cell">
              <span className="cc-cell__mark">
                <GraduationCap size={18} weight="fill" aria-hidden="true" />
              </span>
              <span>
                <b>{EDUCATION.degree}</b>
                <small>{EDUCATION.school}</small>
              </span>
            </span>
            <span className="cc-cell">
              <span className="cc-cell__mark">
                <MapPin size={18} weight="fill" aria-hidden="true" />
              </span>
              <span>
                <b>{profile.location}</b>
                <small>GMT+8</small>
              </span>
            </span>
          </div>
        </div>

        <figure className="cc-polaroid">
          <img className="cc-polaroid__bang" src={asset('/me/bang.png')} alt="" aria-hidden="true" />
          <span className="cc-polaroid__tape" aria-hidden="true" />
          <span className="cc-polaroid__photo">
            <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} width={720} height={900} />
          </span>
          <figcaption className="cc-polaroid__cap">{profile.hero.caption}</figcaption>
          <img className="cc-polaroid__flower" src={asset('/me/hibiscus.png')} alt="" aria-hidden="true" />
        </figure>

        <aside className="cc-facts" aria-labelledby="facts-title">
          <h2 className="cc-facts__title" id="facts-title">
            Quick facts
          </h2>
          <ul role="list">
            {QUICK_FACTS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="cc-stamps" aria-labelledby="stamps-title">
        <header className="cc-stamps__head">
          <span className="cc-eyebrow">Skills &amp; tools</span>
          <h2 className="cc-stamps__title" id="stamps-title">
            Well-worn <em>stamps</em>
          </h2>
        </header>
        <div className="cc-stamps__groups">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="cc-stamps__group">
              <h3 className="cc-stamps__label">{g.label}</h3>
              <ul className="cc-stamps__list" role="list">
                {g.items.map((s) => (
                  <li key={s} className="cc-stamp">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="cc-next">
        <Link className="home__cta" to="/services">
          What I do
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
        <Link className="cc-next__link" to="/works">
          See my works →
        </Link>
      </div>
    </section>
  )
}
