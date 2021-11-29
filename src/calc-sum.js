// Enter number n, sum from 1 to n

// S(n) = 1 + 2 + 3 + ... + n
// S(n) = (n + (n + 1)) / 2

export function calculateSumV1(n) {
  if (typeof n !== 'number' || n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

export function calculateSumV2(n) {
  if (typeof n !== 'number' || n <= 0) return 0;

  return (n * (n + 1)) / 2;
}
