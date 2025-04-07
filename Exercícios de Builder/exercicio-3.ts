type TipoDeMotor = 'Gasolina' | 'Elétrico' | 'Híbrido';
type TipoDeCambio = 'Manual' | 'Automático';

class CarBuilder {
    private modelo: string;
    private motor: TipoDeMotor;
    private cor?: string;
    private cambio?: TipoDeCambio;
    private tetoSolar: boolean = false;
    private somPremium: boolean = false;
    private bancosDeCouro: boolean = false;
    private opcionaisSelecionados: number = 0;

    constructor(modelo: string, motor: TipoDeMotor) {
        this.modelo = modelo;
        this.motor = motor;
    }

    configurarCor(cor: string): CarBuilder {
        this.cor = cor;
        return this;
    }

    configurarCambio(cambio: TipoDeCambio): CarBuilder {
        this.cambio = cambio;
        this.opcionaisSelecionados++;
        return this;
    }

    configurarTetoSolar(): CarBuilder {
        this.tetoSolar = true;
        this.opcionaisSelecionados++;
        return this;
    }

    configurarSomPremium(): CarBuilder {
        this.somPremium = true;
        this.opcionaisSelecionados++;
        return this;
    }

    configurarBancosDeCouro(): CarBuilder {
        this.bancosDeCouro = true;
        this.opcionaisSelecionados++;
        return this;
    }

    validarConfiguracao(): void {
        if (this.opcionaisSelecionados < 2) {
            throw new Error('O carro deve ter pelo menos dois opcionais selecionados.');
        }
    }

    construir(): string {
        this.validarConfiguracao();

        let descricao = `${this.modelo} com motor ${this.motor}`;

        if (this.cor) descricao += `, cor ${this.cor}`;
        if (this.cambio) descricao += `, câmbio ${this.cambio}`;
        if (this.tetoSolar) descricao += ', teto solar';
        if (this.somPremium) descricao += ', som premium';
        if (this.bancosDeCouro) descricao += ', bancos de couro';

        return descricao;
    }
}

const carro = new CarBuilder('Fusca', 'Gasolina')
    .configurarCor('Azul')
    .configurarCambio('Automático')
    .configurarTetoSolar()
    .construir();

console.log(carro);

class CarDirector {
    static criarCarroComCambioManual(modelo: string, motor: TipoDeMotor) {
        return new CarBuilder(modelo, motor)
            .configurarCambio('Manual')
            .configurarCor('Preto')
            .configurarTetoSolar()
            .construir();
    }

    static criarCarroComCambioAutomatico(modelo: string, motor: TipoDeMotor) {
        return new CarBuilder(modelo, motor)
            .configurarCambio('Automático')
            .configurarCor('Branco')
            .configurarSomPremium()
            .construir();
    }
}

const carroComManual = CarDirector.criarCarroComCambioManual('Fusca', 'Gasolina');
console.log(carroComManual);

const carroComAutomatico = CarDirector.criarCarroComCambioAutomatico('Gol', 'Híbrido');
console.log(carroComAutomatico);