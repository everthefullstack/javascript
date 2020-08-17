const Sequelize = require('sequelize');

module.exports = new Sequelize('everjobs', 'giovanilima', 'limagiovani', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql'
});
/*
module.exports = new Sequelize({
    dialect:'sqlite',
    storage: 'database/app.db'
});
*/