'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Food_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_name: {
        type: Sequelize.STRING
        allowNull: false,
      },
      feeds_how_many: {
        type: Sequelize.INTEGER
        allowNull: false,
      },
      created_date: {
        type: Sequelize.DATE
      },
      estimated_value: {
        type: Sequelize.DOUBLE
      },
      expiration_date: {
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('Food_items');
  }
};