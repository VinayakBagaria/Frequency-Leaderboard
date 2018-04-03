const axios = require('axios');

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

    console.log(freqArray);
    const answer = [];

    Object.keys(freqArray)
      .reverse().map(index => {
        let elementsToExtract = mostFreq - answer.length;

        const data = freqArray[index].splice(0, elementsToExtract);
        answer.push(...data);
      });

    console.log(answer);
  });

