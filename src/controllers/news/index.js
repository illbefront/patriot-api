const newsList = require("../../../mock-data/news-list.json");

const callToActionText = "Детальніше";
const title = "Новини";
const pageSize = 20;

const newsListController = (req, res) => {
  try {
    const requestedPage = Number(req.query.page) || 1;
    const totalPages = Math.ceil(newsList.length / pageSize);
    const meta = {
      currentPage: requestedPage,
      totalPages,
      pageSize,
      title: "Новини",
    };

    if (Number.isNaN(requestedPage) || requestedPage < 1)
      return res.status(400).send({
        data: {
          title,
          callToActionText,
        },
        meta: {
          title: "Новини",
        },
        error: "Page must be positive integer.",
      });

    if (requestedPage > totalPages)
      return res.status(404).send({
        data: { title, callToActionText },
        error: "Requested page number exceeds total pages.",
        meta,
      });

    return res.send({
      data: {
        newsList: newsList.slice(
          (requestedPage - 1) * pageSize,
          (requestedPage - 1) * pageSize + pageSize
        ),
        title,
        callToActionText,
      },
      meta,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  newsListController,
};
