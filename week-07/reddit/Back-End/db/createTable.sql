create table posts (id int NOT NULL AUTO_INCREMENT, 
title varchar(255), url varchar(255), 
timestamp timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
score int DEFAULT 0, 
PRIMARY KEY (id));