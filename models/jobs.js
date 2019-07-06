"use strict";
module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define(
    "Jobs",
    {
      job_name: DataTypes.STRING,
      job_length: DataTypes.STRING,
      user_type: DataTypes.STRING,
      paid_unpaid: DataTypes.BOOLEAN,
      pay_amount: DataTypes.STRING
    },
    {}
  );
  Jobs.associate = function(models) {
    // associations can be defined here
  };
  return Jobs;
};
