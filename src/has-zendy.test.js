import { hasZendyV1, hasZendyV2, hasZendyV3, hasZendyV4, hasZendyV5 } from './has-zendy';

// Unit test V1
describe('hasZendyV1(studentList)', () => {
  it('should return false for empty array or not array', () => {
    expect(hasZendyV1('')).toBe(false);
    expect(hasZendyV1({})).toBe(false);
    expect(hasZendyV1([])).toBe(false);
  });

  it("should return false for array doesn't have Zendy", () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'male' },
      { id: 2, name: 'Zendy', gender: 'female' },
    ];
    expect(hasZendyV1(studentList)).toBe(false);
  });

  it('should return true for array has Zendy', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Zendy', gender: 'male' },
    ];
    expect(hasZendyV1(studentList)).toBe(true);
  });
});

// Unit test V2
describe('hasZendyV2(studentList)', () => {
  it('should return false for empty array or not array', () => {
    expect(hasZendyV2('')).toBe(false);
    expect(hasZendyV2({})).toBe(false);
    expect(hasZendyV2([])).toBe(false);
  });

  it("should return false for array doesn't have Zendy", () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'male' },
      { id: 2, name: 'Zendy', gender: 'female' },
    ];
    expect(hasZendyV2(studentList)).toBe(false);
  });

  it('should return true for array has Zendy', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Zendy', gender: 'male' },
    ];
    expect(hasZendyV2(studentList)).toBe(true);
  });
});

// Unit test V3
describe('hasZendyV3(studentList)', () => {
  it('should return false for empty array or not array', () => {
    expect(hasZendyV3('')).toBe(false);
    expect(hasZendyV3({})).toBe(false);
    expect(hasZendyV3([])).toBe(false);
  });

  it("should return false for array doesn't have Zendy", () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'male' },
      { id: 2, name: 'Zendy', gender: 'female' },
    ];
    expect(hasZendyV3(studentList)).toBe(false);
  });

  it('should return true for array has Zendy', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Zendy', gender: 'male' },
    ];
    expect(hasZendyV3(studentList)).toBe(true);
  });
});

// Unit test V4
describe('hasZendyV4(studentList)', () => {
  it('should return false for empty array or not array', () => {
    expect(hasZendyV4('')).toBe(false);
    expect(hasZendyV4({})).toBe(false);
    expect(hasZendyV4([])).toBe(false);
  });

  it("should return false for array doesn't have Zendy", () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'male' },
      { id: 2, name: 'Zendy', gender: 'female' },
    ];
    expect(hasZendyV4(studentList)).toBe(false);
  });

  it('should return true for array has Zendy', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Zendy', gender: 'male' },
    ];
    expect(hasZendyV4(studentList)).toBe(true);
  });
});

// Unit test V5
describe('hasZendyV5(studentList)', () => {
  it('should return false for empty array or not array', () => {
    expect(hasZendyV5('')).toBe(false);
    expect(hasZendyV5({})).toBe(false);
    expect(hasZendyV5([])).toBe(false);
  });

  it("should return false for array doesn't have Zendy", () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'male' },
      { id: 2, name: 'Zendy', gender: 'female' },
    ];
    expect(hasZendyV5(studentList)).toBe(false);
  });

  it('should return true for array has Zendy', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Zendy', gender: 'male' },
    ];
    expect(hasZendyV5(studentList)).toBe(true);
  });
});