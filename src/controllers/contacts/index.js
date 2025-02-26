const data = require("../../../mock-data/contacts.json");

const contactsPageController = (req, res) => {
  res.send(data);
};

module.exports = {
  contactsPageController,
};
