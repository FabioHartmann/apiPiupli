const Sequelize = require('sequelize');
const logger = require('../config/logger');

const sequelize = new Sequelize('fabio', 'root', 'soft123', {
  host: '192.168.3.156',
  port: '3306',
  dialect: 'mysql',
});

const initDB = () => new Promise((resolve, reject) => {
  sequelize
    .authenticate()
    .then(() => {
      logger.info('Connection has been established successfully.');
      resolve();
    })
    .catch((err) => {
      logger.error('Unable to connect to the database:', err);
      reject(err);
    });
});

module.exports.connection = sequelize;
module.exports.initDB = initDB;
