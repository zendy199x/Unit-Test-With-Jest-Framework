// Enter an array, check array is named "Zendy" and gender is "male", case insensitive

// for...i
// forEach
// find
// findIndex
// filter

const studentList = [
  { id: 1, name: 'Bob', gender: 'female' },
  { id: 2, name: 'Zendy', gender: 'male' },
  { id: 3, name: 'Stella', gender: 'female' },
];

function isZendy(student) {
  if (!student) return false;

  return student.gender === 'male' && student.name.toLowerCase() === 'zendy';
}


// V1: for...i
export function hasZendyV1(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (isZendy(student)) return true;
  }

  return false;
}
// hasZendyV1(studentList)


// V2: forEach
export function hasZendyV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  let hasZendyFlag = false;
  studentList.forEach((student) => {
    if (isZendy(student)) hasZendyFlag = true;
  });

  return hasZendyFlag;
}
// hasZendyV2(studentList)


// V3: find
export function hasZendyV3(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  // return Boolean(studentList.find((student) => isZendy(student)));
  return Boolean(studentList.find(isZendy));
}
// hasZendyV3(studentList)


// V4: findIndex
export function hasZendyV4(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  // return Boolean(studentList.find((student) => isZendy(student)));
  return studentList.findIndex(isZendy) >= 0;
}
// hasZendyV4(studentList)


// V5: filter
export function hasZendyV5(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  // return Boolean(studentList.find((student) => isZendy(student)));
  return studentList.filter(isZendy).length > 0;
}
// hasZendyV5(studentList)
