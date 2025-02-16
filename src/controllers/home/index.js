const data = require("../../../mock-data/home.json");

const homePageController = (req, res) => {
  res.send(data);
};

module.exports = {
  homePageController,
};
