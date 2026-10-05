import { Link } from 'react-router-dom'
import { CaretRight, Stack, Files } from '@/components/slab'
import { profile } from '@/data/profile'
import { WORKS } from '@/data/portfolio'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, role line and the QuickMenu (theme +
 *                accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                work sample as a feature card
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">{profile.name}</span>
        <span className="hprofile__handle">{profile.role} · {profile.location}</span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Works', to: '/works', title: 'Clippings & case files', desc: 'Newsletters, features, calendars and campaign copy.', img: '/me/swirl.png' },
  { n: '02', label: 'Services', to: '/services', title: 'What I do', desc: 'Writing, socials, SEO & AEO, editing.', Icon: Stack },
  { n: '03', label: 'Experience', to: '/experience', title: 'The paper trail', desc: 'Experience, filed & stamped.', Icon: Files, accent: true },
  { n: '04', label: 'About', to: '/about', title: `Hi, I’m ${profile.firstName}.`, desc: 'The A in Carissa stands for All-rounder!', img: profile.avatarSrc },
] as const

export function HomeExplore() {
  const feature = WORKS[0]
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/works" className="hsec__link">
            Latest clipping
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <a className="hclip" href={feature.href} target="_blank" rel="noopener noreferrer">
        <span className="hclip__tag">{feature.tag}</span>
        <span className="hclip__title">{feature.title}</span>
        <span className="hclip__body">{feature.body}</span>
        <span className="hclip__go">Open the {feature.kind.toLowerCase()} ↗</span>
      </a>
    </>
  )
}
