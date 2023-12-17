import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Mentor from "./mentor.model.js";
import Group from "../../groups/models/groups.model.js"

const MentorHistory = sequelize.define("MentorHistory", {
    id: {
        type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    Mentor_start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Mentor_end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
});


Mentor.hasMany(MentorHistory)
MentorHistory.belongsTo(Mentor)

// Add the group relationship. 
Group.hasMany(MentorHistory)
MentorHistory.belongsTo(Group)


await MentorHistory.sync()

export default MentorHistory;