const express = require('express');
const app = express();
const PORT = 8000;

const { homePageController } = require('./src/controllers/home');
const { lotteriesPageController } = require('./src/controllers/lotteries');

app.get('/home', homePageController);
app.get('/lotteries', lotteriesPageController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
