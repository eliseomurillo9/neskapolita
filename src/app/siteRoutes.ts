export const SITE_ORIGIN = "https://neskapolitahostel.com";

export const PAGE_KEYS = {
  "/": "home",
  "/rooms": "rooms",
  "/ruta": "ruta",
  "/story": "story",
} as const;

export const PAGE_PATHS = Object.keys(PAGE_KEYS) as (keyof typeof PAGE_KEYS)[];
