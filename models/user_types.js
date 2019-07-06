'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Types = sequelize.define('User_Types', {
    Name: DataTypes.STRING,
    type_number: DataTypes.INTEGER
  }, {});
  User_Types.associate = function(models) {
    // associations can be defined here
  };
  return User_Types;
};