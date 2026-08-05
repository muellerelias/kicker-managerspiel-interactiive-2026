import { existsSync } from "node:fs";
import { join } from "node:path";
import { withBase } from "./url";

const PUBLIC_DIR = join(process.cwd(), "public");

function findExisting(dir: string, basename: string, extensions: string[]): string | null {
  for (const ext of extensions) {
    if (existsSync(join(PUBLIC_DIR, dir, `${basename}.${ext}`))) {
      return withBase(`${dir}/${basename}.${ext}`);
    }
  }
  return null;
}

// Sucht nach hinterlegten Medien unter public/teams/<slug>/.
// Legt jemand dort eine logo.(svg|png|webp) bzw. stadium.(jpg|jpeg|png|webp)
// ab, wird sie automatisch anstelle des Platzhalters verwendet.
export function getTeamMedia(slug: string) {
  const dir = `teams/${slug}`;
  return {
    logo: findExisting(dir, "logo", ["svg", "png", "webp", "jpg"]),
    stadiumPhoto: findExisting(dir, "stadium", ["jpg", "jpeg", "png", "webp"]),
  };
}
