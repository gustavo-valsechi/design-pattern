interface Veiculo {
    configurarPropulsao(): void;
    configurarControle(): void;
}

class CarroVoador implements Veiculo {
    configurarPropulsao(): void {
        console.log("Modo de propulsão: Motor a jato");
    }

    configurarControle(): void {
        console.log("Sistema de controle: Inteligência Artificial");
    }
}

class MotoAutonoma implements Veiculo {
    configurarPropulsao(): void {
        console.log("Modo de propulsão: Motor Elétrico");
    }

    configurarControle(): void {
        console.log("Sistema de controle: Controle Autônomo");
    }
}

class Nave implements Veiculo {
    configurarPropulsao(): void {
        console.log("Modo de propulsão: Plasma");
    }

    configurarControle(): void {
        console.log("Sistema de controle: Inteligência Artificial");
    }
}

class ExploradorRobotico implements Veiculo {
    configurarPropulsao(): void {
        console.log("Modo de propulsão: Propulsão a Energia Solar");
    }

    configurarControle(): void {
        console.log("Sistema de controle: Controle Manual");
    }
}

interface FabricaDeVeiculos {
    criarVeiculo(): Veiculo;
}

class FabricaDeVeiculosTerra implements FabricaDeVeiculos {
    criarVeiculo(): Veiculo {
        return new CarroVoador();
    }
}

class FabricaDeVeiculosEspaco implements FabricaDeVeiculos {
    criarVeiculo(): Veiculo {
        return new Nave();
    }
}

function configurarVeiculo(fabrica: FabricaDeVeiculos) {
    const veiculo = fabrica.criarVeiculo();
    veiculo.configurarPropulsao(); 
    veiculo.configurarControle(); 
}

console.log("Configurando um Veículo para Terra:");
const fabricaTerra = new FabricaDeVeiculosTerra();
configurarVeiculo(fabricaTerra);

console.log("\nConfigurando um Veículo para Espaço:");
const fabricaEspaco = new FabricaDeVeiculosEspaco();
configurarVeiculo(fabricaEspaco);
