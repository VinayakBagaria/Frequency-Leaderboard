const axios = require('axios');

async function getTopWords(mostFreqCount) {
  const response = await axios('http://terriblytinytales.com/test.txt');

  // get all words in an array
  const matchedWords = response.data.match(/\w+/g);
  // return {word: count} for all words
  const wordCount = matchedWords.reduce((stats, word) => {
    if (word in stats) {
      stats[word] += 1; // eslint-disable-line no-param-reassign
    } else {
      stats[word] = 1; // eslint-disable-line no-param-reassign
    }
    return stats;
  }, {});

  // get k most frequent words as array which are stored as keys of the object
  const sortedWords = Object.keys(wordCount)
    .sort((a, b) => wordCount[b] - wordCount[a])
    .slice(0, mostFreqCount);

  // return {word: count} in descending order
  return sortedWords.reduce((result, word) => ({
    ...result,
    [word]: wordCount[word],
  }), {});
}

module.exports = getTopWords;
