CREATE DATABASE IF NOT EXISTS studentdb;
USE studentdb;

CREATE TABLE students(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 age INT,
 department VARCHAR(100)
);

INSERT INTO students (name, age, department) VALUES
("Arun",20,"CSE"),("Meena",22,"ECE"),("Kavin",21,"Mechanical");