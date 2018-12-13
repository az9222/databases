
CREATE DATABASE chats10;

USE chats10;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
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


CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

