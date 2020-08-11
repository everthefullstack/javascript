const Sequelize = require('sequelize');

module.exports  = new Sequelize({
    dialect:'sqlite',
    storage: 'database/job.db'
});
/*
module.exports = new Sequelize("app_db", "root", "ulbra@@2020!!", {
    host: "34.95.156.112",
    dialect: "mysql",
    port: 3306
});*/
