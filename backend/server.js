const express = require('express');
const getTopWords = require('./fetcher');

const app = express();

app.get('/fetchTopList/:countToFetch', async (req, res) => {
  const { countToFetch } = req.params;
  if (countToFetch > -1) {
    res.send(await getTopWords(countToFetch));
  } else {
    res.send({ error: 'invalid input' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port);
