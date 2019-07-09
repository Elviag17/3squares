"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Distributors",
      [
        {
          distribution_name: "Northgate grocers",
          distribution_address: "444 s Flower, Los Angeles, Ca 90071",
          distribution_phone: "310-555-1919",
          distribution_contact_name: "Juan Gonzalez",
          distribution_email: "jgonzales@northgate.com",
          distribution_url: "www.northgate.com",
          createdAt: new Date(),
          updateAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Distributors", [
      {
        distributor_name: "Northgate grocers"
      }
    ]);
  }
};
