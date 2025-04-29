export function capitalize(str) {
  if (!str) return '';

  return str.trim().charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
