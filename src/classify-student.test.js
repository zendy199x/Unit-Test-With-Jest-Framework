import { classifyStudentV1, classifyStudentV2, classifyStudentV3 } from './classify-student';

// classifyStudentV1
describe('classifyStudentV1()', () => {
  test('should return Invalid mark! when pass n < 0', () => {
    const value = classifyStudentV1(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when pass n > 10', () => {
    const value = classifyStudentV1(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when pass n in [8, 10]', () => {
    expect(classifyStudentV1(9)).toBe('Excellence');
    expect(classifyStudentV1(10)).toBe('Excellence');
  });

  test('should return Good when pass n in [7, 8]', () => {
    [7, 8].forEach((n) => expect(classifyStudentV1(n)).toBe('Good'));
  });

  test('should return Not Good when pass n in [4, 6]', () => {
    [4, 5, 6].forEach((n) => expect(classifyStudentV1(n)).toBe('Not Good'));
  });

  test('should return Bad when pass n in [1, 3]', () => {
    [1, 2, 3].forEach((n) => expect(classifyStudentV1(n)).toBe('Bad'));
  });
});

// classifyStudentV2
describe('classifyStudentV2()', () => {
  test('should return Invalid mark! when pass n < 0', () => {
    const value = classifyStudentV2(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when pass n > 10', () => {
    const value = classifyStudentV2(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when pass n in [8, 10]', () => {
    expect(classifyStudentV2(9)).toBe('Excellence');
    expect(classifyStudentV2(10)).toBe('Excellence');
  });

  test('should return Good when pass n in [7, 8]', () => {
    [7, 8].forEach((n) => expect(classifyStudentV2(n)).toBe('Good'));
  });

  test('should return Not Good when pass n in [4, 6]', () => {
    [4, 5, 6].forEach((n) => expect(classifyStudentV2(n)).toBe('Not Good'));
  });

  test('should return Bad when pass n in [1, 3]', () => {
    [1, 2, 3].forEach((n) => expect(classifyStudentV2(n)).toBe('Bad'));
  });
});

// classifyStudentV3
describe('classifyStudentV3()', () => {
  test('should return Invalid mark! when pass n < 0', () => {
    const value = classifyStudentV3(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when pass n > 10', () => {
    const value = classifyStudentV3(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when pass n in [8, 10]', () => {
    expect(classifyStudentV3(9)).toBe('Excellence');
    expect(classifyStudentV3(10)).toBe('Excellence');
  });

  test('should return Good when pass n in [7, 8]', () => {
    [7, 8].forEach((n) => expect(classifyStudentV3(n)).toBe('Good'));
  });

  test('should return Not Good when pass n in [4, 6]', () => {
    [4, 5, 6].forEach((n) => expect(classifyStudentV3(n)).toBe('Not Good'));
  });

  test('should return Bad when pass n in [1, 3]', () => {
    [1, 2, 3].forEach((n) => expect(classifyStudentV3(n)).toBe('Bad'));
  });
});
