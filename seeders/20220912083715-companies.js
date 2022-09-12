'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Companies', 
    [
      {
        name: 'A',
        hash: 'fa6ab3a47e9bfdf4305f9d7793f0f532',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'B',
        hash:'b28fed1b92ecfa1202271931c556125f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'C',
        hash: 'd944a1cf1250c11b6be52b7ffb96fe6e',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
