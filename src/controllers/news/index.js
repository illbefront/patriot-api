const newsList = require("../../../mock-data/news-list.json");

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

const callToActionText = "Детальніше";
const title = "Новини";

const newsListController = (req, res) => {
  try {
    const { skip: requestedSkip, limit: requestedLimit } = req.query;
    const skip = Number(requestedSkip) || 0;
    const limit = Number(requestedLimit) || DEFAULT_LIMIT;
    const meta = {
      title: "Новини",
    };

    if (Number.isNaN(skip) || skip < 0 || Number.isNaN(limit) || limit < 0)
      return res.status(400).send({
        data: {
          title,
          callToActionText,
        },
        meta,
        error: "Skip & limit must be positive integers.",
      });

    if (limit > MAX_LIMIT)
      return res.status(400).send({
        data: {
          title,
          callToActionText,
        },
        meta,
        error: `Limit exceeds the acceptable value - ${MAX_LIMIT}.`,
      });

    return res.send({
      data: {
        newsList: newsList.slice(skip, skip + limit),
        title,
        callToActionText,
      },
      meta: {
        ...meta,
        pagination: {
          total: newsList.length,
          skip,
          limit,
        },
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  newsListController,
};
