import { isIncreasingNumberV1, isIncreasingNumberV2 } from './check-increasing-number';

// Unit test V1
describe('isIncreasingNumberV1(n)', () => {
  it('should return false when n < 10', () => {
    // expect(isIncreasingNumberV1(0)).toBe(false);
    // expect(isIncreasingNumberV1(1)).toBe(false);
    // expect(isIncreasingNumberV1(2)).toBe(false);
    // expect(isIncreasingNumberV1(3)).toBe(false);
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(false);
    });
  });

  it('should return false when n is not an increasing number', () => {
    [11, 222, 333, 21, 312, 7831].forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(false);
    });
  });

  it('should return false when n is an increasing number', () => {
    [12, 123, 234, 345, 123456, 46789].forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(true);
    });
  });
});
describe('isIncreasingNumberV2(n)', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false);
    });
  });

  it('should return false when n is not an increasing number', () => {
    [11, 222, 333, 21, 312, 7831].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false);
    });
  });

  it('should return false when n is an increasing number', () => {
    [12, 123, 234, 345, 123456, 46789].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(true);
    });
  });
});
