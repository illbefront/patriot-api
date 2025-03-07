const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 7000;

const { globalConfigController } = require("./src/controllers/global");

const { contactsPageController } = require("./src/controllers/contacts");
const { faqPageController } = require("./src/controllers/faq");
const { homePageController } = require("./src/controllers/home");
const { issuerPageController } = require("./src/controllers/issuer");
const { licensePageController } = require("./src/controllers/license");
const { lotteriesPageController } = require("./src/controllers/lotteries");
const { lotteryController } = require("./src/controllers/lotteries/lottery");
const { partnershipPageController } = require("./src/controllers/partnership");

const { newsListController } = require("./src/controllers/news");
const { singleNewsController } = require("./src/controllers/news/singleNews");

const { feedbackFormController } = require("./src/controllers/feedback");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// global config
app.get("/global", globalConfigController);

// pages
app.get("/contacts", contactsPageController);
app.get("/faq", faqPageController);
app.get("/home", homePageController);
app.get("/issuer", issuerPageController);
app.get("/license", licensePageController);
app.get("/lotteries", lotteriesPageController);
app.get("/lotteries/:slug", lotteryController);
app.get("/partnership", partnershipPageController);

app.get("/news", newsListController);
app.get("/news/:slug", singleNewsController);

// form submit handler
app.post("/feedback", feedbackFormController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
