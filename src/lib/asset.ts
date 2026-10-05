/**
 * A file in public/, resolved against the site's base path. On GitHub Pages
 * the site lives under /CONSUELO-CARISSA-PORTFOLIO/, so a bare '/me/x.png'
 * would 404 there; this prefixes whatever `base` vite.config.ts sets.
 */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
