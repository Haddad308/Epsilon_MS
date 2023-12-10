import { Sequelize } from "sequelize";

const sequelize = new Sequelize('epsilon_ms', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default sequelize; 