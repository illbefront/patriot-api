const lotteryList = require("../../../mock-data/lottery-list.json");

const lotteryController = (req, res) => {
  try {
    const requiredLottery = lotteryList.find(
      ({ slug }) => slug === req.params.slug
    );
    if (!requiredLottery) return res.status(404).send({ data: { meta: {} } });

    return res.send({
      data: {
        sections: [
          {
            htmlContent: requiredLottery.htmlContent,
            image: requiredLottery.image,
            lotteryProps: requiredLottery.lotteryProps,
            backButton: {
              title: "Назад",
              url: "/lotteries",
            },
            __component: "sections.article",
          },
        ],
        meta: {
          title: requiredLottery.title,
        },
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  lotteryController,
};
