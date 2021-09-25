module.exports = (sequelize, Sequelize) => {
  const Url = sequelize.define("urls", {
    longUrl: {
      type: Sequelize.STRING,
    },
    shortUrl: {
      type: Sequelize.STRING,
    },
  });

  return Url;
};
