'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendor_name: {
        type: Sequelize.STRING
        allowNull: false,
      },
      vendor_address: {
        type: Sequelize.STRING
        allowNull: false,
      },
      vendor_phone: {
        type: Sequelize.STRING
        allowNull: false,
      },
      vendor_contact_name: {
        type: Sequelize.STRING
        allowNull: false,
      },
      vendor_email: {
        type: Sequelize.STRING
        allowNull: false,
      },
      vendor_website_url: {
        type: Sequelize.STRING
      },
      time_for_pickup: {
        type: Sequelize.STRING
      },
      pickup_area_name: {
        type: Sequelize.STRING
      },
      pickup_location: {
        type: Sequelize.STRING
      },
      distributor_only: {
        type: Sequelize.BOOLEAN
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vendors');
  }
};