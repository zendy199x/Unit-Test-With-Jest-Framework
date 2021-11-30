import { findAllPositiveEvenSubArr } from './find-all-positive-event-sub-arr';

describe('findAllPositiveEvenSubArr(numberList)', () => {
  it('should return empty if empty', () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr('')).toEqual([]);
    expect(findAllPositiveEvenSubArr(true)).toEqual([]);
    expect(findAllPositiveEvenSubArr(123)).toEqual([]);
  });

  it('should return empty if no continuous even sub array', () => {
    expect(findAllPositiveEvenSubArr([-3, -9, 1, 3, 5, 7, 9, 11])).toEqual([]);
  });

  it('should return correct sub array list if has even sub array', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20]
    ]);
  });
});
