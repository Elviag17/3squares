// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require("mysql2");
require("dotenv").config();

//Connection to heroku Jawsdb
if (process.env.JAWSDB_URL) {
  RTCPeerConnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.LOCALDB,
    database: "three_squares"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.connect();
module.exports = connection;

// Exports the connection for other files to use
module.exports = sequelize;
