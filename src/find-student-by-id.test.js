import { findStudentByIdV1, findStudentByIdV2 } from './find-student-by-id';

// Unit test V1
describe('findStudentByIdV1(studentList, studentId)', () => {
  it('should return -1 if list is empty', () => {
    expect(findStudentByIdV1([])).toBe(-1);
    expect(findStudentByIdV1([], -1)).toBe(-1);
    expect(findStudentByIdV1([], 0)).toBe(-1);
    expect(findStudentByIdV1([], 1)).toBe(-1);
  });

  it("should return -1 id list doesn't have target id", () => {
    const studentList = [
      { id: 1, name: 'Zendy' },
      { id: 2, name: 'Stella' },
    ];
    expect(findStudentByIdV1(studentList, 0)).toBe(-1);
    expect(findStudentByIdV1(studentList, 3)).toBe(-1);
  });

  it('should return correct index if list has target id', () => {
    const studentList = [
      { id: 1, name: 'Zendy' },
      { id: 2, name: 'Stella' },
    ];
    expect(findStudentByIdV1(studentList, 1)).toBe(0);
    expect(findStudentByIdV1(studentList, 2)).toBe(1);
  });
});

// Unit test V2
describe('findStudentByIdV2(studentList, studentId)', () => {
  it('should return -1 if list is empty', () => {
    expect(findStudentByIdV2([])).toBe(-1);
    expect(findStudentByIdV2([], -1)).toBe(-1);
    expect(findStudentByIdV2([], 0)).toBe(-1);
    expect(findStudentByIdV2([], 1)).toBe(-1);
  });

  it("should return -1 id list doesn't have target id", () => {
    const studentList = [
      { id: 1, name: 'Zendy' },
      { id: 2, name: 'Stella' },
    ];
    expect(findStudentByIdV2(studentList, 0)).toBe(-1);
    expect(findStudentByIdV2(studentList, 3)).toBe(-1);
  });

  it('should return correct index if list has target id', () => {
    const studentList = [
      { id: 1, name: 'Zendy' },
      { id: 2, name: 'Stella' },
    ];
    expect(findStudentByIdV2(studentList, 1)).toBe(0);
    expect(findStudentByIdV2(studentList, 2)).toBe(1);
  });
});
