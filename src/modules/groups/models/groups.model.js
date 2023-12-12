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

Instructor.hasMany(Group, { foreignKey: 'instructorId' });
Group.belongsTo(Instructor, { foreignKey: 'id' });

Assistant.hasMany(Group, { foreignKey: 'assistantId' });
Group.belongsTo(Assistant, { foreignKey: 'id' });

Mentor.hasMany(Group, { foreignKey: 'mentorId' });
Group.belongsTo(Mentor, { foreignKey: 'id' });

await Group.sync();

export default Group;
