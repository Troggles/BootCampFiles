CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('American Crew Shampoo', 'Cosmetics', 5.75, 500),
		('American Crew Conditioner', 'Cosmetics', 6.25, 627),
		('Hefty Trash Bags', 'Grocery', 5.99, 300),
		('Super Thick Towels', 'Grocery', 4.25, 400),
		('Honey Crisp Apples', 'Produce', 0.35, 800),
		('Bannana', 'Produce', 0.20, 10000),
		('Honest Green Tea', 'Grocery', 4.45, 267),
		('Kemps Whole Milk', 'Grocery', 4.50, 200),
		('Ducky Zero Keyboard', 'Electronics', 100.00, 476),
		('Charmin Toiler Paper', 'Grocery', 12.99, 575),
		('ASUS 24 Inch Monitor', 'Electronics', 200.00, 423),
		('Yoga Mat', 'Sports', 45.00, 150),
		('55lb Kettle bell', 'Sports', 125.00, 89),
		('Plain White Shirt', 'Clothing', 5.55, 120),
		('Champion Shorts', 'Clothing', 17.88, 250),
		('Crave Cat Food', 'Pet', 7.25, 157),
		('Friskies Wet Cat Food', 'Pet', 12.50, 163),
		('Head Ache Be Gone', 'Pharmacy', 4.95, 389),
		('Adhesive Strips', 'Pharmacy', 3.25, 550),
		('Chunky Monkey Ice Cream', 'Grocery', 3.25, 432);
