CREATE OR ALTER PROCEDURE registerUser(
    @employee_id VARCHAR(100),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @phone_no VARCHAR(20),
    @id_no INT,
    @cohort_no VARCHAR(20),
    @password VARCHAR(200)
)
AS
BEGIN

    INSERT INTO Users(employee_id, name, email, phone_no, id_no, cohort_no, password)
    VALUES(@employee_id, @name, @email, @phone_no, @id_no, @cohort_no, @password)

END

DROP PROCEDURE registerUser


-- USE JituClub