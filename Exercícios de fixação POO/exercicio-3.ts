interface Conta {
    numero: number
    saldo: number
}

class Banco {
    private contas: Conta[] 
    private numeroConta: number

    constructor(numeroConta: number) {
        this.contas = []
        this.numeroConta = numeroConta
    }

    public criarConta(saldoInicial: number): void {
        this.contas.push({ numero: this.numeroConta, saldo: saldoInicial })
        console.log(`Conta ${this.numeroConta} criada com saldo inicial de R$${saldoInicial}.`)
    }
    
    public depositar(valor: number): void {
        const conta = this.contas.find(c => c.numero === this.numeroConta)
        if (conta) {
            conta.saldo += valor
            console.log(`Depósito de R$${valor} realizado na conta ${this.numeroConta}. Novo saldo: R$${conta.saldo}.`)
        } else {
            console.log("Conta não encontrada.")
        }
    }
    
    public sacar(valor: number): void {
        const conta = this.contas.find(c => c.numero === this.numeroConta)
        if (conta) {
            if (conta.saldo >= valor) {
                conta.saldo -= valor
                console.log(`Saque de R$${valor} realizado na conta ${this.numeroConta}. Novo saldo: R$${conta.saldo}.`)
            } else {
                console.log("Saldo insuficiente.")
            }
        } else {
            console.log("Conta não encontrada.")
        }
    }
    
    public consultarSaldo(): void {
        const conta = this.contas.find(c => c.numero === this.numeroConta)
        if (conta) {
            console.log(`Saldo da conta ${this.numeroConta}: R$${conta.saldo}.`)
        } else {
            console.log("Conta não encontrada.")
        }
    }
}

const banco = new Banco(123)

banco.criarConta(1000)
banco.depositar(500)
banco.sacar(200)
banco.consultarSaldo()