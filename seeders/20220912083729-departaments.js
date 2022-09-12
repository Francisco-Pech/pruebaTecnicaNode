'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Departments', 
    [
      {
        name: 'RH',
        hash: 'fd1s515df1ve1dv1fd551vf56fd16',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Contabilidad',
        hash:'1d6fs61cd1fvf6d51vfd651vvfd615',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Operaciones',
        hash: 'hnh1g5h51th4tr5fd5s15sd5sd15e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ventas',
        hash: 'sDCwd4Eewd4f5d45d4fd4dffd4fd54',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Almacén',
        hash: 'qw4e4ew45asdsds45dsdssd54sds14',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Departments', null, {});
  }
};
