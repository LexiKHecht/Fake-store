const sequelize = require('../config/connection');
const { User, Cart, Category, Product } = require('../models');

const userData = require('./userData.json');
const cartData = require('./cartData.json');
const categoryData = require('./categoryData.json');
const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const carts = await Cart.bulkCreate(cartData, {
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData, {
    returning: true,
  }); 

  const products = await Product.bulkCreate(productData, {
    returning: true,
  }); 

  process.exit(0);
};

seedDatabase();
