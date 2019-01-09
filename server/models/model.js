
const Sequelize = require('sequelize');
const sequelize = new Sequelize('testdb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
 

  // SQLite only
  storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const Data = sequelize.define('data', {
  input: Sequelize.STRING,
  output: Sequelize.STRING
});
const Log = sequelize.define('log', {
  time: Sequelize.DATE,
  loginfo: Sequelize.STRING
});

sequelize.sync()
  .then(() => console.log('synced'));

module.exports = {Data, Log};
  