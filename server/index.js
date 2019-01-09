var Hapi =  require('hapi');
var getData = require('./controllers/dataController')
var server  = Hapi.Server({
    host: 'localhost',
    port: '3001',
})
server.route({
    config:{
        cors:{
            origin:['*']
        }
    },
    path: '/',
    method:'POST',
    handler:getData
})
server.start();
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('testdb', 'root', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
 

//   // SQLite only
//   storage: 'path/to/database.sqlite',

//   // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//   operatorsAliases: false
// });

// const Data = sequelize.define('data', {
//   input: Sequelize.STRING,
//   output: Sequelize.STRING
// });

// sequelize.sync()
//   .then(() => Data.create({
//     input: 'Hello!',
//     output: 'World!'
//   }))
//   .then(data => {
//     console.log(data.toJSON());
//   });