-- Creates and Targets DB
CREATE DATABASE jobbies;
USE jobbies;

-- Table for Job Information
CREATE TABLE jobs (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    applied BOOLEAN DEFAULT NULL,
    -- createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for User Information
CREATE TABLE users (
	id INT auto_increment NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(140) NOT NULL,
    password VARCHAR(140) NOT NULL,
    image VARCHAR(255)
);
    