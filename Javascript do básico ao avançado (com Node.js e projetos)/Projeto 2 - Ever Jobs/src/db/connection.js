
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'src/db/app.db'
});
/*y

const sequelize = new Sequelize("app_db", "root", "ulbra@@2020!!", {
    host: "34.95.156.112",
    dialect: "mysql",
    port: 3306
  });
*/
module.exports = sequelize;
