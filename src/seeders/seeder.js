'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'kiet91501@gmail.com',
        password: 'Doe123456',
        firstName: 'kietdev',
        lastName: 'Doe',
        address: 'Thai Ha',
        gender: true,          // true = Nam, false = Nữ
        typeRole: 'ROLE_ADMIN',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Xóa bản ghi này khi rollback
    return queryInterface.bulkDelete('Users', { email: 'kiet91501@gmail.com' }, {});
  },
};
