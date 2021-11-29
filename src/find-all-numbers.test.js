import { findAllNumbersV1, findAllNumbersV2 } from './find-all-numbers';

// Unit test V1
describe('findAllNumbersV1(numberList)', () => {
  it('should return empty array if list is empty', () => {
    expect(findAllNumbersV1()).toEqual([]);
    expect(findAllNumbersV1([])).toEqual([]);
    expect(findAllNumbersV1({})).toEqual([]);
    expect(findAllNumbersV1('')).toEqual([]);
    expect(findAllNumbersV1(true)).toEqual([]);
  });

  it('should return empty array if list has no number starts with odd digit', () => {
    expect(findAllNumbersV1([2, 423, 6233, -2343])).toEqual([]);
  });

  it('should return correct list of numbers starting with odd digit', () => {
    expect(findAllNumbersV1([2, 42, 123, -56, 789012])).toEqual([123, -56, 789012]);
  });
});


// Unit test V2
describe('findAllNumbersV2(numberList)', () => {
  it('should return empty array if list is empty', () => {
    expect(findAllNumbersV2()).toEqual([]);
    expect(findAllNumbersV2([])).toEqual([]);
    expect(findAllNumbersV2({})).toEqual([]);
    expect(findAllNumbersV2('')).toEqual([]);
    expect(findAllNumbersV2(true)).toEqual([]);
  });

  it('should return empty array if list has no number starts with odd digit', () => {
    expect(findAllNumbersV2([2, 423, 6233, -2343])).toEqual([]);
  });

  it('should return correct list of numbers starting with odd digit', () => {
    expect(findAllNumbersV2([2, 42, 123, -56, 789012])).toEqual([123, -56, 789012]);
  });
});
