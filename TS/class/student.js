var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.getMarks = function () {
        return this.marks;
    };
    return Student;
}());
var s1 = new Student("Atharv", 21);
console.log(s1.name);
console.log(s1.getMarks());
