import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const AcademicExperience = sequelize.define('AcademicExperience', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  institution: { type: DataTypes.STRING, allowNull: false },
  course: { type: DataTypes.STRING, allowNull: false },
  startDate: { type: DataTypes.STRING, allowNull: true },
  endDate: { type: DataTypes.STRING, allowNull: true }
});

export default AcademicExperience;