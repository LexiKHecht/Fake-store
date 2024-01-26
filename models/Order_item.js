const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Order_item extends Model {}

Order_item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_item',
  }
);

module.exports = Order_item;
