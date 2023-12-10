import { DataTypes } from "sequelize";
import sequelize from "../../../db/connection.js";


const Employee = sequelize.define("Employee", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        validate: {
            is: /^(010|012|011|015)\d{8}$/
        }
    }
})

Employee.sync()

export default Employee; 