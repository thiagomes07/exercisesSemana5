class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `Olá, meu name é ${this.name}. Tenho ${this.age} anos.`;
  }
}

class Gato extends Animal {
  constructor(name, age, color) {
    super(name, age);

    this.color = color;
  }

  miar(){
    return `Sou um gato da cor ${this.color}`
  }
}

const dog = new Animal("Bebeto", 16);
const cat = new Gato("Romário", 12, "Azul");

console.log(dog.describe());
console.log(cat.miar());
