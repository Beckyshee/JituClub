CREATE PROCEDURE updateUser
     @employee_id VARCHAR(100),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @phone_no VARCHAR(20),
    @id_no INT,
    @cohort_no VARCHAR(20),
    
AS
BEGIN
    UPDATE Users
    SET
        @employee_id VARCHAR(100),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @phone_no VARCHAR(20),
    @id_no INT,
    @cohort_no VARCHAR(20),
   
    WHERE employee_id = @employee_id;
END;

-- USE JituClub