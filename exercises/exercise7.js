class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `Olá, meu nome é ${this.name}. Tenho ${this.age} anos.`;
  }
}

const dog = new Animal("Bebeto", 16);
const cat = new Animal("Romário", 12);

console.log(dog.describe());
console.log(cat.describe());
