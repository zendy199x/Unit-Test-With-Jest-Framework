import { statisticsWordsV1, statisticsWordsV2 } from './statistics-words';

// Unit test V1
describe('statisticsWordsV1(str)', () => {
  it('should return empty object in case str is empty', () => {
    expect(statisticsWordsV1('')).toEqual({});
  });

  it("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWordsV1('easy frontend is very easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });

  it('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWordsV1('  easy   frontend     is   very      easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });
});

// Unit test V2
describe('statisticsWordsV2(str)', () => {
  it('should return empty object in case str is empty', () => {
    expect(statisticsWordsV2('')).toEqual({});
  });

  it("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWordsV2('easy frontend is very easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });

  it('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWordsV2('  easy   frontend     is   very      easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });
});
