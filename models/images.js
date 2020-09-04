module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB('long'),
    },
  });

  return Images;
};
