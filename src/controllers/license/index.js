const data = require("../../../mock-data/license.json");

const licensePageController = (req, res) => {
  res.send(data);
};

module.exports = {
  licensePageController,
};
