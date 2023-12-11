import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Mentor from "./mentor.model.js";
import Group from "../../groups/models/groups.model.js"

const MentorHistory = sequelize.define("MentorHistory", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
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


Mentor.hasMany(MentorHistory, { foreignKey: "MentorId" })
MentorHistory.belongsTo(Mentor, { foreignKey: "id" })

// Add the group relationship. 
Group.hasMany(MentorHistory, { foreignKey: "groupId" })
MentorHistory.belongsTo(Group, { foreignKey: "id" })


MentorHistory.sync()

export default MentorHistory;