const express = require('express');
const app = express();
const PORT = 8000;

const { homePageController } = require('./src/controllers/home');

app.get('/', homePageController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
