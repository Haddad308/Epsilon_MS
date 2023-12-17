import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Instructor from '../../employees/models/instructor.model.js';
import Assistant from '../../employees/models/assistant.model.js';
import Mentor from '../../employees/models/mentor.model.js';
import Employee from '../../employees/models/employees.model.js';

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  schedule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Instructor.hasMany(Group);
Group.belongsTo(Instructor);

Assistant.hasMany(Group);
Group.belongsTo(Assistant);

Mentor.hasMany(Group);
Group.belongsTo(Mentor);

await Group.sync();

export default Group;
