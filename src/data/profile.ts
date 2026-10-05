/**
 * Identity: name, photo, contact and the Home headline.
 *
 * Copy is taken from the Canva portfolio
 * (pahiyasfestive.my.canva.site/carissaconsuelo). Page-specific copy lives in
 * the other files in src/data/.
 */
import { asset } from '@/lib/asset'

import { Briefcase, GraduationCap, MapPin, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  /** Line under the name in the rail and the phone header. */
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. A transparent PNG sits on the accent circle. */
  avatarSrc: string
  /** Public address - the contact form mails it. */
  email: string
  location: string
  /** Masthead strip above the Home headline, Canva's "VOL. 01" line. */
  masthead: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  /** The intro types this, then flies it into the Home headline. line2 is set
   *  in wine italic, as on the Canva cover. */
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
    caption: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Carissa Faye Consuelo',
  firstName: 'Carissa',
  handle: 'Content writer & social media manager',
  role: 'Content & Social Desk',
  avatarSrc: asset('/me/avatar.png'),
  email: 'consuelocarissa@gmail.com',
  location: 'Batangas, Philippines',
  masthead: 'Vol. 01 — Content & Social Desk',
  stats: [
    { value: '2023–', label: 'Managing socials', Icon: Briefcase },
    { value: 'AB Comm', label: 'Univ. of Batangas', Icon: GraduationCap },
    { value: 'GMT+8', label: 'Batangas, PH', Icon: MapPin },
  ],
  displayName: { line1: 'Carissa Faye', line2: 'Consuelo' },
  hero: {
    body: 'Content writer & social media manager who edits like a journalist, plans like a producer, and writes copy that actually gets read.',
    portraitSrc: asset('/me/portrait.png'),
    portraitAlt: 'Carissa Faye Consuelo, arms folded, in a black blazer and glasses',
    caption: 'hi, it’s me!',
  },
  // None on the Canva site yet. Add { label, href, iconPath } entries here -
  // icons for LinkedIn, Facebook, Instagram and X are in public/icons/si-*.svg.
  socials: [],
}
