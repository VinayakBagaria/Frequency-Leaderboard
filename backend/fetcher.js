const axios = require('axios');

async function getTopWords(mostFreq) {
  const res = await axios('http://terriblytinytales.com/test.txt');


    var pattern = /\w+/g;
    var matchedWords = res.data.match(pattern);

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

    return sortedKeys.reduce((result, element) => {
      return {
        ...result,
        [element]: counts[element]
      }
    }, {});
}

module.exports = getTopWords;