DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20)
);

CREATE TABLE rooms (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20)
);

CREATE TABLE messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  room_id int,
  message text,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

