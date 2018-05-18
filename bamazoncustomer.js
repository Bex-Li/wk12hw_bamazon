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

// Then create a Node application called bamazonCustomer.js. 
// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.



