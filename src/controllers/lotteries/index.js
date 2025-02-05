const data = require("../../../mock-data/lotteries.json");

const lotteriesPageController = (req, res) => {
    res.send(data);
};

module.exports = {
    lotteriesPageController
}