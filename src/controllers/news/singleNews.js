const newsList = require("../../../mock-data/news-list.json");

const singleNewsController = (req, res) => {
  try {
    const requiredNews = newsList.find(({ id }) => id === req.params.id);
    if (!requiredNews) return res.status(404).send({ data: null, meta: {} });

    return res.send({
      data: {
        sections: [
          {
            htmlContent: requiredNews.htmlContent,
            image: requiredNews.image,
            __component: "sections.article",
          },
        ],
      },
      meta: {
        title: requiredNews.title,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  singleNewsController,
};
