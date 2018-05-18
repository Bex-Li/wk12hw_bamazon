DROP TABLE IF EXISTS bamazon ;
CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price FLOAT(10,2) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY (item_id)

);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Apple", "IT", 1000, 50), 
("Dell", "IT", 700, 80), 
("Compaq", "Printers", 200, 30), 
("HP", "Printers", 300, 40), 
("Apple2", "IT", 2000, 50), 
("Apple3", "IT", 3000, 50), 
("Dell2", "IT", 900, 50), 
("Dell3", "IT", 1000, 50), 
("Compaq2", "Printers", 400, 20), 
("HP2", "Printers", 400, 20);