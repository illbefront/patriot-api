const data = require("../../../mock-data/issuer.json");

const issuerPageController = (req, res) => {
  res.send(data);
};

module.exports = {
  issuerPageController,
};
