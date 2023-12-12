import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Employee from './employees.model.js';

const Instructor = sequelize.define('Instructor', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
});

Employee.hasOne(Instructor, { foreignKey: 'employeeId' });
Instructor.belongsTo(Employee, { foreignKey: 'id' });

Instructor.sync();

export default Instructor;
