import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('a1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
