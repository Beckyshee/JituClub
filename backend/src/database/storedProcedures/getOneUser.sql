CREATE PROCEDURE getOneUser
    @employee_id VARCHAR(100)
AS
BEGIN
    SELECT * FROM Users
    WHERE employee_id = @employee_id;
END


-- USE JituClub