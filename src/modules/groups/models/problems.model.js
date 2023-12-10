import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Mentor from "../../employees/models/mentor.model.js";
import Group from "./groups.model.js";

const Problem = sequelize.define("Problem", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING
    }
})


Group.hasMany(Problem, { foreignKey: "groupId" });
Problem.belongsTo(Group, { foreignKey: "id" });

Mentor.hasMany(Problem, { foreignKey: "mentorId" });
Problem.belongsTo(Mentor, { foreignKey: "id" });

Problem.sync()

export default Problem; 