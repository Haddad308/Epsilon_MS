import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Employee from './employees.model.js';

const Assistant = sequelize.define('Assistant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

Employee.hasOne(Assistant);
Assistant.belongsTo(Employee);

await Assistant.sync();

export default Assistant;
