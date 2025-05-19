interface FuncionarioA {
    nomeCompleto(): string;
    salarioMensal(): number;
}

class FuncionarioSistemaA implements FuncionarioA {
    private nome: string;
    private sobrenome: string;
    private salario: number;

    constructor(nome: string, sobrenome: string, salario: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.salario = salario;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    salarioMensal(): number {
        return this.salario;
    }
}

class EmpregadoSistemaB {
    constructor(
        private nomeCompletoStr: string,
        private salarioAnual: number
    ) {}

    getNome(): string {
        return this.nomeCompletoStr;
    }

    getSalarioAnual(): number {
        return this.salarioAnual;
    }
}

class EmpregadoAdapter implements FuncionarioA {
    private empregadoB: EmpregadoSistemaB;

    constructor(empregadoB: EmpregadoSistemaB) {
        this.empregadoB = empregadoB;
    }

    nomeCompleto(): string {
        return this.empregadoB.getNome();
    }

    salarioMensal(): number {
        return this.empregadoB.getSalarioAnual() / 12;
    }
}

const funcionarioA = new FuncionarioSistemaA("João", "Silva", 5000);

const empregadoB = new EmpregadoSistemaB("Maria Oliveira", 72000);
const adaptado = new EmpregadoAdapter(empregadoB);

const listarFuncionario = (f: FuncionarioA) => {
    console.log(`Nome: ${f.nomeCompleto()}`);
    console.log(`Salário Mensal: R$ ${f.salarioMensal().toFixed(2)}`);
};

listarFuncionario(funcionarioA);
listarFuncionario(adaptado);

  