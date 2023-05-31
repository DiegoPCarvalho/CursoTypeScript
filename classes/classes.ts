//aula 1
class Data {
    //publico por padrao
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
console.log(casamento)


//aula 2
class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, 
        public ano: number = 1970){}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

//desafio
// class Produto {
//     constructor(public nome: string, public preco: number, public desconto: any = 0){}
// }

// const compra = new Produto(`Notebook`, 7892.36)
// compra.desconto = 0.09
// console.log(compra)

// const compra2 = new Produto(`Celular`, 6532, 0.5)
// console.log(compra2)

//aula3

class Produto {
    constructor(public nome: string, public preco: number, public desconto: any = 0){}

    public precoComDesconto():number{
        // let resultado = this.preco * (this.desconto *100 / 100)
        // let precoDec = this.preco - resultado
        // return precoDec
        // return`${this.nome} custa R$${this.preco} (${this.desconto * 100}% off) Valor com Desconto: ${precoDec.toFixed(2)}`

        return this.preco * (1 - this.desconto)
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto().toFixed(2)} (${this.desconto * 100}% off)`
    }
}

const compra = new Produto(`Notebook`, 7892.36)
compra.desconto = 0.09
console.log(compra.resumo())

const compra2 = new Produto(`Celular`, 6532, 0.5)
console.log(compra2.resumo())

//aula 4
class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200){}

        protected alterarVelocidade(delta: number): number{
                const novaVelocidade = this.velocidadeAtual + delta
                const velocidadeValida = novaVelocidade >= 0 
                    && novaVelocidade <= this.velocidadeMaxima

                    if(velocidadeValida){
                        this.velocidadeAtual = novaVelocidade
                    }else{
                        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
                    }

            return this.velocidadeAtual
        }

        public acelerar(): number{
            return this.alterarVelocidade(5)
        }

        public frear(): number{
            return this.alterarVelocidade(-5)
        }
}


const carro1 = new Carro(`Ford`, `Ka`, 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

//aula 5 e 6 heranca
class Ferrari extends Carro{
    constructor(modelo: string, velocidadeMaxima: number){
        super(`Ferrari`, modelo, velocidadeMaxima)
    }
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari(`F40`, 450)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())


//aula 7 getter & setter
class Pessoa {
    private _idade: number = 0
    
    get idade():number {
        return this._idade
    }

    set idade(valor:number ){
        if(valor >= 0 && valor <=120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)


//atributos e metodos estatoicos
class Matematica {
   static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

// const n1 = new Matematica()
// n1.PI = 4.2
// console.log(n1.areaCirc(4))

// const n2 = new Matematica()
// console.log(n2.areaCirc(4))

console.log(Matematica.areaCirc(4))

//classes abstratas
abstract class Calculo{
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

//constructor privado & singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance() {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

// const errado = new Unico()

console.log(Unico.getInstance().agora())

//atributos somente leitura
class Aviao {
    public readonly modelo: string

    constructor(modelo: string, 
            public readonly prefixo: string){
                this.modelo = modelo
            }
}

const turboHelice = new Aviao(`Tu-114`, `PT-ABC`)
// turboHelice.modelo = `DC-9`
// turboHelice.prefixo = `PF-DEF`
console.log(turboHelice)