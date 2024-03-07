class Veiculo {
  constructor(marca) {
    this.marca = marca;
  }
}

class Carro extends Veiculo {
  ligar() {
    console.log("Carro ligado!");
  }
}

let carro = new Carro("Toyota");

carro.ligar();
