const fs = require('fs');

function readImageData(path) {
  return Buffer.from(fs.readFileSync(path)).toString('base64');
}

module.exports = function (sequelize, DataTypes) {
  const Products = sequelize.define('Products',
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
      category: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img_data: {
        type: DataTypes.BLOB('long'),
      },
    },
    {
      freezeTableName: true,
    });

  Products.bulkCreate([
    {
      product_name: 'Lenovo Chromebook',
      price: 599,
      category: 'Electronics',
      description: 'Touchscreen, Wireless Bluetooth, Chrome OS',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/lenovo.jpeg`),
    },
    {
      product_name: 'Dell Latitude D610',
      price: 526,
      category: 'Electronics',
      description: '23.6 x 35.8 x 2 centimeters, Intel UHD Graphics 620 with DDR4 SDRAM shared, 15.6" Lcd',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/dell.webp`),
    },
    {
      product_name: 'Apple Airpods Gen2',
      price: 389,
      category: 'Electronics',
      description: 'Bluetooth, Wireless, IOS 10inch',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/airpods.jpeg`),
    },
    {
      product_name: 'Bose Headphones',
      price: 535,
      category: 'Electronics',
      description: 'Over Ear, Wireless, Black color',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/bose.jpg`),
    },
    {
      product_name: 'OnePlus 7T - 128GB',
      price: 799,
      category: 'Mobiles',
      description: 'USB Cable, LG Charger, Single SIM',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/oneplus.jpg`),
    },
    {
      product_name: 'Samsung Galaxy S9 - 64GB',
      price: 468,
      category: 'Mobiles',
      description: 'SD Card, Rear Camera, Front Face Recognition',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/galaxy.webp`),
    },
    {
      product_name: 'Apple iPhone 7 Plus',
      price: 1560,
      category: 'Mobiles',
      description: '128GB, Space Grey color, OLED display',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/iphone.jpg`),
    },
    {
      product_name: 'Nokia Lumia',
      price: 350,
      category: 'Mobiles',
      description: 'Touchscreen, Wireless 4G, Cellular',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/lumia.jpg`),
    },
    {
      product_name: 'Frigidaire Refrigerator',
      price: 2050,
      category: 'Appliances',
      description: 'Stainless steel, Tempered glass shelf, 3.1 cu.ft. total capacity',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/fridge.jpg`),
    },
    {
      product_name: 'GE Dishwasher',
      price: 800,
      category: 'Appliances',
      description: 'Countertop, Energy star compliant, Low water consumption',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/dishwasher.jpg`),
    },
    {
      product_name: 'Panasonic Microwave',
      price: 275,
      category: 'Appliances',
      description: 'Keypad Buttons,120 Volts, Black Stainless Steel',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/microwave.jpg`),
    },
    {
      product_name: 'VPCOK Air Fryer',
      price: 460,
      category: 'Appliances',
      description: 'Multifuction Cooker, Non Stick Pan, Auto Switch Off timer',
      img_data: readImageData(`${__dirname}/../public/assets/img/products/airfryer.webp`),
    },
  ], { ignoreDuplicates: true });
  return Products;
};


