const express = require('express');
const getTopWords = require('./fetcher');

const app = express();

app.get('/fetchTopList', async (req, res) => {
  res.send(await getTopWords(req.query.countToFetch));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running : http://127.0.0.1:${port}`);
});