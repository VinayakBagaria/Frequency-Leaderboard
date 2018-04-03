const express = require('express');

const app = express();



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running : http://127.0.0.1:${port}`);
});