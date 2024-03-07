class Carro {
  constructor() {
    this.velocidadeAtual = 0;
  }

  acelerar(velocidade) {
    this.velocidadeAtual += velocidade;
    console.log(this.velocidadeAtual)
  }
}

let jeep = new Carro();

jeep.acelerar(200)