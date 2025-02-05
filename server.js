const express = require('express');
const app = express();
const PORT = 8000;

const { homePageController } = require('./src/controllers/home');
const { lotteriesPageController } = require('./src/controllers/lotteries');
const { partnershipPageController } = require('./src/controllers/partnership');

app.get('/home', homePageController);
app.get('/lotteries', lotteriesPageController);
app.get('/partnership', partnershipPageController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
