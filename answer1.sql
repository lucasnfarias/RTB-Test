-- using Postgres SQL
DROP TABLE IF EXISTS orders;
-- creating table with examples
CREATE TABLE orders (orderId SERIAL PRIMARY KEY,
                    product TEXT NOT NULL,
                    seller TEXT NOT NULL,
                    country TEXT NOT NULL,
                    price INT NOT NULL);
-- populating table with orders.json data
INSERT INTO orders (product, seller, country, price) 
VALUES ('Laptop #1', 'Seller #1', 'BRA', 1000),
 ('Laptop #2', 'Seller #2', 'ARG', 1250),
 ('Laptop #3', 'Seller #3', 'ARG', 1900),
 ('Printer #1', 'Seller #1', 'MEX', 199),
 ('Smartphone #1', 'Seller #2', 'BRA', 999),
 ('Printer #2', 'Seller #3', 'BRA', 399),
 ('Smartphone #2', 'Seller #1', 'ARG', 1499),
 ('Laptop #3', 'Seller #2', 'ARG', 1900),
 ('Smartphone #1', 'Seller #3', 'MEX', 999),
 ('Printer #2', 'Seller #1', 'BRA', 399),
 ('Printer #3', 'Seller #2', 'ARG', 899),
 ('Laptop #2', 'Seller #3', 'MEX', 1250),
 ('Smartphone #1', 'Seller #1', 'BRA', 999),
 ('Printer #1', 'Seller #2', 'BRA', 199),
 ('Smartphone #3', 'Seller #3', 'ARG', 2399),
 ('Laptop #3', 'Seller #1', 'MEX', 1900),
 ('Smartphone #1', 'Seller #2', 'BRA', 999),
 ('Laptop #3', 'Seller #3', 'BRA', 1900),
 ('Smartphone #3', 'Seller #1', 'BRA', 2399),
 ('Printer #1', 'Seller #2', 'ARG', 199),
 ('Smartphone #2', 'Seller #3', 'MEX', 1499),
 ('Laptop #3', 'Seller #1', 'ARG', 1900),
 ('Printer #1', 'Seller #2', 'MEX', 199),
 ('Smartphone #3', 'Seller #3', 'BRA', 2399),
 ('Laptop #3', 'Seller #1', 'BRA', 1900);

-- See full table
SELECT * FROM orders;
-- See products stats per country (stores_qty, orders_qty, orders_total)
SELECT product, country, count(DISTINCT (seller)) AS stores_qty, COUNT(DISTINCT (orderId)) AS orders_qty, SUM(price) AS orders_total from orders GROUP BY product, country;