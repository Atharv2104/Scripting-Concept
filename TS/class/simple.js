var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.student = function () {
        console.log("Hello, my name is " + this.name);
    };
    return Person;
}());
var p1 = new Person("Atharv", 20);
p1.student();
