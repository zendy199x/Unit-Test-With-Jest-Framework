// Write a function that counts the number of different numbers in an array

// V1: add unique numbers to a new array --> length
export function countUniqueNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const uniqueNumberList = [];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
  }

  return uniqueNumberList.length;
}

// V2: using object map --> keys of object
export function countUniqueNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flagObject = {};
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    flagObject[number] = true;
  }

  return Object.keys(flagObject).length;
}

// V3: using reduce
export function countUniqueNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flagObject = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});

  return Object.keys(flagObject).length;
}
