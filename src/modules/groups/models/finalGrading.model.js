import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Group from "./groups.model.js";


const FinalGrading = sequelize.define("FinalGrading", {
    id: {
        type: DataTypes.UUID,
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


Group.hasMany(FinalGrading, { foreignKey: "groupId" });
FinalGrading.belongsTo(Group, { foreignKey: "id" });

FinalGrading.sync()

export default FinalGrading; 