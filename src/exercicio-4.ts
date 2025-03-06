class Tarefa {
    private descricao: string
    private concluida: boolean

    constructor(descricao: string) {
        this.descricao = descricao
        this.concluida = false
    }

    public concluirTarefa() {
        this.concluida = true
    }

    public exibirDetalhes() {
        console.log({
            descricao: this.descricao,
            status: this.concluida ? "CONCLUÍDA" : "PENDENTE"
        })
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[]

    constructor() {
        this.tarefas = []
    }

    public adicionarTarefa(descricao: string) {
        this.tarefas.push(new Tarefa(descricao))
    }

    public concluirTarefa(index: number) {
        if (index >= 0 && index < this.tarefas.length) {
            this.tarefas[index].concluirTarefa()
            console.log(`Tarefa concluída.`)
        } else {
            console.log("Índice inválido.")
        }
    }

    public exibirTarefas() {
        this.tarefas.forEach(tarefa => tarefa.exibirDetalhes())
    }
}

const gerenciador = new GerenciadorTarefas()

gerenciador.adicionarTarefa("Tarefa 1")
gerenciador.adicionarTarefa("Tarefa 2")
gerenciador.exibirTarefas()
gerenciador.concluirTarefa(0)
gerenciador.exibirTarefas()