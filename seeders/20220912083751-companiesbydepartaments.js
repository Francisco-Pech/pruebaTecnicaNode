'use strict';

const department = require("../models/department");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CompanyByDepartaments', 
    [
      {
        companyId: 10,
        departamentId: 1,
        hash: 'd66ddf56d6fgfer8fg98f998gf98gf71f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 10,
        departamentId: 2,
        hash: 'qw55325636556eer65er6tr6trtytrgf22f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 11,
        departamentId: 1,
        hash: 'dffd6fgff9gf98gf98fg56gf56gf56g56f6g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 11,
        departamentId: 3,
        hash: 'q9wqw9we98er89ty9y9u8yu98tr98ew98op9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 12,
        departamentId: 4,
        hash: 'qwweee56as6asxcxz65c6v6vb5n5698g89b2c',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 12,
        departamentId: 5,
        hash: 'qw32w323w2we2ew22e3242fd4fdf54f4545gf5',
        createdAt: new Date(),
        updatedAt: new Date()
      },     
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('CompanyByDepartaments', null, {});
  }
};
