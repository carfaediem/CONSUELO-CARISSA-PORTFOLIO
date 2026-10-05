import { Link } from 'react-router-dom'
import { ArrowRight } from '@/components/slab'
import { SERVICES, TOOLS } from '@/data/portfolio'

/**
 * Services - "What I do". The four offers from the Canva About page as
 * numbered cards, then the tools they are made with, then the hand-off to
 * Works ("See my works →"). Content lives in src/data/portfolio.ts.
 */
export default function ServicesGrid() {
  return (
    <section className="pgrid pgrid--flow" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          What I <em>do</em>
        </h1>
        <p className="pgrid__lede">
          Words that make people pause, pages that stay consistent and alive, and work that gets found.
        </p>
      </header>

      <ol className="cc-services" role="list">
        {SERVICES.map(({ index, title, chip, body, Icon }) => (
          <li key={index} className="cc-service">
            <span className="cc-service__ghost" aria-hidden="true">
              {index}
            </span>
            <span className="cc-service__icon" aria-hidden="true">
              <Icon size={22} weight="duotone" />
            </span>
            <h2 className="cc-service__title">{title}</h2>
            <span className="cc-service__chip">{chip}</span>
            <p className="cc-service__body">{body}</p>
          </li>
        ))}
      </ol>

      <div className="cc-band">
        <div className="cc-band__copy">
          <span className="cc-eyebrow">Tools &amp; platforms</span>
          <ul className="cc-marks" role="list">
            {TOOLS.map((t) => (
              <li key={t.name} className="cc-mark">
                <span
                  className="cc-mark__icon"
                  style={{ ['--icon-url' as string]: `url('${t.iconPath}')` }}
                  aria-hidden="true"
                />
                {t.name}
              </li>
            ))}
          </ul>
        </div>
        <Link className="home__cta cc-band__cta" to="/works">
          See my works
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
