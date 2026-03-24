class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  student(): void {
    console.log("Hello, my name is " + this.name);
  }
}

let p1 = new Person("Atharv", 20);
p1.student();