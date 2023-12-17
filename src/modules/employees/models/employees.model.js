import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {
    //   isEmail: true,
    // },
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    // validate: {
    //   is: {
    //     args: /^(010|012|011|015)\d{8}$/,
    //     msg: 'Phone number is invalid',
    //   }
    // },
  },
});

await Employee.sync();

export default Employee;


