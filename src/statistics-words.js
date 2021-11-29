// Enter a string, count the frequency of each word in that string

// 'easy frontend is very easy'
// ['easy', 'frontend', 'easy']
// { easy: 2, frontend: 1, is: 1, very: 1 }

// V1
export function statisticsWordsV1(str) {
  if (str === '') return {};

  const statistics = {};
  str
    .split(' ')
    .filter((x) => x !== '')
    .forEach((word) => {
      if (statistics[word]) {
        statistics[word] += 1;
      } else {
        statistics[word] = 1;
      }
    });

  return statistics;
}

export function statisticsWordsV2(str) {
  if (str === '') return {};

  return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistics, word) => {
      statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;

      return statistics;
    }, {});
}
