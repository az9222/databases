CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  userID INT PRIMARY KEY, 
  username VARCHAR(20), 
  roomname VARCHAR (20), 
  message VARCHAR(200)
);

/* Create other tables and define schemas for them here! */

INSERT INTO `messages` (`userID`, `username`, `roomname`, `message` )
VALUES 
(104, 'Jessie', 'hackreactor', 'read the docs' ),
(105, 'Jon', 'hackreactor', 'hi');



/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

