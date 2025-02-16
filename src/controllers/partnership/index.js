const data = require("../../../mock-data/partnership.json");

const partnershipPageController = (req, res) => {
  res.send(data);
};

module.exports = {
  partnershipPageController,
};
