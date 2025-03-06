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
          {
            title: "Умови проведення лотереї",
            pdfFile: {
              image: "https://i.postimg.cc/zXBCf2r2/license.png",
              title: "Lorem ipsum sit amet....pdf",
              link: { url: "/" },
            },
            __component: "sections.documentDetails",
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
