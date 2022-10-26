const Sequelize = require('sequelize');
const sequelize = new Sequelize('web2', 'root', '', {dialect:'mysql', host:'localhost', port:3306})

module.exports = {sequelize}
