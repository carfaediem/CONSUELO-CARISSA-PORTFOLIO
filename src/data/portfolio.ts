/**
 * Portfolio content: the works, the experience, the services, the skills and
 * the tools. Every string here comes from the Canva portfolio
 * (pahiyasfestive.my.canva.site/carissaconsuelo) - edit here and every page
 * that shows it follows.
 */
import { asset } from '@/lib/asset'

import {
  PenNib,
  Megaphone,
  MagnifyingGlass,
  TextAa,
  type Icon,
} from '@/components/slab'

/* ---------- Works: "Clippings & case files" ---------- */

export type Work = {
  tag: string
  title: string
  body: string
  href: string
  /** What the link opens, for the button label. */
  kind: 'Flipbook' | 'Google Drive'
}

export const WORKS: Work[] = [
  {
    tag: 'Newsletter',
    title: 'Newsletter — Design & Copy',
    body: 'Full newsletter design and copywriting sample.',
    href: 'https://heyzine.com/flip-book/afddc41d21.html',
    kind: 'Flipbook',
  },
  {
    tag: 'Literature',
    title: 'Feature Article Samples',
    body: 'Light copy and writing on culture-forward topics — research, structure, collaborative edits.',
    href: 'https://heyzine.com/flip-book/10c2d83462.html',
    kind: 'Flipbook',
  },
  {
    tag: 'Social',
    title: 'Content Calendar',
    body: 'Content calendars and a timed post cadence built for consistent, on-brand messaging across a leading org.',
    href: 'https://drive.google.com/file/d/1tKHTNteDpXzPWGTSXsXbbVWZmCbRCEI1/view?usp=sharing',
    kind: 'Google Drive',
  },
  {
    tag: 'Edits',
    title: 'Publication Materials',
    body: 'Captions and promotional materials tailored to target audiences for ongoing campaigns.',
    href: 'https://drive.google.com/drive/folders/1qjGm7hAQcrtg0CTrZeDi7HNUtCcHo-vW?usp=sharing',
    kind: 'Google Drive',
  },
]

/* ---------- Experience: "The paper trail" ---------- */

export type Role = {
  title: string
  org: string
  when: string
  bullets: string[]
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Social Media Manager',
    org: 'University-Based & Student Organizations',
    when: '2023–Present',
    bullets: [
      'Manage content calendars and posting across platforms',
      'Create captions and campaign content tailored to target audiences',
      'Monitor engagement and help grow reach and visibility',
    ],
  },
  {
    title: 'Creative & Editorial Assistant',
    org: 'University Theater Organization',
    when: '2024–Present',
    bullets: [
      'Write, edit, and publish digital content for campaigns',
      'Proofread and adapt content to tone, audience, and goals',
      'Track content tasks and deadlines with shared planning tools',
    ],
  },
  {
    title: 'Production Manager',
    org: 'University-Based Productions',
    when: '2023',
    bullets: [
      'Manage timelines, rehearsals, and workflows start to finish',
      'Coordinate cast, crew, creatives, and production teams',
      'Lead teams through fast-paced creative deadlines',
    ],
  },
  {
    title: 'Scriptwriter & Theater Director',
    org: 'Independent & School-Based',
    when: '', // no dates on the Canva site
    bullets: [
      'Write and edit narrative content for stage & short-form productions',
      'Manage revisions and timelines across multiple teams',
      'Refine scripts based on feedback to meet creative standards',
    ],
  },
]

/* ---------- Services: "What I do" ---------- */

export type Service = {
  index: string
  title: string
  chip: string
  body: string
  Icon: Icon
}

export const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Content writing',
    chip: 'Blogs · Web · Social',
    body: 'Blog posts, web copy, and captions written in your brand voice — structured for readers and for AEO.',
    Icon: PenNib,
  },
  {
    index: '02',
    title: 'Social media management',
    chip: 'Calendars · Engagement',
    body: 'Content calendars, publication materials, scheduling, and community engagement that keep a page consistent and alive.',
    Icon: Megaphone,
  },
  {
    index: '03',
    title: 'SEO & AEO optimization',
    chip: 'Research · Keywords',
    body: 'Keyword research and content structuring so your work gets found by search engines and AI answer engines alike.',
    Icon: MagnifyingGlass,
  },
  {
    index: '04',
    title: 'Editing & proofreading',
    chip: 'Voice · Polish',
    body: 'Line edits and tone adaptation so every piece sounds like one voice, even across a whole team.',
    Icon: TextAa,
  },
]

/* ---------- About ---------- */

export const QUICK_FACTS = [
  'Content Writing & Editorial',
  'Social Media & Content Strategy',
  'Research & Audience Analysis',
  'Scriptwriting & Storytelling',
  'Campaign & Content Planning',
  'Creative Production & Project Management',
  'Graphic Design',
  'AB Communication, University of Batangas',
]

export const BIO = {
  lead: 'The A in Carissa stands for All-rounder!',
  body: [
    'If you’re looking for someone to tell your story, make your ideas come alive, and bring a little magic to the work along the way, well you’ve come to the right place.',
    'I like words that make people pause, stories that make people feel, and ideas that don’t just sit on a page. Whether it’s a caption, a campaign, a script, or a project with a hundred moving pieces, I’m always somewhere in the middle... writing, creating, organizing, and figuring things out as I go.',
  ],
}

export const EDUCATION = { degree: 'AB Communication', school: 'University of Batangas' }

/* ---------- Skills & tools: "Well-worn stamps" ---------- */

export const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Writing & Editing',
    items: ['Content Writing', 'Editorial & Line Editing', 'Proofreading', 'Brand Voice Adaptation', 'Scriptwriting'],
  },
  {
    label: 'SEO & Discoverability',
    items: ['SEO Content Structuring', 'AEO Optimization', 'Keyword Research'],
  },
  {
    label: 'Social & Strategy',
    items: ['Social Media Management', 'Content Calendars', 'Community Engagement', 'Campaign Planning'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Google Docs', 'Google Sheets', 'Grammarly', 'Canva', 'Basic Photoshop', 'Instagram', 'LinkedIn', 'Facebook', 'Twitter/X'],
  },
]

/** The marquee and the tool marks. Single-colour Simple Icons silhouettes,
 *  tinted with the page ink so no brand blue fights the warm palette. */
export const TOOLS: { name: string; iconPath: string }[] = [
  { name: 'Google Docs', iconPath: asset('/icons/si-googledocs.svg') },
  { name: 'Google Sheets', iconPath: asset('/icons/si-googlesheets.svg') },
  { name: 'Grammarly', iconPath: asset('/icons/si-grammarly.svg') },
  { name: 'Canva', iconPath: asset('/icons/si-canva.svg') },
  { name: 'Photoshop', iconPath: asset('/icons/si-adobephotoshop.svg') },
  { name: 'Instagram', iconPath: asset('/icons/si-instagram.svg') },
  { name: 'LinkedIn', iconPath: asset('/icons/si-linkedin.svg') },
  { name: 'Facebook', iconPath: asset('/icons/si-facebook.svg') },
  { name: 'Twitter/X', iconPath: asset('/icons/si-x.svg') },
]
