import { Sequelize } from "sequelize";

const sequelize = new Sequelize('a1', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.sync({
    force: true
});

export default sequelize; 