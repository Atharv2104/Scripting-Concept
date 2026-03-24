
class Student {
    constructor(name, rollNo, age, course) {
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
        this.course = course;
    }

    display() {
        console.log("Student Name:", this.name);
        document.write("<br>Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        
        document.write("<br>Roll Number:", this.rollNo);
        console.log("Age:", this.age);
        document.write("<br>Age:", this.age);
        console.log("Course:", this.course);
        document.write("<br>Course:", this.course);
    }
}

let name = prompt("Enter Student Name:");
let rollNo = prompt("Enter Roll Number:");
let age = prompt("Enter Age:");
let course = prompt("Enter Course:");

let student1 = new Student(name, rollNo, age, course);

student1.display();
