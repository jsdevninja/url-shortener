const db = require("../models");
const Url = db.urls;
const shortid = require("shortid");

exports.create = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    res.status(400).send({
      message: "longUrl can't be empty!",
    });
    return;
  }

  const url = await Url.findOne({ where: { longUrl } });
  if (url) {
    return res.status(200).json(url);
  } else {
    const shortUrl = shortid.generate();
    const newUrl = {
      longUrl,
      shortUrl,
    };
    Url.create(newUrl)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Unknown error occured.",
        });
      });
  }
};

exports.getShortenUrl = async (req, res) => {
  const shortUrlCode = req.params.shortUrl;
  var url = await Url.findOne({ where: { shortUrl: shortUrlCode } });
  if (url) {
    res.status(200).send(url);
  } else {
    return res.status(400).json("The short url doesn't.");
  }
};
