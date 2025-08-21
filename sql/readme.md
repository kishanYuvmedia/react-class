The SQL IN Operator
SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');


The SQL BETWEEN Operator
SELECT * FROM Products

WHERE Price BETWEEN 10 AND 20;

NOT BETWEEN
SELECT * FROM Products

WHERE Price NOT BETWEEN 10 AND 20;

BETWEEN with IN
SELECT * FROM Products

WHERE Price BETWEEN 10 AND 20

AND CategoryID IN (1,2,3);

SQL Aliases
SELECT CustomerID AS ID

FROM Customers;

SQL UNION Example
SELECT City FROM Customers

UNION

SELECT City FROM Suppliers

ORDER BY City;

SQL UNION ALL Example
SELECT City FROM Customers

UNION ALL

SELECT City FROM Suppliers

ORDER BY City;