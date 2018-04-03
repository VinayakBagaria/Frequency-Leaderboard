const axios = require('axios');

console.time('started');
axios('http://terriblytinytales.com/test.txt')
  .then(res => {
    var pattern = /\w+/g;
    var matchedWords = res.data.match(pattern);

    const mostFreq = 15;

    const counts = matchedWords.reduce((stats, word) => {
      if(stats.hasOwnProperty(word)) {
        stats[word] += 1;
      }
      else {
        stats[word] = 1;
      }
      return stats;
    }, {});

    const freqArray = {};

    Object.keys(counts).map(k => {
      const countWord = counts[k];
      if(countWord in freqArray) {
        freqArray[countWord].push(k);
      }
      else {
        freqArray[countWord] = [k];
      }
    })

    const answer = [];

    Object.keys(freqArray)
      .reverse().map(index => {
        let elementsToExtract = mostFreq - answer.length;

        const data = freqArray[index].splice(0, elementsToExtract);
        answer.push(...data);
      });

    const resultantObj = answer.reduce((result, element) => {
      return {
        ...result,
        [element]: counts[element]
      }
    }, {});
    console.log(resultantObj);
    console.timeEnd('started');
  });
