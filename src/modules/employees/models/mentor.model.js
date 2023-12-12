import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Employee from './employees.model.js';

const Mentor = sequelize.define('Mentor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

Employee.hasOne(Mentor, { foreignKey: 'employeeId' });
Mentor.belongsTo(Employee, { foreignKey: 'id' });

await Mentor.sync();

export default Mentor;
