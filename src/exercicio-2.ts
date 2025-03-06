class Tarefas {
    private tarefas: string[]

    constructor() {
        this.tarefas = []
    }

    public adicionarTarefa(tarefa: string): void {
        this.tarefas.push(tarefa)
        console.log(`Tarefa "${tarefa}" adicionada.`)
    }
    
    public listarTarefas(): void {
        console.log("Lista de Tarefas:")
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`)
        })
    }
    
    public removerTarefa(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            const tarefaRemovida = this.tarefas.splice(index, 1)[0]
            console.log(`Tarefa "${tarefaRemovida}" removida.`)
        } else {
            console.log("Índice inválido.")
        }
    }
}

const tarefas = new Tarefas()

tarefas.adicionarTarefa("Estudar TypeScript")
tarefas.adicionarTarefa("Fazer exercícios de POO")
tarefas.listarTarefas()
tarefas.removerTarefa(0)
tarefas.listarTarefas()