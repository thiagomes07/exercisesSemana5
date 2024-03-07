class Carro {
  constructor(marca) {
    this.marca = marca
  }

  ligar() {
    console.log("Carro ligado!")
  }
}

let buggy = new Carro();

buggy.ligar()