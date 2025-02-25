const newsList = require("../../../mock-data/news-list.json");

const singleNewsController = (req, res) => {
  try {
    const requiredNews = newsList.find(({ slug }) => slug === req.params.slug);
    if (!requiredNews) return res.status(404).send({ data: { meta: {} } });

    return res.send({
      data: {
        sections: [
          {
            htmlContent: requiredNews.htmlContent,
            image: requiredNews.image,
            backButton: {
              title: "Назад",
              url: "/news",
            },
            __component: "sections.article",
          },
        ],
        meta: {
          title: requiredNews.title,
        },
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  singleNewsController,
};
