
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'src/db/app.db'
});

/*
const sequelize = new Sequelize('base','user','senha!!',{
    host: 'ip',
    dialect: 'mysql'
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
*/
module.exports = sequelize;



