import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Group from "./groups.model.js";

const QualityRecord = sequelize.define("QualityRecord", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    metric_1: {
        type: DataTypes.INTEGER,
    },
    metric_2: {
        type: DataTypes.INTEGER,
    },
    metric_3: {
        type: DataTypes.INTEGER,
    },
    week: {
        type: DataTypes.DATE,
    }
})

Group.hasMany(QualityRecord,{foreignKey:"groupId"}); 
QualityRecord.belongsTo(Group,{foreignKey: "id"}); 

QualityRecord.sync()

export default QualityRecord; 