// Import models
const User = require('./User.js');
const Order = require('./Order');
const Order_item = require('./Order_item');
const Product = require('./Product');

User.hasOne(Order, {
  foreignKey: 'order_id',
});

Order.belongsTo(User, {
  foreignKey: 'order_id',
});

Order.hasMany(Order_item, {
  foreignKey: 'order_item_id',
});

Order_item.belongsTo(Order, {
  foreignKey: 'order_item_id',
});

Product.belongsTo(Order_item, {
  foreignKey: 'product_id',
});

Order_item.hasOne(Product, {
  foreignKey: 'product_id',
});

module.exports = { User, Order, Order_item, Product };
