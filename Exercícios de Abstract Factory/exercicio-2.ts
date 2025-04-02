interface Criatura {
    attack(): void
}

class Dragao implements Criatura {
    attack(): void {
        console.log("O Dragão solta fogo em seus inimigos com um rugido aterrorizante!");
    }
}

class Salamandra implements Criatura {
    attack(): void {
        console.log("A Salamandra corre rapidamente e ataca com suas chamas!");
    }
}

class SerpenteMarinha implements Criatura {
    attack(): void {
        console.log("A Serpente Marinha ataca com sua força esmagadora, enroscando-se nos inimigos!");
    }
}

class Tritao implements Criatura {
    attack(): void {
        console.log("O Tritão nada velozmente e ataca com suas poderosas garras!");
    }
}

interface FabricaDeCriaturas {
    criarCriaturaForte(): Criatura;
    criarCriaturaVeloz(): Criatura;
}

class FabricaReinoFogo implements FabricaDeCriaturas {
    criarCriaturaForte(): Criatura {
        return new Dragao();
    }

    criarCriaturaVeloz(): Criatura {
        return new Salamandra();
    }
}

class FabricaReinoAgua implements FabricaDeCriaturas {
    criarCriaturaForte(): Criatura {
        return new SerpenteMarinha();
    }

    criarCriaturaVeloz(): Criatura {
        return new Tritao();
    }
}

function testarFabrica(fabrica: FabricaDeCriaturas) {
    const criaturaForte = fabrica.criarCriaturaForte();
    const criaturaVeloz = fabrica.criarCriaturaVeloz();
    
    console.log("Criatura forte:");
    criaturaForte.attack();

    console.log("\nCriatura veloz:");
    criaturaVeloz.attack();
}

console.log("Testando a Fábrica do Reino do Fogo:");
const fabricaFogo = new FabricaReinoFogo();
testarFabrica(fabricaFogo);

console.log("\nTestando a Fábrica do Reino da Água:");
const fabricaAgua = new FabricaReinoAgua();
testarFabrica(fabricaAgua);
