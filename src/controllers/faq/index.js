const data = require("../../../mock-data/faq.json");

const faqPageController = (req, res) => {
  res.send(data);
};

module.exports = {
  faqPageController,
};
