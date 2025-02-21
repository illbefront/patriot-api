const express = require("express");
const app = express();
const PORT = 7000;

const { globalConfigController } = require("./src/controllers/global");

const { faqPageController } = require("./src/controllers/faq");
const { homePageController } = require("./src/controllers/home");
const { issuerPageController } = require("./src/controllers/issuer");
const { licensePageController } = require("./src/controllers/license");
const { lotteriesPageController } = require("./src/controllers/lotteries");
const { partnershipPageController } = require("./src/controllers/partnership");

const { newsListController } = require("./src/controllers/news");
const { singleNewsController } = require("./src/controllers/news/singleNews");

// global config
app.get("/global", globalConfigController);

// pages
app.get("/faq", faqPageController);
app.get("/home", homePageController);
app.get("/issuer", issuerPageController);
app.get("/license", licensePageController);
app.get("/lotteries", lotteriesPageController);
app.get("/partnership", partnershipPageController);

app.get("/news", newsListController);
app.get("/news/:id", singleNewsController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
