// Verknüpft einen Pfad mit dem konfigurierten Astro `base`, unabhängig davon,
// ob BASE_URL bzw. der übergebene Pfad einen Slash am Rand haben.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const suffix = path.replace(/^\//, "");
  return `${base}/${suffix}`;
}
