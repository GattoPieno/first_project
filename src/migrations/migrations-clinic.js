// email: DataTypes.STRING,
//    firstName: DataTypes.STRING,
//    lastName: DataTypes.STRING,
//    address: DataTypes.DATE,
//    gender: DataTypes.BOOLEAN,
//    roleid: DataTypes.STRING,

    // ID: DataTypes.INTEGER,
    // curentNumber: DataTypes.STRING,
    // maxNumber: DataTypes.STRING,
    // date: DataTypes.date,
    // timeType: DataTypes.date,
    'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clinics', {
   
    
   
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
       address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clinics');
  }
};