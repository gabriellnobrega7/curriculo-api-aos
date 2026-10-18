import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProfessionalExperience = sequelize.define('ProfessionalExperience', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  company: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  startDate: { type: DataTypes.STRING, allowNull: true },
  endDate: { type: DataTypes.STRING, allowNull: true }
});

export default ProfessionalExperience;