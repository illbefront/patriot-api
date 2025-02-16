const data = require("../../../mock-data/global.json");

const globalConfigController = (req, res) => {
  res.send(data);
};

module.exports = {
  globalConfigController,
};
