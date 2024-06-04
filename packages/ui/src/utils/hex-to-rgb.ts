export const hexToRgb = (hex: string): string => {
  // Remove the leading # if it exists
  hex = hex.replace(/^#/, '');

  // Convert short hex to full hex (e.g., #abc to #aabbcc)
  if (hex.length === 3)
    hex = hex.split('').map((char) => char + char).join('');

  // Parse hex to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r} ${g} ${b}`;
}