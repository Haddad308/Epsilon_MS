import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Mentor from '../../employees/models/mentor.model.js';
import Group from './groups.model.js';

const Problem = sequelize.define('Problem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
  },
});

Group.hasMany(Problem);
Problem.belongsTo(Group);

Mentor.hasMany(Problem);
Problem.belongsTo(Mentor);

await Problem.sync();

export default Problem;
