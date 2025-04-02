interface Brinquedo {
    play(): void;
}

class CarrinhoDePlastico implements Brinquedo {
    play(): void {
        console.log("Brincando com o carrinho de plástico!");
    }
}

class BonecaDePlastico implements Brinquedo {
    play(): void {
        console.log("Brincando com a boneca de plástico!");
    }
}

class CarrinhoDeMadeira implements Brinquedo {
    play(): void {
        console.log("Brincando com o carrinho de madeira!");
    }
}

class BonecaDeMadeira implements Brinquedo {
    play(): void {
        console.log("Brincando com a boneca de madeira!");
    }
}

interface FabricaDeBrinquedos {
    criarCarrinho(): Brinquedo;
    criarBoneca(): Brinquedo;
}

class FabricaDeBrinquedosDePlastico implements FabricaDeBrinquedos {
    criarCarrinho(): Brinquedo {
        return new CarrinhoDePlastico();
    }
    criarBoneca(): Brinquedo {
        return new BonecaDePlastico();
    }
}

class FabricaDeBrinquedosDeMadeira implements FabricaDeBrinquedos {
    criarCarrinho(): Brinquedo {
        return new CarrinhoDeMadeira();
    }
    criarBoneca(): Brinquedo {
        return new BonecaDeMadeira();
    }
}

function testarFabrica(fabrica: FabricaDeBrinquedos) {
    const carrinho = fabrica.criarCarrinho();
    const boneca = fabrica.criarBoneca();
    
    carrinho.play();
    boneca.play();
}

console.log("Testando Fábrica de Plástico:");
const fabricaDePlastico = new FabricaDeBrinquedosDePlastico();
testarFabrica(fabricaDePlastico);

console.log("\nTestando Fábrica de Madeira:");
const fabricaDeMadeira = new FabricaDeBrinquedosDeMadeira();
testarFabrica(fabricaDeMadeira);
