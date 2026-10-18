import sequelize from '../config/database.js';
import User from './User.js';
import AcademicExperience from './AcademicExperience.js';
import ProfessionalExperience from './ProfessionalExperience.js';
import Project from './Project.js';

// Definindo as relações (Associations)
User.hasMany(AcademicExperience, { foreignKey: 'UserId', onDelete: 'CASCADE' });
AcademicExperience.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(ProfessionalExperience, { foreignKey: 'UserId', onDelete: 'CASCADE' });
ProfessionalExperience.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Project, { foreignKey: 'UserId', onDelete: 'CASCADE' });
Project.belongsTo(User, { foreignKey: 'UserId' });

const db = {
  sequelize,
  User,
  AcademicExperience,
  ProfessionalExperience,
  Project
};

export default db;