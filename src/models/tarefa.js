
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Tarefa = sequelize.define('Tarefa', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

export default Tarefa;
