import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('epsilon', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});


export default sequelize;
