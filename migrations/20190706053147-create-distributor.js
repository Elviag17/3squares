'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Distributors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ditribution_name: {
        type: Sequelize.STRING
      },
      distribution_address: {
        type: Sequelize.STRING
      },
      distribution_phone: {
        type: Sequelize.STRING
      },
      distribution_contact_name: {
        type: Sequelize.STRING
      },
      distribution_email: {
        type: Sequelize.STRING
      },
      distribution_url: {
        type: Sequelize.STRING
      },
      distributor_logo_image: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Distributors');
  }
};