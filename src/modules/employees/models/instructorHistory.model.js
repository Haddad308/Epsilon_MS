import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connection.js';
import Instructor from './instructor.model.js';
import Group from '../../groups/models/groups.model.js';

const InstructorHistory = sequelize.define('InstructorHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  instructor_start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  instructor_end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Instructor.hasMany(InstructorHistory, { foreignKey: 'instructorId' });
InstructorHistory.belongsTo(Instructor, { foreignKey: 'id' });

// Add the group relationship.
Group.hasMany(InstructorHistory, { foreignKey: 'groupId' });
InstructorHistory.belongsTo(Group, { foreignKey: 'id' });

await InstructorHistory.sync();

export default InstructorHistory;
