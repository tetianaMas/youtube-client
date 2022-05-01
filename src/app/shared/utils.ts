export function getCurrentDateFormatted(): string {
  const now = new Date();
  const dayOfMonth = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  function pad(n: number) {
    return n < 10 ? '0' + n : n + '';
  }

  return year + '-' + pad(month + 1) + '-' + pad(dayOfMonth);
}
