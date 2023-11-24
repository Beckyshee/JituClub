CREATE TABLE Users (
    employee_id VARCHAR(100) NOT NULL ,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    phone_no VARCHAR(20) NOT NULL UNIQUE,
    id_no INT NOT NULL UNIQUE,
    cohort_no VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(20) Default 'user',
    welcomed BIT Default 0,
    isDeleted BIT DEFAULT 0 
)

-- DROP TABLE Users

-- SELECT * FROM Users

ALTER TABLE Users ADD isDeleted BIT DEFAULT 0 

UPDATE Users SET isDeleted = 0


SELECT * FROM Users WHERE EMAIL ='wanjirubecky.rw@gmail.com' 

UPDATE Users SET role = 'admin' WHERE email = 'wanjirubecky.rw@gmail.com'


USE JituClub;
