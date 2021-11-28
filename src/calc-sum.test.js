import { calculateSumV1, calculateSumV2 } from './calc-s';

// S(n) = 1 + 2 + 3 + ... + n

// function calculateSum(n) {}
// n <= 0 --> 0
// n > 0 --> sum
// n = 1 --> 1
// n = 2 --> 3
// n = 3 --> 6

// Unit test calculateSumV1
describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n not an number', () => {
    expect(calculateSumV1('')).toBe(0);
    expect(calculateSumV1({})).toBe(0);
    expect(calculateSumV1(null)).toBe(0);
    expect(calculateSumV1(undefined)).toBe(0);
  });

  test('should return 0 when n <= 0', () => {
    [-1, 0].forEach((n) => expect(calculateSumV1(n)).toBe(0));
  });

  test('should return sum when n > 0', () => {
    expect(calculateSumV1(1)).toBe(1);
    expect(calculateSumV1(2)).toBe(3);
    expect(calculateSumV1(3)).toBe(6);
  });
});


// Unit test calculateSumV2
describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n not an number', () => {
    expect(calculateSumV2('')).toBe(0);
    expect(calculateSumV2({})).toBe(0);
    expect(calculateSumV2(null)).toBe(0);
    expect(calculateSumV2(undefined)).toBe(0);
  });

  test('should return 0 when n <= 0', () => {
    [-1, 0].forEach((n) => expect(calculateSumV2(n)).toBe(0));
  });

  test('should return sum when n > 0', () => {
    expect(calculateSumV2(1)).toBe(1);
    expect(calculateSumV2(2)).toBe(3);
    expect(calculateSumV2(3)).toBe(6);
  });
});
