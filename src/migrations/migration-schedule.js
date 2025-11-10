
//  curentNumber: DataTypes.STRING,
//     maxNumber: DataTypes.STRING,
//     date: DataTypes.DATE,
//     timeType: DataTypes.STRING,
//     doctorId: DataTypes.INTEGER,
    'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedule', {
   
    
   
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      curentNumber: {
        type: Sequelize.INTEGER
      },
      maxNumber: {
        type: Sequelize.INTEGER
      },
     date: {
        type: Sequelize.DATE
      },
      timeType: {
        type: Sequelize.STRING
      },
      doctorId: {
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
    await queryInterface.dropTable('Schedule');
  }
};