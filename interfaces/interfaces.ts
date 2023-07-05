interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log(`Ola, ${pessoa.nome}`)
}

const pessoa: Humano = {
    nome: `Joao`,
    idade: 27,
    saudar(sobrenome: string){
        console.log(`Ola, meu nome e ${this.nome} ${sobrenome}`)
    }
}

function mudarNome(pessoa: Humano){
    pessoa.nome = `Joana`
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: `Jonas`, idade: 32, altura: 1.75})
pessoa.saudar(`Silva`)

//usando classes
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log(`Ola, meu nome e ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = `Mona`
saudarComOla(meuCliente)
meuCliente.saudar('Damasceno')
console.log(meuCliente.ultimaCompra)

//interface funcao
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
   // return base ** exp
   //Math.pow(2.6)
   return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(2, 6))

//heranca
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B{
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

function teste (b: B){
    return b
}

teste(new RealABC)

abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

// console.log(x)
// console.log(y)
// console.log(z)

x.log()
y.log()
z.log()

const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome
    }
}

cli.log()