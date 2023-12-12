import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Employee from './employees.model.js';

const Assistant = sequelize.define('Assistant', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
});

Employee.hasOne(Assistant, { foreignKey: 'employeeId' });
Assistant.belongsTo(Employee, { foreignKey: 'id' });

Assistant.sync();

export default Assistant;
