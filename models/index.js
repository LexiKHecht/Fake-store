// Import models
const User = require('./User');
const Product = require('./Product');
const Cart = require('./Cart');
const Category = require('./Category');


// Table Relationships

// Cart belongs to User
Cart.belongsTo(User, {
    foreignKey: 'user_id',
});
// User has one Cart
User.hasOne(Cart, {
    foreignKey: 'user_id',
});

// Product belongs to Cart
Product.belongsTo(Cart, {
    foreignKey: 'cart_id',
});
// Cart has many Products
Cart.hasMany(Product, {
    foreignKey: 'cart_id',
});

// Product belongs to Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});
// Category has many Product
Category.hasMany(Product, {
    foreignKey: 'category_id',
});


module.exports = {
    User,
    Product,
    Cart,
    Category,
};
