class Student {
  public name: string;
  private marks: number;

  constructor(name: string, marks: number) {
    this.name = name;
    this.marks = marks;
  }

  getMarks(): number {
    return this.marks;
  }
}

let s1 = new Student("Atharv", 21);

console.log(s1.name);   
console.log(s1.getMarks());
