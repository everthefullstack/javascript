const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'src/db/app.db'
});

module.exports = sequelize;