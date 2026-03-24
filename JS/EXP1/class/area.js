
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }
}

let length = parseFloat(prompt("Enter length of rectangle:"));
let width = parseFloat(prompt("Enter width of rectangle:"));

let rect = new Rectangle(length, width);

console.log("Length:", length);
console.log("Width:", width);
console.log("Area of Rectangle:", rect.calculateArea());
document.write("<br>Length:", length);
document.write("<br>Width:", width);
document.write("<br>Area of Rectangle:", rect.calculateArea());

