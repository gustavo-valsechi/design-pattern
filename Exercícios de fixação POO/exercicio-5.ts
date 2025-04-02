class Retangulo {
    private largura: number
    private altura: number
    private area: number
    private perimetro: number

    constructor(largura: number, altura: number) {
        this.largura = largura
        this.altura = altura
    }

    public calcularArea() {
        this.area = this.largura * this.altura
    }

    public calcularPerímetro() {
        this.perimetro = 2 * (this.largura + this.altura)
    }

    public exibirDetalhes() {
        console.log({
            largura: this.largura,
            altura: this.altura,
            area: this.area,
            perimetro: this.perimetro,
        })
    }
}

class Circulo {
    private raio: number
    private area: number
    private perimetro: number

    constructor(raio: number) {
        this.raio = raio
    }

    public calcularArea() {
        this.area = Math.PI * (2 * this.raio)
    }

    public calcularPerímetro() {
        this.perimetro = 2 * Math.PI * this.raio
    }

    public exibirDetalhes() {
        console.log({
            raio: this.raio,
            area: this.area,
            perimetro: this.perimetro,
        })
    }
}

const retangulo = new Retangulo(10, 5)

retangulo.calcularArea()
retangulo.calcularPerímetro()
retangulo.exibirDetalhes()

const circulo = new Circulo(10)

circulo.calcularArea()
circulo.calcularPerímetro()
circulo.exibirDetalhes()