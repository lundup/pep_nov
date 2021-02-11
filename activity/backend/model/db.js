const express=require("express");
const mysql= require("mysql");
const { HOST, DB_NAME, PASSWORD, USER } = require("../config/secret");
                                      



const connection = mysql.createConnection({
  host     : HOST,
  user     : USER,
  password : PASSWORD,
  database : DB_NAME
});
 
connection.connect();
 
// connection.query('DESC user_table', function (error, data) {
//   if (error) throw error;
//   console.log(data);
// });
 
// connection.end();

console.log("mysql connected")

module.exports=connection