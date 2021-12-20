const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'Anfield_893', {
    host: 'localhost',
    dialect: 'mysql' 
});

module.exports = connection