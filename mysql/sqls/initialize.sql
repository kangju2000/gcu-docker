DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE cake (
    cakeId INTEGER AUTO_INCREMENT,
    color VARCHAR(255),
    shape VARCHAR(255),
    topping VARCHAR(255),
    sender VARCHAR(255),
    receiver VARCHAR(255),
    message VARCHAR(255),
    PRIMARY KEY (cakeId)
) DEFAULT CHARACTER SET UTF8;
