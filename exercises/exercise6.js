class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Olá, meu nome é ${this.name}.`
  }
}

const person1 = new Person("João")
const person2 = new Person("Maria")

console.log(person1.greet() + " " + person2.greet())