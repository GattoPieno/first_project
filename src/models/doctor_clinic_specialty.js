'use strict';
const {
  Model
} = require('sequelize');
const clinic = require('./clinic');
const specialty = require('./specialty');
module.exports = (sequelize, DataTypes) => {
  class doctor_clinic_specialty extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  doctor_clinic_specialty.init({
   
   doctorId: DataTypes.INTEGER,
   clinicId: DataTypes.INTEGER,
   specialtyId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'doctor_clinic_specialty',
  });
  return doctor_clinic_specialty;
};