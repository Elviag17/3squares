'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define('Jobs', {
    job_name: DataTypes.STRING,
    job_length: DataTypes.STRING,
    paid_unpaid: DataTypes.STRING,
    pay_amount: DataTypes.STRING
  }, {});
  Jobs.associate = function(models) {
    // associations can be defined here
  };
  return Jobs;
};