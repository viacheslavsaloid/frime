export function getNumberOrString(value: string) {
  return Number.parseInt(value) || value;
}
