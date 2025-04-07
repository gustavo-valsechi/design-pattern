type TipoDeQuarto = 'Standard' | 'Luxo' | 'Presidencial';

class HotelReservationBuilder {
    private tipoDeQuarto: TipoDeQuarto;
    private numeroDeNoites: number;
    private cafeDaManha: boolean = false;
    private vistaParaOMar: boolean = false;
    private wifiPremium: boolean = false;
    private lateCheckout: boolean = false;

    constructor(tipoDeQuarto: TipoDeQuarto, numeroDeNoites: number) {
        if (numeroDeNoites <= 0) {
            throw new Error('O número de noites deve ser maior que zero.');
        }
        this.tipoDeQuarto = tipoDeQuarto;
        this.numeroDeNoites = numeroDeNoites;
    }

    adicionarCafeDaManha(): HotelReservationBuilder {
        this.cafeDaManha = true;
        return this;
    }

    adicionarVistaParaOMar(): HotelReservationBuilder {
        this.vistaParaOMar = true;
        return this;
    }

    adicionarWifiPremium(): HotelReservationBuilder {
        this.wifiPremium = true;
        return this;
    }

    adicionarLateCheckout(): HotelReservationBuilder {
        this.lateCheckout = true;
        return this;
    }

    descreverReserva(): string {
        let descricao = `Reserva de ${this.tipoDeQuarto} por ${this.numeroDeNoites} noite(s)`;

        if (this.cafeDaManha) descricao += ', com café da manhã';
        if (this.vistaParaOMar) descricao += ', com vista para o mar';
        if (this.wifiPremium) descricao += ', com wifi premium';
        if (this.lateCheckout) descricao += ', com late checkout';

        return descricao;
    }
}

const reserva = new HotelReservationBuilder('Luxo', 5)
    .adicionarCafeDaManha()
    .adicionarVistaParaOMar()
    .adicionarWifiPremium()
    .adicionarLateCheckout();

console.log(reserva.descreverReserva());

class HotelReservationDirector {
    static criarReservaComCafeDaManha(tipoDeQuarto: TipoDeQuarto, numeroDeNoites: number) {
        return new HotelReservationBuilder(tipoDeQuarto, numeroDeNoites)
            .adicionarCafeDaManha()
            .adicionarVistaParaOMar();
    }

    static criarReservaSemCafeDaManha(tipoDeQuarto: TipoDeQuarto, numeroDeNoites: number) {
        return new HotelReservationBuilder(tipoDeQuarto, numeroDeNoites)
            .adicionarVistaParaOMar()
            .adicionarWifiPremium();
    }
}

const reservaComCafeDaManha = HotelReservationDirector.criarReservaComCafeDaManha('Luxo', 3);
console.log(reservaComCafeDaManha.descreverReserva());

const reservaSemCafeDaManha = HotelReservationDirector.criarReservaSemCafeDaManha('Standard', 2);
console.log(reservaSemCafeDaManha.descreverReserva());