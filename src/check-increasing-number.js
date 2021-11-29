// Check if input number is an incrementing number?

// 0123
// n % 10 = last digit = 3
// n / 10 = 12.3 --> Math.trunc(12.3) --> 12
// Math.trunc(n / 10) --> remove the last digit

// P1: extract all digits and compare from right to left
// P2: convert to string and compare

// V1
export function isIncreasingNumberV1(n) {
  if (n < 10) return false;

  let remaining = n;
  let prevDigit = 10;

  while (remaining > 0) {
    // if found an invalid case return false
    const lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;

    // update prevDigit to lastDigit
    prevDigit = lastDigit;

    // remove the last digit from remaining
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

// V2

export function isIncreasingNumberV2(n) {
  if (n < 10) return false;

  const numberString = n.toString();
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }

  return true;
}
