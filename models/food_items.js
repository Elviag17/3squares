'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food_items = sequelize.define('Food_items', {
    item_name: DataTypes.STRING,
    feeds_how_many: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    estimated_value: DataTypes.DOUBLE,
    expiration_date: DataTypes.DATEONLY
  }, {});
  Food_items.associate = function(models) {
    // associations can be defined here
  };
  return Food_items;
};