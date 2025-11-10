'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shcedule extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  shcedule.init({
    
    curentNumber: DataTypes.INTEGER,
    maxNumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    
   
  }, {
    sequelize,
    modelName: 'shcedule',
  });
  return shcedule;
};