//string
let nome: string = 'João'
console.log(nome)
//nome = 28 - gera erro


//numbers
let idade: number = 27
idade = 27.5
console.log(idade)
//idade = '22' - gera erro

//bolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 - gera erro
console.log(possuiHobbies)

//tipos explicítos 
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

//array
let hobbies: any[] = ["cozinhar", 'praticar esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
// hobbies= 100
console.log(hobbies)

//tupla
let endereco: [string, number, string] = ['Av Principal', 99, ""]
console.log(endereco)

endereco = [ "Rua Importante", 93, 'Bloco A']
console.log(endereco)

//enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul = 2, // 2
    Laranja,
    Rosa,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Rosa)
console.log(Cor.Vermelho)

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: "BMW" , ano: 2019}
console.log(carro)


//função
function retorneMeuNome(): string{
    // return minhaIdade
    return nome
}

console.log(retorneMeuNome())

function digaOI(): void{
    console.log('OI')
    // return minhaIdade
}

digaOI()

function multiplicar(numA: number, numB: number) : number {
    return numA * numB
}

console.log(multiplicar(3, 9))
console.log(multiplicar(3.5, 9))

//tipo função

// const teste = function (a: number, b:number) : boolean {
//     return false
// }

// const teste2 = (a: number, b:number) : boolean => {
//     return false
// }

let calculo : (numeroA: number, numeroB: number) => number 
// calculo = digaOI
// calculo()

calculo = multiplicar
console.log(calculo(2, 5))


//objetos 
let usuarios: {nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
console.log(usuarios)

usuarios = {
    idade: 35,
    nome: 'Danilo'
}
console.log(usuarios)


//Desafio
//alias
type Funcionario = { 
    supervisores: string[],
    ponto: (horas: number) => string
 }

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    ponto(horario: number) : string {
        return horario <= 8 ? 'Ponto Normal' : "Fora do Ponto"
    }
 }

 console.log(funcionario.supervisores)
 console.log(funcionario.ponto(8))
 console.log(funcionario.ponto(10))


//alias
let funcionario2: Funcionario = {
    supervisores: ['Carlos', 'Bia'],
    ponto(horario: number) : string {
        return horario <= 8 ? 'Ponto Normal' : "Fora do Ponto"
    }
 }

 console.log(funcionario2.supervisores)
 console.log(funcionario2.ponto(8))
 console.log(funcionario2.ponto(10))


 //Union Types
 let nota: number | string = 10
 console.log(`Minha nota é ${nota}!`)
 nota = '10'
 console.log(`Minha nota é ${nota}!`)
//  nota = true
//  console.log(`Minha nota é ${nota}!`)


//Checagem tipos
let valor = 30
typeof valor === "number" ? console.log("É um Number!") : console.log(typeof valor)

//never
function falha(msg: string): never {
    throw new Error(msg)   
}

const produto = {
    nome: 'Sabão',
    preco: 3,
    validarProduto(){
        !this.nome || this.nome.trim().length === 0 ? falha("Precisa ter um Nome") : 0
        this.preco < 0 ? falha('Preco Inválido') : 0

    }
}

produto.validarProduto()

//null
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1 : Contato = {
    nome: "Diego",
    tel1: '11 96151-6488',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)


let podeSerNulo = null // tipo any!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

//Desafio
// let contaBancaria:  {
//     saldo: number,
//     depositar: (valor: number) => void
// } = {
//     saldo: 3456,
//     depositar: function(valor: number): void {
//        this.saldo += valor
//     }
// }

// let correntista: {
//     nome: string,
//     contaBancaria: object,
//     contatos: string[]
// } = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567891', '456983215']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
} 

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number){
       this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567891', '456983215']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
correntista.contaBancaria.depositar(3000)
console.log(correntista)