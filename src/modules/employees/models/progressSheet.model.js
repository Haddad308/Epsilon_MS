import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Employee from "./employees.model.js";
import Group from "../../groups/models/groups.model.js"

const ProgressSheet = sequelize.define("progressSheet", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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


Employee.hasOne(ProgressSheet);
ProgressSheet.belongsTo(Employee)

// Add the group relationship. 
Group.hasMany(ProgressSheet)
ProgressSheet.belongsTo(Group)

await ProgressSheet.sync();

export default ProgressSheet; 