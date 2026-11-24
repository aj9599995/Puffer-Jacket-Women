// Swatch colours for the colour names used in the catalogue. Only the
// product's own colour is offered: no colours are invented.
export const SWATCH: Record<string, string> = {
  Black: "#121212",
  Ink: "#1d1f24",
  Oxblood: "#5a1a24",
  Stone: "#cfc8bd",
  Navy: "#1f2a44",
  Olive: "#5b5d3a",
  Ivory: "#f1ece1",
  Oat: "#d8c9ad",
  Plum: "#6f2442",
  Emerald: "#1e5b47",
  Teal: "#2f6f7e",
  Burgundy: "#6e1d2b",
  Champagne: "#e8d6b5",
  Sage: "#9aa98a",
};

export function swatchFor(colour: string): string {
  return SWATCH[colour] ?? "#cfc8bd";
}
