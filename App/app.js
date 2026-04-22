const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.USER}`);
});

app.listen(3000, () => console.log("App running"));