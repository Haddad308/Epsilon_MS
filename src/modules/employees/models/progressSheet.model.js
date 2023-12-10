import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Employee from "./employees.model.js";
import Group from "../../groups/models/groups.model.js"

const ProgressSheet = sequelize.define("progressSheet", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    SessionTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    zoomLink: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Employee.hasOne(ProgressSheet, { foreignKey: "employeeId" });
ProgressSheet.belongsTo(Employee, {foreignKey: "id"})

// Add the group relationship. 
Group.hasMany(ProgressSheet,{foreignKey:"groupId"})
ProgressSheet.belongsTo(Group,{foreignKey:"id"})

ProgressSheet.sync();

export default ProgressSheet; 