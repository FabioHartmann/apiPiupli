const Sequelize = require('sequelize');
const { connection } = require('../config/database');
const { Model } = Sequelize;

class PersonModel extends Model {}
PersonModel.init({
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  foto: {
    type: Sequelize.STRING,
  },
}, {
  sequelize: connection,
  modelName: 'person',
  timestamps: false,
  tableName:'tb_person',
});

module.exports = PersonModel;