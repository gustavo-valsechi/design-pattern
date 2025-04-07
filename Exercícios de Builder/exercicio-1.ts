type TipoDePao = 'Frances' | 'Brioche' | 'Integral';
type TipoDeProteina = 'Carne' | 'Frango' | 'Vegetariano';

class BurgerOrderBuilder {
    private pao: TipoDePao;
    private proteina: TipoDeProteina;
    private queijo: boolean = false;
    private alface: boolean = false;
    private tomate: boolean = false;
    private cebola: boolean = false;
    private molhoEspecial: boolean = false;
    private bebida: string | null = null;

    constructor(pao: TipoDePao, proteina: TipoDeProteina) {
        this.pao = pao;
        this.proteina = proteina;
    }

    adicionarQueijo(): BurgerOrderBuilder {
        this.queijo = true;
        return this;
    }

    adicionarAlface(): BurgerOrderBuilder {
        this.alface = true;
        return this;
    }

    adicionarTomate(): BurgerOrderBuilder {
        this.tomate = true;
        return this;
    }

    adicionarCebola(): BurgerOrderBuilder {
        this.cebola = true;
        return this;
    }

    adicionarMolhoEspecial(): BurgerOrderBuilder {
        this.molhoEspecial = true;
        return this;
    }

    adicionarBebida(bebida: string): BurgerOrderBuilder {
        this.bebida = bebida;
        return this;
    }

    descreverPedido(): string {
        let descricao = `${this.proteina} no pão ${this.pao}`;

        if (this.queijo) descricao += ', com queijo';
        if (this.alface) descricao += ', com alface';
        if (this.tomate) descricao += ', com tomate';
        if (this.cebola) descricao += ', com cebola';
        if (this.molhoEspecial) descricao += ', com molho especial';
        if (this.bebida) descricao += `. Bebida: ${this.bebida}`;

        return descricao;
    }
}

const pedidoHamburguer = new BurgerOrderBuilder('Brioche', 'Carne')
    .adicionarQueijo()
    .adicionarAlface()
    .adicionarTomate()
    .adicionarCebola()
    .adicionarMolhoEspecial()
    .adicionarBebida('Coca-Cola');

console.log(pedidoHamburguer.descreverPedido())

class BurgerOrderDirector {
    static criarPedidoComTomate(pao: TipoDePao, proteina: TipoDeProteina) {
        return new BurgerOrderBuilder(pao, proteina)
            .adicionarQueijo()
            .adicionarAlface()
            .adicionarTomate();
    }

    static criarPedidoSemTomate(pao: TipoDePao, proteina: TipoDeProteina) {
        return new BurgerOrderBuilder(pao, proteina)
            .adicionarQueijo()
            .adicionarAlface();
    }
}

const pedidoComTomate = BurgerOrderDirector.criarPedidoComTomate('Brioche', 'Carne');
console.log(pedidoComTomate.descreverPedido());

const pedidoSemTomate = BurgerOrderDirector.criarPedidoSemTomate('Brioche', 'Frango');
console.log(pedidoSemTomate.descreverPedido());