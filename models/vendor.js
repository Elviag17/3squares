"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    "Vendor",
    {
      vendor_name: DataTypes.STRING,
      vendor_address: DataTypes.STRING,
      vendor_phone: DataTypes.STRING,
      vendor_contact_name: DataTypes.STRING,
      vendor_email: DataTypes.STRING,
      vend_log: DataTypes.STRING,
      vend_lat: DataTypes.STRING,
      vendor_website_url: DataTypes.STRING,
      time_for_pickup: DataTypes.STRING,
      pickup_area_name: DataTypes.STRING,
      pickup_location: DataTypes.STRING,
      distributor_only: DataTypes.BOOLEAN
    },
    {}
  );
  Vendor.associate = function(models) {
    // associations can be defined here
  };
  return Vendor;
};
