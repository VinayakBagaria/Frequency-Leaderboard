const express = require('express');
const getTopWords = require('./fetcher');

const app = express();

const port = process.env.PORT || 5000;

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/fetchTopList/:countToFetch', async (req, res) => {
  const {
    countToFetch,
  } = req.params;
  if (countToFetch > -1) {
    res.send(await getTopWords(countToFetch));
  } else {
    res.send({
      error: 'invalid input',
    });
  }
});

app.listen(port);
