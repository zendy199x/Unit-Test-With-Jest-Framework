// Write a function that takes an array of numbers and finds numbers starting with an odd digit
//for...i
// filter

// Delegate
// 123 --> '123' --> '1'
function getTheFirstDigit(number) {
  const unsignedNumber = Math.abs(number);
  const firstDigitCharacter = unsignedNumber.toString().charAt(0);
  return Number.parseInt(firstDigitCharacter);
}

// V1: for...i
export function findAllNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const filteredList = [];

  // go through and check to add to filteredList
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    // get the first digit of number
    const firstDigit = getTheFirstDigit(number);
    if (firstDigit % 2 === 1) filteredList.push(number);
  }

  return filteredList;
}

// V2: filter
export function findAllNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((number) => getTheFirstDigit(number) % 2 === 1);
}
