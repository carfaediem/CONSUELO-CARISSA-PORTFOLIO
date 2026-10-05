import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Newspaper,
  User,
  Stamp,
  GraduationCap,
  Stack,
  Files,
} from '@/components/slab'
import { WORKS, EXPERIENCE, SERVICES, SKILL_GROUPS, EDUCATION } from '@/data/portfolio'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from the records the views render in full
 * (src/data/portfolio.ts). Every card is a link.
 *
 * The card modifiers keep the template's grid slots (bento.css): projects and
 * quotes are the two wide cards, the rest are singles.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

/** Every skill but the tools, which already have the marquee. */
const SKILLS = SKILL_GROUPS.filter((g) => g.label !== 'Tools & Platforms').flatMap((g) => g.items)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof Newspaper
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(SKILLS.length / 2)
  const skillRows = [SKILLS.slice(0, half), SKILLS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Works: the four case files as tabbed folders, fanned. */}
      <Link to="/works" className="bento__card bento__card--projects">
        <CardHead
          Icon={Newspaper}
          title="Clippings & case files"
          desc="Real samples, screenshots, and links, pinned up as they come in."
        />
        <ul className="bento__media bento__files" role="list" aria-hidden="true">
          {WORKS.map((w, i) => (
            <li key={w.title} className="bento__file" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__file-tag">{w.tag}</span>
              <span className="bento__file-title">{w.title}</span>
            </li>
          ))}
        </ul>
      </Link>

      {/* About: the polaroid from the Canva cover. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="A little about me" desc="The A in Carissa stands for All-rounder!" />
        <div className="bento__media bento__polaroid" aria-hidden="true">
          <span className="bento__polaroid-frame">
            <img src={profile.avatarSrc} alt="" loading="lazy" decoding="async" />
            <span className="bento__polaroid-cap">{profile.hero.caption}</span>
          </span>
          <img className="bento__polaroid-flower" src="/me/hibiscus.png" alt="" loading="lazy" decoding="async" />
        </div>
      </Link>

      {/* Skills: two chip rows scrolling against each other. */}
      <Link to="/about" className="bento__card bento__card--ai">
        <CardHead Icon={Stamp} title="Well-worn stamps" desc="Writing, SEO and social skills, used daily." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {skillRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((s, i) => (
                  <span key={`${s}-${i}`} className="bento__chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Education: the degree, on its plate. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={GraduationCap} title="Education" desc={EDUCATION.school} />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <GraduationCap size={40} weight="duotone" />
          </span>
          <span className="bento__badge-tag">{EDUCATION.degree}</span>
        </div>
      </Link>

      {/* Services: the four offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="What I do" desc="Writing, socials, search and polish." />
        <ul className="bento__media bento__offers" role="list">
          {SERVICES.map(({ Icon, title, chip }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{chip}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Experience: the roles drifting up a clipped column. */}
      <Link to="/experience" className="bento__card bento__card--quotes">
        <CardHead Icon={Files} title="The paper trail" desc="Experience, filed & stamped." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...EXPERIENCE, ...EXPERIENCE].map((r, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Stamp size={14} weight="fill" />
                  <b>{r.title}</b>
                </span>
                <span className="bento__review-role">{r.org}</span>
                {r.when && <span className="bento__review-work">{r.when}</span>}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
