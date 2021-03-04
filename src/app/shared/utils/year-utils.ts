export function generateYears(): number[] {
  const years: number[] = [];
  const year = (new Date()).getFullYear();
  for (let delta = -10; delta <= 70; delta++) {
    years.push(year + delta);
  }
  return years;
}
