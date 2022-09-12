'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('EmployeeByDepartaments', 
    [
      {
        companyId: 10,
        departamentId: 1,
        employeeId: 1,
        antiquity: 2,
        hash: 'fdf7d7fff78gf784g884g9gf5gf5gfgf2gf29gf298gf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 10,
        departamentId: 1,
        employeeId: 2,
        antiquity: 1.5,
        hash: 'drttrty8tyyt5y9y59y5ytty5tyy9t5ty9ty59ty59ty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 10,
        departamentId: 1,
        employeeId: 3,
        antiquity: 4,
        hash: 'e7e4eer5er5r9r59rt52tttr2t62ttr2tr6rt9tr2t9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 10,
        departamentId: 2,
        employeeId: 4,
        antiquity: 1,
        hash: '8tr59t5t92t719t2t168859tr589r285985tr5tr56',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        companyId: 10,
        departamentId: 2,
        employeeId: 5,
        antiquity: 1,
        hash: 'eer64er5r55erre89r2r9rt98tr895tr259tr59tt8888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 11,
        departamentId: 1,
        employeeId: 6,
        antiquity: 3,
        hash: 'er4ERrt5r15rt1tr49r6t529t9t59t99trt9tt2t29t478',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 11,
        departamentId: 1,
        employeeId: 7,
        antiquity: 1,
        hash: '4898tr59rtr59259tr96r858f5gf5fd5ddtyutrtyuyuyu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 11,
        departamentId: 3,
        employeeId: 8,
        antiquity: 6,
        hash: 'er6ty6trewertyr5esd6fgb5426fdcv5fgd6sf5b4g5f6d5f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 11,
        departamentId: 3,
        employeeId: 9,
        antiquity: 4.5,
        hash: 'we5rt6e2ds5fv5f6er5dfb5fer2df4re5wdf4fe5dfer4d5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 12,
        departamentId: 4,
        employeeId: 10,
        antiquity: 1,
        hash: '84tre8fdg7tr8e5d2f4vbf5df4vd2s51f4fd521f4vfds',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 12,
        departamentId: 4,
        employeeId: 11,
        antiquity: 1.5,
        hash: '9erwdf5g85er96ds2f1vfd251c5vfdcv44fd58c4v48fd5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 12,
        departamentId: 5,
        employeeId: 12,
        antiquity: 0.5,
        hash: 'oiuytr1e1gfh45fd5fv51f4d2s5261v4f1d2s154CV1c',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 12,
        departamentId: 5,
        employeeId: 13,
        antiquity: 4,
        hash: 'fd45ed545865665fgdf556dfv8cv48v49vc4cv988vcv8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('EmployeeByDepartaments', null, {});
  }
};
