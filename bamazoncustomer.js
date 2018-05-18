var mysql = require("mysql"); 
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
}); 

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

// The app should then prompt users with two messages.



// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.



