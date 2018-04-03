const express = require('express');

const app = express();

app.get('/fetchTopList', (req, res) => {
  const countToFetch = req.query.countToFetch;
  res.send(countToFetch);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running : http://127.0.0.1:${port}`);
});