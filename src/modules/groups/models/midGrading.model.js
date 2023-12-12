import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Group from "./groups.model.js";

const MidGrading = sequelize.define("MidGrading", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mark_1: {
        type: DataTypes.FLOAT
    }
    ,
    mark_2: {
        type: DataTypes.FLOAT
    }
    ,
    mark_3: {
        type: DataTypes.FLOAT
    }
})


Group.hasMany(MidGrading, { foreignKey: "groupId" });
MidGrading.belongsTo(Group, { foreignKey: "id" });

await MidGrading.sync()

export default MidGrading; 