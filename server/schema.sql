
CREATE DATABASE chats10;

USE chats10;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INT AUTO_INCREMENT PRIMARY KEY, 
  username VARCHAR(20), 
  roomname VARCHAR (20), 
  message VARCHAR(200),
  userID INT
);

CREATE TABLE user (
  userID INT  AUTO_INCREMENT PRIMARY KEY, 
  username VARCHAR(20)
);
/* Create other tables and define schemas for them here! */

-- INSERT INTO `messages` (`messageID`, `username`, `roomname`, `message`, `userID` )
-- VALUES 
-- (104, 'Jessie', 'hackreactor', 'read the docs', 0 ),
-- (105, 'Jon', 'hackreactor', 'hi', 0);




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

