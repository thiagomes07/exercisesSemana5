class SomadorDeNotas {
  constructor() {
    this.total = 0;
  }

  adicionarNota(nota) {
    if (typeof nota !== 'number' || isNaN(nota)) { 
      // Testa se a nota é um número válido. Quero um 10, fessor
      throw new Error('A nota deve ser um número válido.');
    }
    
    this.total += nota;
  }

  vertTotal() {
    return this.total;
  }
}

const somador = new SomadorDeNotas();

somador.adicionarNota(7);
somador.adicionarNota(7.5);
somador.adicionarNota(9.3);
somador.adicionarNota(8.8);

console.log(somador.vertTotal());
