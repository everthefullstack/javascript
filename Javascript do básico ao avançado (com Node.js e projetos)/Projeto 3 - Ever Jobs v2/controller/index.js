const createDb = require("../database/createDb");

module.exports = {

  get: (req, res) => {
    createDb();
    res.status(200).send("Funcionando get index");
  }
};