create database if not exists todo;
use todo;

show tables;
create table if not exists users (
  u_id int not null,
  firstname varchar(255),
  lastname varchar(255),
  primary key (u_id)
);
show tables;
describe users;

create table if not exists todo_lists (
  todo_id int not null,
  u_id int,
  status boolean,
  todo varchar(255),
  primary key (todo_id),
  FOREIGN KEY (u_id) REFERENCES users(u_id)
);
show tables;
describe todo_lists;

INSERT INTO users VALUES (1, "John", "Doe"),(2, "Arthur", "Shao"),
(3, "Jane", "Doe");
select * from users;

INSERT INTO todo_lists VALUES (1, 1, false, "Buy a"),(2, 1, false, "Buy b"),
(3, 1, false, "Buy c");
select * from todo_lists;

INSERT INTO todo_lists VALUES (4, 3, false, "do a"),(5, 3, false, "do b"),
(6, 1, false, "do c");
select * from todo_lists;

INSERT INTO todo_lists VALUES (7, 2, false, "make a"),(8, 2, false, "make b"),
(9, 2, false, "make c");
select * from todo_lists;

UPDATE todo_lists
SET u_id = 3
WHERE todo_id=6;
select * from todo_lists;

UPDATE todo_lists
SET status = true
WHERE todo_id=3;
select * from todo_lists;

DELETE FROM todo_lists where todo_id=9;
select * from todo_lists;

DELETE FROM todo_lists where u_id=2;
select * from todo_lists;
----------------------------------------------------------------
