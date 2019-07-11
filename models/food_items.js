'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food_items = sequelize.define('Food_items', {
    item_name: DataTypes.STRING,
    feeds_how_many: DataTypes.INTEGER,
    created_date: DataTypes.STRING,
    estimated_value: DataTypes.DOUBLE,
    expiration_date: DataTypes.STRING
  }, {});
  Food_items.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Vendor, {
      foreignKey: {
        allowNull: false
      }
  });
  return Food_items;
};