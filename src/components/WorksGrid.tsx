import { ArrowUpRight, BookOpenText, FilePdf, FolderOpen } from '@/components/slab'
import { SCRIPTS, THEATER_COVER, THEATER_FOLDER, THEATER_STILLS, WORKS } from '@/data/portfolio'

/**
 * Works - "Clippings & case files". The four samples from the Canva Works
 * page, each a card that opens the real piece (a flipbook or a Drive folder)
 * in a new tab. Cards alternate between the wine plate and paper, as
 * the Canva board does. Content lives in src/data/portfolio.ts.
 */
export default function WorksGrid() {
  return (
    <section className="pgrid pgrid--flow" aria-labelledby="works-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Portfolio</span>
        <h1 className="pgrid__title" id="works-title">
          Clippings &amp; <em>case files</em>
        </h1>
        <p className="pgrid__lede">Real samples, screenshots, and links, pinned up as they come in.</p>
      </header>

      <ul className="cc-works" role="list">
        {WORKS.map((w, i) => {
          const KindIcon = w.kind === 'Flipbook' ? BookOpenText : FolderOpen
          return (
            <li key={w.title}>
              <a
                className={`cc-work${i % 2 === 0 ? ' cc-work--plate' : ''}`}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cc-work__top">
                  <span className="cc-work__tag">{w.tag}</span>
                  <span className="cc-work__index" aria-hidden="true">
                    0{i + 1} / 0{WORKS.length}
                  </span>
                </span>
                <span className="cc-work__title">{w.title}</span>
                <span className="cc-work__body">{w.body}</span>
                <span className="cc-work__go">
                  <KindIcon size={16} weight="duotone" aria-hidden="true" />
                  Open the {w.kind === 'Flipbook' ? 'flipbook' : 'Drive folder'}
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>

      <section className="cc-stage" aria-labelledby="stage-title">
        <figure className="cc-stage__cover">
          <img
            src={THEATER_COVER}
            alt="A university theater staging: the ensemble huddled at the foot of a tall cross in purple light and haze"
            width={2000}
            height={1333}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="cc-stage__head">
            <span className="cc-work__tag">Theater</span>
            <h2 className="cc-stage__title" id="stage-title">
              All about <em>theater</em>
            </h2>
            <p className="cc-stage__lede">
              Scripts, stagings and stills from the productions behind the writing.
            </p>
          </figcaption>
        </figure>

        <ul className="cc-stage__stills" role="list" aria-label="Production stills">
          {THEATER_STILLS.map((src, i) => (
            <li key={src}>
              <img
                src={src}
                alt={`Production still ${i + 1} of ${THEATER_STILLS.length} from a university theater staging`}
                width={1400}
                height={933}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <div className="cc-stage__scripts">
          <h3 className="cc-stage__sub">Scripts</h3>
          <ul role="list">
            {SCRIPTS.map((s) => (
              <li key={s.title}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <FilePdf size={18} weight="duotone" aria-hidden="true" />
                  <span>{s.title}</span>
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <a className="cc-stage__all" href={THEATER_FOLDER} target="_blank" rel="noopener noreferrer">
            <FolderOpen size={16} weight="duotone" aria-hidden="true" />
            Open the full Drive folder
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </section>
    </section>
  )
}
