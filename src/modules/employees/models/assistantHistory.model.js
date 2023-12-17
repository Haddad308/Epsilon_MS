import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Assistant from "./assistant.model.js";
import Group from "../../groups/models/groups.model.js";


const AssistantHistory = sequelize.define("AssistantHistory", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Assistant_start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Assistant_end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
});


Assistant.hasMany(AssistantHistory)
AssistantHistory.belongsTo(Assistant)

// Add the group relationship. 
Group.hasMany(AssistantHistory)
AssistantHistory.belongsTo(Group)


await AssistantHistory.sync()

export default AssistantHistory;