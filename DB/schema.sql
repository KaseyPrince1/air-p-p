CREATE DATABASE pp_db;

USE pp_db;

CREATE TABLE users(
--this will hold basic user information when user creates an account 
  id            INT          NOT NULL AUTO_INCREMENT,
  username      VARCHAR(45)  NOT NULL,
  first_name    VARCHAR(45)  NOT NULL,
  last_name     VARCHAR(45)  NOT NULL,
  email_address VARCHAR(150) NOT NULL,
  age           INT          NOT NULL, 
  gender        VARCHAR(10)  NOT NULL, 
  pref          VARCHAR(150) NOT NULL,
 -- member_date DATETIME 
  PRIMARY KEY (id)
);
CREATE TABLE rvw_sub (
    id           INT          NOT NULL AUTO_INCREMENT,
--    time_ DATETIME ,
    user         VARCHAR(45)  NOT NULL, --autofilled based on user profile
    user_loc     VARCHAR(150) NOT NULL --auto fill based on user profile --gender we can join from user rather than filling another table with redundant data 
    clean_status VARCHAR(45)  NOT NULL, --dropdown menu 
    wait_time    VARCHAR(45)  NOT NULL, --dropdown menu 
    star_rvw     VARCHAR(45)  NOT NULL, --submitted on user side based on a star structure 
    itms_req     VARCHAR(45)  NOT NULL, --drop down yes or no -- breaks to aditional column 
    itms_res     VARCHAR(50)  NOT NULL,     -- Amenities needed: (yes no, if they yes>> -- Needed amenities : baby changing, toilet paper, soap... -- If other Other: VARCHAR (50)                                        
    user_notes   VARCHAR(500) NOT NULL, --submitted body of text for user 
    pic_sub      VARCHAR(500) NOT NULL, --able to submit a picture and submit 
    PRIMARY KEY (id)
)

--)
-- CREATE TABLE users_history(
-- --this will hold reviews submitted by users and track previous user locations 
-- )
--CREATE TABLE locations (
--this will hold information on locations 
--)