import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Assistant from "./assistant.model.js";
import Group from "../../groups/models/groups.model.js";


const AssistantHistory = sequelize.define("AssistantHistory", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
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


Assistant.hasMany(AssistantHistory, { foreignKey: "AssistantId" })
AssistantHistory.belongsTo(Assistant, { foreignKey: "id" })

// Add the group relationship. 
Group.hasMany(AssistantHistory, { foreignKey: "groupId" })
AssistantHistory.belongsTo(Group, { foreignKey: "id" })


AssistantHistory.sync()

export default AssistantHistory;