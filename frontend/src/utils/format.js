export function formatNumber(val) {
  if (val === null || val === undefined) return '';
  return Number(val).toLocaleString();
}

export function formatCurrency(amount, currency = 'USD') {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
