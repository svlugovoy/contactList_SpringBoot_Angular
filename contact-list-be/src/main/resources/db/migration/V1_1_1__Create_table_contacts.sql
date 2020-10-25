CREATE TABLE contacts (
 id BIGINT IDENTITY PRIMARY KEY NOT NULL,
 first_name VARCHAR(20) NOT NULL,
 last_name VARCHAR(20) NOT NULL,
 email VARCHAR(20),
 phone VARCHAR(20) NOT NULL,
 gender VARCHAR(6),
 dob DATE (20),
 city VARCHAR(20),
 state VARCHAR(20),
 country VARCHAR(20),
 image_url VARCHAR(255),
);
