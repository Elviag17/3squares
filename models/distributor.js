'use strict';
module.exports = (sequelize, DataTypes) => {
  const Distributor = sequelize.define('Distributor', {
    distribution_name: DataTypes.STRING,
    distribution_address: DataTypes.STRING,
    distribution_phone: DataTypes.STRING,
    distribution_contact_name: DataTypes.STRING,
    dist_long: DataTypes.STRING,
    dist_lat: DataTypes.STRING,
    distribution_email: DataTypes.STRING,
    distribution_url: DataTypes.STRING,
    distributor_logo_image: DataTypes.STRING
  }, {});
  Distributor.associate = function(models) {
    // associations can be defined here
  };
  return Distributor;
};