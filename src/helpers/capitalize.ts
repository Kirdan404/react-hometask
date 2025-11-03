export function capitalize(str: unknown): string {
  if (typeof str !== "string") return "";
  if (!str) return "";
  const s = str.trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}