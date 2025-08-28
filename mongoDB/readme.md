MongoDB Introduction – First Class
1. What is a Database?
A Database is a collection of data organized so it can be easily accessed, managed, and updated.

SQL Databases → Store data in tables (rows & columns).

NoSQL Databases (like MongoDB) → Store data in documents (JSON-like).

2. SQL vs NoSQL (MongoDB)
Feature	SQL Database (MySQL, PostgreSQL, Oracle)	NoSQL Database (MongoDB)
Data Model	Tables (rows & columns)	Collections (documents in JSON/BSON)
Schema	Fixed schema → must define columns in advance	Flexible schema → documents can have different fields
Relationships	Uses Joins (foreign keys)	Uses Embedded Documents & References
Scalability	Vertical Scaling (increase server power)	Horizontal Scaling (add more servers / sharding)
Query Language	SQL (Structured Query Language)	MongoDB Query Language (MQL – JSON based)
Use Cases	Banking, ERP, strong consistency needed	Big Data, IoT, eCommerce, fast iteration, scalability
3. MongoDB Basics
MongoDB is an open-source NoSQL database that stores data as documents.

Database → Holds collections

Collection → Holds documents

Document → JSON-like data

🔹 Example:

SQL Table (Users):

id	name	age	city
1	Ramesh	25	Delhi
2	Anita	28	Mumbai
MongoDB Document (Users Collection):

{
  "_id": 1,
  "name": "Ramesh",
  "age": 25,
  "city": "Delhi"
}
{
  "_id": 2,
  "name": "Anita",
  "age": 28,
  "city": "Mumbai"
}
4. Advantages of MongoDB
✅ Schema-less → Flexible

✅ High Performance & Scalability

✅ Stores hierarchical (nested) data easily

✅ JSON-like format is developer-friendly

✅ Widely used in MERN / MEAN stack

5. When to use SQL vs MongoDB
SQL → When data is structured, requires ACID transactions, complex joins.

MongoDB → When data is unstructured / semi-structured, requires fast development, scalability, and flexibility.

Perfect 👍 After this Introduction Class, the next class should move to hands-on MongoDB basics so learners can start working directly with the database.

MongoDB – Class 2: Installation & Basic Commands
1. Install MongoDB
Options:

MongoDB Community Edition (local installation)

MongoDB Atlas (Cloud) → Free cluster available

MongoDB Compass → GUI tool for easy management

2. MongoDB Structure Recap
Database → Container of collections

Collection → Container of documents (like tables in SQL)

Document → JSON-like record

3. MongoDB Shell / Command Basics
1️⃣ Create / Show Databases
show dbs
use mydb
2️⃣ Create / Show Collections
db.createCollection("users")
show collections
3️⃣ Insert Documents
db.users.insertOne({ name: "Ramesh", age: 25, city: "Delhi" })
db.users.insertMany([
  { name: "Anita", age: 28, city: "Mumbai" },
  { name: "Vikas", age: 30, city: "Jaipur" }
])
4️⃣ Find Documents
db.users.find()
db.users.find({ city: "Delhi" })
db.users.find({ age: { $gt: 25 } })
5️⃣ Update Documents
db.users.updateOne({ name: "Ramesh" }, { $set: { age: 26 } })
6️⃣ Delete Documents
db.users.deleteOne({ name: "Vikas" })
db.users.deleteMany({ city: "Mumbai" })
4. SQL vs MongoDB Queries (Examples)
Task	SQL	MongoDB
Select all users	SELECT * FROM users;	db.users.find()
Insert new user	INSERT INTO users VALUES (1, 'Ramesh', 25, 'Delhi');	db.users.insertOne({name:"Ramesh", age:25, city:"Delhi"})
Update age	UPDATE users SET age=26 WHERE name='Ramesh';	db.users.updateOne({name:"Ramesh"}, {$set:{age:26}})
Delete user	DELETE FROM users WHERE name='Vikas';	db.users.deleteOne({name:"Vikas"})
5. Assignment / Practice
✅ Install MongoDB (local or Atlas)

✅ Create a database school

✅ Create a collection students

✅ Insert at least 5 student records (name, class, marks, city)

✅ Query students with marks > 60

✅ Update a student’s city

✅ Delete a student record

👉 By end of Class 2, students will be able to create databases, insert, query, update, and delete data in MongoDB.

Would you like me to prepare Class 3 (Advanced Queries, Indexing, Relations in MongoDB) as well?