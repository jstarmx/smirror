import Sequelize from 'sequelize';

import sequelize from '../lib/sequelize';

const Message = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  due: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});

export default Message;
