import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Employee from './employees.model.js';

const Instructor = sequelize.define('Instructor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

Employee.hasOne(Instructor, { foreignKey: 'employeeId' });
Instructor.belongsTo(Employee, { foreignKey: 'id' });

await Instructor.sync();

export default Instructor;
