module.exports = function (sequelize, DataTypes) {
    const Cart = sequelize.define('Cart',
      {
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
        },
        
      });
  
    Cart.bulkCreate([
      {
        product_name: 'Samsung Galaxy S10+',
        price: 979,
        
      },
      {
        product_name: 'Windows Surface Go 2',
        price: 529,
        
      },
      
    ], { ignoreDuplicates: true });
    return Cart;
  };
  