import { ArrowUpRight, BookOpenText, FolderOpen } from '@/components/slab'
import { WORKS } from '@/data/portfolio'

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
    </section>
  )
}
