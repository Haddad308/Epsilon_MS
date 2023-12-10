import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";
import Employee from "./employees.model.js";


const Mentor = sequelize.define("Mentor", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    }
})

Employee.hasOne(Mentor, { foreignKey: "employeeId" });
Mentor.belongsTo(Employee, { foreignKey: "id" })

Mentor.sync()

export default Mentor;