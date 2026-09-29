/**
 * Project photos from the manufacturer's 2026 catalogue (UNIPADEL).
 * They are the manufacturer's installations, never PADELTECH Israel projects,
 * and every use on the site carries that caption.
 */
export type Country =
  | "malaysia" | "singapore" | "indonesia" | "dubai" | "maldives" | "pakistan" | "uk"
  | "russia" | "serbia" | "australia" | "newZealand" | "usa" | "mexico" | "bolivia" | "colombia"

export const makerCountries: Country[] = [
  "uk", "serbia", "russia", "usa", "mexico", "colombia", "bolivia", "dubai",
  "pakistan", "maldives", "malaysia", "singapore", "indonesia", "australia", "newZealand",
]

export const makerProjects: { src: string; country: Country; wide?: boolean }[] = [
  { src: "/brand/unipadel/serbia-1.jpg", country: "serbia", wide: true },
  { src: "/brand/unipadel/maldives-1.jpg", country: "maldives" },
  { src: "/brand/unipadel/uk-1.jpg", country: "uk" },
  { src: "/brand/unipadel/indonesia-1.jpg", country: "indonesia" },
  { src: "/brand/unipadel/pakistan-2.jpg", country: "pakistan", wide: true },
  { src: "/brand/unipadel/usa-1.jpg", country: "usa" },
  { src: "/brand/unipadel/malaysia-1.jpg", country: "malaysia" },
  { src: "/brand/unipadel/russia-1.jpg", country: "russia" },
  { src: "/brand/unipadel/uk-2.jpg", country: "uk", wide: true },
  { src: "/brand/unipadel/maldives-2.jpg", country: "maldives" },
  { src: "/brand/unipadel/colombia-1.jpg", country: "colombia" },
  { src: "/brand/unipadel/pakistan-1.jpg", country: "pakistan" },
  { src: "/brand/unipadel/serbia-2.jpg", country: "serbia", wide: true },
  { src: "/brand/unipadel/australia-1.jpg", country: "australia" },
  { src: "/brand/unipadel/singapore-1.jpg", country: "singapore" },
  { src: "/brand/unipadel/new-zealand-1.jpg", country: "newZealand" },
  { src: "/brand/unipadel/singapore-2.jpg", country: "singapore", wide: true },
  { src: "/brand/unipadel/dubai-1.jpg", country: "dubai", wide: true },
]

/** Four photos for the home page strip. */
export const makerHighlights = [makerProjects[0], makerProjects[1], makerProjects[2], makerProjects[3]]
