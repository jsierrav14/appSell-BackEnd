var Sequelize =require("sequelize");
var conexion = require("../connect/conexion.js");


var users = sequelize.define('users',{
    id:Sequelize.STRING,
    name: Sequelize.STRING
})