class AreaRetangulo {
    readonly area: number

    constructor(largura: number, altura: number) {
        this.area = largura * altura
    }
    
    public exibirArea(): void {
        console.log(`A área do retângulo é: ${this.area}`)
    }
}

new AreaRetangulo(10, 5).exibirArea()