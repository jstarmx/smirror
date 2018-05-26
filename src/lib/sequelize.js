import Sequelize from 'sequelize';
import winston from 'winston';

const sequelize = new Sequelize('smirror', 'root', null, {
  host: '127.0.0.1',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() =>
    winston.info('💽  Connection to mysql database established successfully.'),
  )
  .catch(err => winston.error('Unable to connect to mysql database:', err));

export default sequelize;
