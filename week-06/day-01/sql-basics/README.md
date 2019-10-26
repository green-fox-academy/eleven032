# SQL Basics

## Materials & Resources

### Requirements

- Install [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- Installation guide for:
  - [Windows](https://www.youtube.com/watch?v=u96rVINbAUI)
  - [Mac](https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e)
  - [Linux](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/#apt-repo-fresh-install)
- (Optional) Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

> Feel free to use `password` as password to your database!

After installation open your terminal and try to execute `mysql` if the command
was not found add the binaries to your PATH. (or contact your mentor)

### Materials
| Material                                                                                       |     Time |
|:-----------------------------------------------------------------------------------------------|---------:|
| [What is Database & SQL?](https://www.youtube.com/watch?v=FR4QIeZaPeM)                         |     6:19 |
| [Understanding database concepts and terminology](https://www.youtube.com/watch?v=CdmK125jI8s) |     7:26 |
| [Relational Database Concepts](https://www.youtube.com/watch?v=NvrpuBAMddw)                    |     5:24 |
| [MySQL Tutorial (Bana)](https://www.youtube.com/watch?v=yPu6qV5byu4)                           |    41:09 |
| [Thrilling Marble Race](https://www.youtube.com/watch?v=h7mhFTAJvxA)                           |     2:18 |
| Complete [Exercise 0](#exercise-0)                                                             | exercise |

#### Optional
| Material                                                                                                                                           |    Time |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|--------:|
| [Data modelling - an introduction](https://www.youtube.com/watch?v=tR_rOJPiEXc)                                                                    |   55:21 |
| [How Data is Organized and Normalization](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/) | reading |

### Material review
- What is data?
  <!--
    In simple words data can be facts related to any object in consideration.
  -->
- What is database?
  <!--
    Database is a systematic collection of data. Databases support storage and
    manipulation of data.
  -->
- What is Structured Query Language?
  <!--
     The standard language for dealing with Relational Databases.
  -->
- What is a relational database?
  <!--
    It defines database relationships in form of tables, also known as
    relations. Relational DBMS usually have pre-defined data types that they can
    support.
    You can mention the other type of DBMS here.
  -->
- What is a table?
  <!--
    A table is a collection of related data held in a structured format within
    a database.
  -->
- What is a column?
  <!--
    In a relational database, a column is a set of data values of a particular
    simple type, one value for each row of the database.
  -->
- What kind of data types can we store in a column?
  <!--
    Numeric, string, date and time
  -->
- What kind of table relations exists?
  <!--
    One-to-one
    One-to-many, many-to-one
    Many-to-many
  -->
- What is a primary key? Why is it important?
  <!--
    The PRIMARY KEY constraint uniquely identifies each record in a table.
    Primary keys must contain UNIQUE values, and cannot contain NULL values.
    A table can have only one primary key, which may consist of single or multiple fields.
  -->
- What is a foreign key? Why is it important?
  <!--
    A FOREIGN KEY is a key used to link two tables together.
    A FOREIGN KEY is a field (or collection of fields) in one table that refers
    to the PRIMARY KEY in another table.
  -->
- What does CRUD mean?
  <!--
    Create
    Read or Retrieve
    Update
    Delete
  -->
- How can we create a database?
  <!--
    CREATE DATABASE database;
  -->
- How can we switch between databases?
  <!--
    USE database;
  -->
- How can we create a table?
  <!--
    CREATE TABLE table (colum1 type, column2 type);
  -->
- How can we check the existing tables?
  <!--
    SHOW TABLES;
  -->
- How can we check the current table's properties?
  <!--
    DESCRIBE table;
  -->
- How can we retrieve all data from a table?
  <!--
    SELECT * FROM table;
  -->
- How can we retrieve all data but only specific columns from a table?
  <!--
    SELECT column1, column2 FROM table;
  -->
- How can we retrieve specific data from a table?
  <!--
    SELECT * FROM table WHERE column1=value;
  -->
- What kind of operators do we have?
  <!--
    =, >, <, <>, LIKE, BETWEEN ... AND ..., LIKE, NOT, IS NULL
    https://dev.mysql.com/doc/refman/8.0/en/non-typed-operators.html
  -->
- How can we add data to a table?
  <!--
    INSERT INTO table (column1, column2) VALUES (value1, value2), (value1, value2);
  -->
- How can we modify data in a table?
  <!--
    UPDATE table SET column1=value1, column2=value2;
  -->
- How can we remove data from a table?
  <!--
    DELETE FROM table;
  -->
- How can you select only the different values?
  <!--
    SELECT DISTINCT * FROM table;
  -->
- How can you manipulate the order of the result?
  <!--
    SELECT * FROM table ORDER BY column1;
  -->
- What are the common aggregate functions?
  <!--
    COUNT
    AVG
    MIN
    MAX
  -->
- How can we select from multiple tables?
  <!--
    SELECT * FROM table1 LEFT JOIN table2 ON table1.column1 == table2.column1;
    SELECT * FROM table1 INNER JOIN table2 ON table1.column1 == table2.column1;
  -->

## Workshop

### Exercise 0
- [SQLBolt - Introduction to SQL](https://sqlbolt.com/lesson/introduction)
- [SQLBolt - SQL Lesson 1: SELECT queries 101](https://sqlbolt.com/lesson/select_queries_introduction)
- [SQLBolt - SQL Lesson 2: Queries with constraints (Pt. 1)](https://sqlbolt.com/lesson/select_queries_with_constraints)
- [SQLBolt - SQL Lesson 3: Queries with constraints (Pt. 2)](https://sqlbolt.com/lesson/select_queries_with_constraints_pt_2)
- [SQLBolt - SQL Lesson 4: Filtering and sorting Query results](https://sqlbolt.com/lesson/filtering_sorting_query_results)
- [SQLBolt - SQL Lesson 13: Inserting rows](https://sqlbolt.com/lesson/inserting_rows)
- [SQLBolt - SQL Lesson 14: Updating rows](https://sqlbolt.com/lesson/updating_rows)
- [SQLBolt - SQL Lesson 15: Deleting rows](https://sqlbolt.com/lesson/deleting_rows)
- [SQLBolt - SQL Lesson 16: Creating tables](https://sqlbolt.com/lesson/creating_tables)

### Exercise 1
- [SQL Movie-Rating Query Exercises](https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/courseware/ch-sql/seq-exercise-sql_movie_query_core/)
  - Q1, Q2, Q3, Q4, Q5
- [SQL Movie-Rating Query Exercises Extras](https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/courseware/ch-sql/seq-exercise-sql_movie_query_extra/)
  - Q1, Q2

### Exercise 2
- Create a database your previous Todo application
  - How many tables are needed?
  - Which data do we need to store?
  - What will be the data type?
- Add some sample data
- Try out all the CRUD operations

Save your solution to a `.sql` file. It should look something like the example
below.

```sql
CREATE TABLE apprentices (
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

INSERT INTO apprentices (firstname, lastname) VALUES ("John", "Doe"), ("Jane", "Doe");
```

### Optional
- Create a database for the [Movies](https://sqlbolt.com/lesson/inserting_rows) (the exercise that you did at SQLBolt)
- Finish the remaining exerecises from [Exercise 1](#exercise-1)
- [SQL Social-Network Query Exercises](https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/courseware/ch-sql/seq-exercise-sql_social_query_core/)
- [SQL Social-Network Query Exercises Extras](https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/courseware/ch-sql/seq-exercise-sql_social_query_extra/)
