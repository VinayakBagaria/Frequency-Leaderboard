const axios = require('axios');

axios('http://terriblytinytales.com/test.txt')
  .then(res => {
    var pattern = /\w+/g;
    var matchedWords = res.data.match(pattern);

    const mostFreq = 20;

    const counts = matchedWords.reduce((stats, word) => {
      if(stats.hasOwnProperty(word)) {
        stats[word] += 1;
      }
      else {
        stats[word] = 1;
      }
      return stats;
    }, {});

    const sortedKeys = Object.keys(counts)
      .sort((a, b) => counts[b] - counts[a]).slice(0, mostFreq);

    const resultantObj = sortedKeys.reduce((result, element) => {
      return {
        ...result,
        [element]: counts[element]
      }
    }, {});

    console.log(resultantObj);
  });

