-- The Following are the tables has to be in your database & model deisgn:
-- users
-- codekata
-- attendance
-- topics
-- tasks
-- company_drives
-- mentors
-- students_activated_courses
-- courses

CREATE DATABASE students;
use students;

-- The following are the queries need to be executed

-- 1. Create tables for the above list given

CREATE TABLE users(userid INTEGER AUTO_INCREMENT PRIMARY KEY, username VARCHAR(100),useremail VARCHAR(100)
,mentorid INTEGER, FOREIGN KEY (mentorid) REFERENCES mentors(mentorid));

CREATE TABLE courses(courseid INTEGER AUTO_INCREMENT PRIMARY KEY,coursename VARCHAR(100));

CREATE TABLE mentors(mentorid INTEGER AUTO_INCREMENT PRIMARY KEY,mentorname VARCHAR(100),mentoremail VARCHAR(100));

CREATE TABLE codekata(codekataid INTEGER AUTO_INCREMENT PRIMARY KEY,userid INTEGER,number_of_problems INTEGER,
 string_problems INTEGER,
 FOREIGN KEY (userid) REFERENCES users(userid)
 );

 CREATE TABLE attendance(attendanceid INTEGER AUTO_INCREMENT PRIMARY KEY, userid INTEGER, courseid INTEGER ,topicsid INTEGER, attended BOOLEAN,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (topicsid) REFERENCES topics(topicsid),
FOREIGN KEY (courseid) REFERENCES courses(courseid)
);

CREATE TABLE topics(topicsid INTEGER AUTO_INCREMENT PRIMARY KEY,courseid INTEGER, topic VARCHAR(200),
FOREIGN KEY (courseid) REFERENCES courses(courseid)
);

CREATE TABLE tasks(tasksid INTEGER AUTO_INCREMENT PRIMARY KEY,courseid INTEGER,task VARCHAR(200),
FOREIGN KEY (courseid) REFERENCES courses(courseid)
);

CREATE TABLE company_drives(drivesid INTEGER AUTO_INCREMENT PRIMARY KEY,userid INTEGER,company VARCHAR(100),
FOREIGN KEY (userid) REFERENCES users(userid)
);

CREATE TABLE students_activated_courses(id INTEGER AUTO_INCREMENT PRIMARY KEY,userid INTEGER,courseid INTEGER,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (courseid) REFERENCES courses(courseid)
);


-- 2. insert at least 5 rows of values in each table

INSERT INTO users(username,useremail,mentorid) VALUES("user1","user1@gmail.com",1),
                                                    ("user2","user2@gmail.com",2),
                                                    ("user3","user3@gmail.com",3),
                                                    ("user4","user4@gmail.com",4),
                                                    ("user5","user5@gmail.com",5);

INSERT INTO courses(coursename) VALUES("React JS"),("Redux"),("Node JS"),("Express JS"),("MongoDb");

INSERT INTO mentors(mentorname,mentoremail) VALUES ("mentor1","mentor1@gmail.com"),
                                                   ("mentor2","mentor2@gmail.com"),
                                                   ("mentor3","mentor3@gmail.com"),
                                                   ("mentor4","mentor4@gmail.com"),
                                                   ("mentor5","mentor5@gmail.com");
                                                   
 INSERT INTO codekata(number_of_problems,string_problems,userid) VALUES(30,10,1),
                                                                       (40,20,2),
                                                                       (50,30,3),
                                                                       (50,40,4),
                                                                       (50,49,5);
                                                                       
INSERT INTO attendance(userid,courseid,topicsid,attended) VALUES(1,1,1,true),
                                                                (2,2,2,true),
                                                                (3,3,3,false),
                                                                (4,4,4,true),
                                                                (5,5,5,true);

INSERT INTO topics(topic,courseid) VALUES("React classes",1),
                                         ("Redux intro",2),
                                         ("Node basics",3),
                                         ("Express intro",4),
                                         ("MongoDb intro",5);

INSERT INTO tasks(task,courseid) VALUES ("React task 1",1),
                                         ("Redux task 1",2),
                                         ("Node task 1",3),
                                         ("Express task 1",4),
                                         ("Mongo task 1",5);

INSERT INTO company_drives(userid,company) VALUES (1,"Facebook"),
                                                    (2,"Amazon"),
                                                    (3,"Apple"),
                                                    (4,"Netflix"),
                                                    (5,"Google");

INSERT INTO students_activated_courses(userid,courseid) VALUES(1,1),(2,2),(3,3),(4,4),(5,5);


-- 3. get number problems solved in codekata by combining the users

SELECT users.userid, users.username,users.useremail, codekata.number_of_problems 
FROM users
INNER JOIN codekata ON users.userid = codekata.userid;

-- 4. display the no of company drives attended by a user

SELECT userid ,COUNT(userid) FROM company_drives GROUP BY userid;

-- 5. combine and display students_activated_courses and courses for a specific user groping them based on the course

SELECT students_activated_courses.userid,students_activated_courses.courseid,
COUNT(students_activated_courses.courseid) ,courses.coursename
FROM students_activated_courses
INNER JOIN courses 
ON students_activated_courses.courseid=courses.courseid
WHERE students_activated_courses.userid=1
GROUP BY courses.courseid;

-- 6 .list all the mentors

SELECT * FROM mentors;

-- 7. list the number of students that are assigned for a mentor

SELECT  mentors.mentorid,mentors.mentorname,COUNT(users.mentorid) 
FROM users,mentors
WHERE mentors.mentorid=users.mentorid
GROUP BY users.mentorid;