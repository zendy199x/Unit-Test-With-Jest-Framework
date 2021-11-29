// Write a function to find students whose id is equal to the id passed in

// for...i
// findIndex

// V1: for...i
export function findStudentByIdV1(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    if (student.id === studentId) return i;
  }

  return -1;
}

// V2: findIndex
export function findStudentByIdV2(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;

  return studentList.findIndex((student) => student.id === studentId);
}
