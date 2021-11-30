// Write a function that takes an array of digits and returns the number with the most frequent occurrences

export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const statistics = {};
  let maxKey = undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    
    // update statistics
    statistics[number] = statistics[number] === undefined ? 1 : statistics[number] + 1;

    // check maxKey
    if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
      maxKey = number;
    }
  }

  return Number.parseInt(maxKey);
}
