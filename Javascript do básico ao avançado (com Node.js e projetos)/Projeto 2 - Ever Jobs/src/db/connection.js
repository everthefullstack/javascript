
const Sequelize = require('sequelize');
/*
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'src/db/app.db'
});
*/

const sequelize = new Sequelize("everjobs", "giovanilima", "limagiovani", {
    host: "mysql669.umbler.com",
    dialect: "mysql",
    port: 3306
  });

module.exports = sequelize;
