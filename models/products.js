module.exports = function (sequelize, DataTypes) {
  const Products = sequelize.define('Products', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
    },
  });
  return Products;
};
