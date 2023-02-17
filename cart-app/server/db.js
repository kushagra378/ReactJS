const postgres = require("postgres");
const sql = postgres(
  "postgresql://postgres:DEx1vYeDr2YK6ryM8Dra@containers-us-west-141.railway.app:5788/railway"
);

module.exports = sql;

/*
Query to create tables

CREATE TABLE ORDERS(
   ID SERIAL PRIMARY KEY NOT NULL,
   NAME TEXT NOT NULL,
   ITEMS TEXT NOT NULL,
   TOTALAMOUNT DECIMAL NOT NULL,
   ADDRESS TEXT NOT NULL,
   DATETIME TEXT
);  

CREATE TABLE MEALS(
   ID INT PRIMARY KEY NOT NULL,
   NAME TEXT NOT NULL,
   DESCRIPTION TEXT NOT NULL,
   PRICE DECIMAL NOT NULL
); 

Query to insert data into meals table

INSERT INTO MEALS (ID,NAME,DESCRIPTION,PRICE) VALUES (1, 'Sushi', 'Finest fish and veggies...', 22.99);
INSERT INTO MEALS (ID,NAME,DESCRIPTION,PRICE) VALUES (2, 'Schnitzel', 'Our German specialty!', 16.50);
INSERT INTO MEALS (ID,NAME,DESCRIPTION,PRICE) VALUES (3, 'Barbecue Burger', 'American, Raw & Meaty...', 12.99);
INSERT INTO MEALS (ID,NAME,DESCRIPTION,PRICE) VALUES (4, 'Green Bowl', 'Healthy... & Green...', 18.99);

*IMP - Add link to postgresql database

*/
