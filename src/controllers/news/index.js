const newsList = require("../../../mock-data/news-list.json");

const callToActionText = "Детальніше";
const title = "Новини";
const pageSize = 20;

const newsListController = (req, res) => {
  try {
    const requestedPage = Number(req.query.page) || 1;
    const totalPages = Math.ceil(newsList.length / pageSize);
    const meta = { currentPage: requestedPage, totalPages, pageSize };

    if (Number.isNaN(requestedPage) || requestedPage < 1)
      return res.status(400).send({
        data: null,
        error: "Page must be positive integer.",
        callToActionText,
        title,
      });

    if (requestedPage > totalPages)
      return res.status(404).send({
        data: null,
        error: "Requested page number exceeds total pages.",
        meta,
        callToActionText,
        title,
      });

    return res.send({
      data: {
        newsList: newsList.slice(
          (requestedPage - 1) * pageSize,
          (requestedPage - 1) * pageSize + pageSize
        ),
      },
      meta,
      callToActionText,
      title,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const singleNewsController = (req, res) => {
  try {
    const requiredNews = newsList.find(({ id }) => id === req.params.id);
    if (!requiredNews) return res.status(404).send({ data: null });

    return res.send({
      data: {
        sections: [
          {
            htmlContent: requiredNews.htmlContent,
            image: requiredNews.image,
            __component: "sections.article",
          },
        ],
        title: requiredNews.title,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  newsListController,
  singleNewsController,
};
