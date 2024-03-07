class Funcionario {
  constructor(nome, idade, salarioBase) {
    // Inicializa os atributos: nome, idade e salarioBase do funcionário
    this.nome = nome;
    this.idade = idade;
    this.salarioBase = salarioBase;
  }
}

class Professor extends Funcionario {
  constructor(nome, idade, disciplina) {
    // Chama o construtor da classe pai (Funcionario) para iniciar nome, idade e salarioBase
    super(nome, idade, 0); // Nenhum salário base especificado inicialmente

    // inicia os atributos específicos do Professor
    this.disciplina = disciplina;
    this.horasSemana = 0;
    this.valorHora = 0;
  }

  calcularSalario(horasSemana, valorHora, salarioBase) {
    // Atualiza os atributos: horasSemana, valorHora e salarioBase
    this.horasSemana = horasSemana;
    this.valorHora = valorHora;
    this.salarioBase = salarioBase;

    // Calcula o salário multiplicando as horas semanais pelo valor da hora e adicionando o salário base
    this.salario = this.horasSemana * this.valorHora + this.salarioBase;
    
    // Retorna o salário calculado
    return this.salario;
  }

  descrever() {
    // Retorna uma string descrevendo o professor, usando os atributos: nome, idade e disciplina
    return `Olá, sou o(a) professor(a) ${this.nome}! Tenho ${this.idade} anos e ministro a matéria ${this.disciplina}.`;
  }
}

// Cria instâncias de Professor
const professorUX = new Professor('Jeferson', 45, 'UX');
const professorPOO = new Professor('Ana', 37, 'POO');

// Calcula e exibe o salário de cada professor, fornecendo horasSemana, valorHora e salarioBase
console.log(professorPOO.calcularSalario(40, 350, 3000));
console.log(professorUX.calcularSalario(24, 350, 3000));

// Exibe a descrição de cada professor
console.log(professorPOO.descrever());
console.log(professorUX.descrever());
