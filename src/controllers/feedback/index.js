const fs = require("fs");
const path = require("path");

const feedbackFormController = (req, res) => {
  const { phone, name } = req.body;

  if (!phone || !name) {
    return res
      .status(400)
      .json({ message: "Поля телефон та імʼя обовʼязкові" });
  }

  const time = new Date().toISOString();
  const dataString = `[${time}] ${phone} ${name}\n`;

  const filePath = path.join(__dirname, "feedback.txt");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "", { flag: "wx" });
  }

  fs.appendFile(filePath, dataString, (err) => {
    if (err) {
      console.error("Failed to write to file:", err);
      return res.status(500).json({ message: "Невдалося зеберегти дані" });
    }

    res.status(200).json({ message: "Збережено" });
  });
};

module.exports = {
  feedbackFormController,
};
