'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', 
    [
      {
        name: 'Ana Yam',
        hash: 'sd5fddfd51dse5df5sdfd5fd456sd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Alonzo',
        hash: 'scjghh5tytt161gfgfg5ggf56gf5g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juan Chan',
        hash: 'h5tr45t45t5tr54tt45ty56ty6yt99',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Felipe Pacheco',
        hash: 'wew5e45ewrt65er6tr5ty566tyyt5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Antonio Sanchez',
        hash: 'sa4er4tyy5ty45ty54y6rerer9r9r9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cesar Castellanos',
        hash: 'we54t54ui5ui5y5re54ty54tr5ty54',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Antonio Hau',
        hash: '84oiui55uyu45yu5yuiopo6opp56pp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Erika Medina',
        hash: 'dffgf98r8rttr8ty98tr9rt9trrt8r',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jorge Campos',
        hash: '4sd5fd5fd56gfgf56f5fffgfd6fgg99',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Francisco Silvente',
        hash: '5d5dsdf98f89fd89df9fd8fd98fd98d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Omar Canto',
        hash: 'sd5fdf98ed89gf98fg98gfgf89gf989f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaqueline Pech',
        hash: '5opoiio6io65oiio5u6y56yt6re6re6e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'José Medina',
        hash: 'rtr8tyt8tyty8989tty98tyty89ty98y',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
