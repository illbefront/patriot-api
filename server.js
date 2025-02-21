const express = require("express");
const app = express();
const PORT = 7000;

const { globalConfigController } = require("./src/controllers/global");

const { homePageController } = require("./src/controllers/home");
const { lotteriesPageController } = require("./src/controllers/lotteries");
const { partnershipPageController } = require("./src/controllers/partnership");
const { faqPageController } = require("./src/controllers/faq");

const { newsListController } = require("./src/controllers/news");
const { singleNewsController } = require("./src/controllers/news/singleNews");

// global config
app.get("/global", globalConfigController);

// pages
app.get("/home", homePageController);
app.get("/lotteries", lotteriesPageController);
app.get("/partnership", partnershipPageController);
app.get("/faq", faqPageController);

app.get("/news", newsListController);
app.get("/news/:id", singleNewsController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
