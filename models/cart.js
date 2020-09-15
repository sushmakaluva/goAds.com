
module.exports = function (sequelize, DataTypes) {
  const Cart = sequelize.define('Cart', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Products, {
      allowNull: false,
      foreignKey: 'product_id',
    });
  };
  return Cart;
};
