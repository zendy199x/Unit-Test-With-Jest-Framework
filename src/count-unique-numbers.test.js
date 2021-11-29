import { countUniqueNumbersV1, countUniqueNumbersV2, countUniqueNumbersV3 } from './count-unique-numbers';

// Unit test V1
describe('countUniqueNumbersV1(numberList)', () => {
  it('should return 0 if empty array', () => {
    expect(countUniqueNumbersV1([])).toBe(0);
    expect(countUniqueNumbersV1({})).toBe(0);
    expect(countUniqueNumbersV1('')).toBe(0);
    expect(countUniqueNumbersV1(true)).toBe(0);
    expect(countUniqueNumbersV1(123)).toBe(0);
  });

  it('should return length if list is unique', () => {
    expect(countUniqueNumbersV1([1])).toBe(1);
    expect(countUniqueNumbersV1([1, 2])).toBe(2);
    expect(countUniqueNumbersV1([1, 2, 3])).toBe(3);
  });

  it('should return correct count of unique numbers', () => {
    expect(countUniqueNumbersV1([1, 1, 1])).toBe(1);
    expect(countUniqueNumbersV1([1, 1, 2, 2, 2])).toBe(2);
    expect(countUniqueNumbersV1([1, 3, 2, 2, 1, 3, 2, 3])).toBe(3);
  });
});


// Unit test V2
describe('countUniqueNumbersV2(numberList)', () => {
  it('should return 0 if empty array', () => {
    expect(countUniqueNumbersV2([])).toBe(0);
    expect(countUniqueNumbersV2({})).toBe(0);
    expect(countUniqueNumbersV2('')).toBe(0);
    expect(countUniqueNumbersV2(true)).toBe(0);
    expect(countUniqueNumbersV2(123)).toBe(0);
  });

  it('should return length if list is unique', () => {
    expect(countUniqueNumbersV2([1])).toBe(1);
    expect(countUniqueNumbersV2([1, 2])).toBe(2);
    expect(countUniqueNumbersV2([1, 2, 3])).toBe(3);
  });

  it('should return correct count of unique numbers', () => {
    expect(countUniqueNumbersV2([1, 1, 1])).toBe(1);
    expect(countUniqueNumbersV2([1, 1, 2, 2, 2])).toBe(2);
    expect(countUniqueNumbersV2([1, 3, 2, 2, 1, 3, 2, 3])).toBe(3);
  });
});



// Unit test V3
describe('countUniqueNumbersV3(numberList)', () => {
  it('should return 0 if empty array', () => {
    expect(countUniqueNumbersV3([])).toBe(0);
    expect(countUniqueNumbersV3({})).toBe(0);
    expect(countUniqueNumbersV3('')).toBe(0);
    expect(countUniqueNumbersV3(true)).toBe(0);
    expect(countUniqueNumbersV3(123)).toBe(0);
  });

  it('should return length if list is unique', () => {
    expect(countUniqueNumbersV3([1])).toBe(1);
    expect(countUniqueNumbersV3([1, 2])).toBe(2);
    expect(countUniqueNumbersV3([1, 2, 3])).toBe(3);
  });

  it('should return correct count of unique numbers', () => {
    expect(countUniqueNumbersV3([1, 1, 1])).toBe(1);
    expect(countUniqueNumbersV3([1, 1, 2, 2, 2])).toBe(2);
    expect(countUniqueNumbersV3([1, 3, 2, 2, 1, 3, 2, 3])).toBe(3);
  });
});
