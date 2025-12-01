const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "feedback",
    port:3307
}); 


module.exports=conn;