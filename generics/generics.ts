function echo(objeto: any) {
    return objeto
}

console.log(echo(`JOAO`).length)
console.log(echo(27).length)
console.log(echo({ nome: `Joao`, idade: 32 }).length)

//usando Generics
function echoMelhorando<TIPO>(objeto: TIPO): TIPO {
    return objeto
}

console.log(echoMelhorando(`JOAO`).length)
console.log(echoMelhorando<number>(27))
console.log(echoMelhorando({ nome: `Joao`, idade: 32 }))

//Generics disponiveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push(`5.5`)
console.log(avaliacoes)

//array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3, 4, 5, 6])
imprimir<number>([1, 2, 3, 4])
imprimir<string>(['ana', 'julia'])
imprimir<{ nome: string, idade: number }>([
    { nome: `fulano`, idade: 32 },
    { nome: `fulano`, idade: 32 },
    { nome: `fulano`, idade: 32 },
    { nome: `fulano`, idade: 32 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: `fulano`, idade: 32 },
    { nome: `fulano`, idade: 32 },
    { nome: `fulano`, idade: 32 },
    { nome: `fulano`, idade: 32 }
])


//tipo generico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorando
console.log(chamarEcho<string>(`Alguma coisa`))

//class com generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operador1: T, public operador2: T) { }

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom dia', 'Amigo').executar())
// console.log(new OperacaoBinaria(3, 9).executar())
// console.log(new OperacaoBinaria(5, 'Amigo').executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operador1 + this.operador2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(3, 34).executar())

//desafio
class DiferencaData extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operador1)
        const t2 = this.getTime(this.operador2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dias`
    }
}

const d1 = new Data(1, 4, 2023)
const d2 = new Data(1, 5, 2023)
console.log(new DiferencaData(d1, d2).executar())

//desafio classe fila
//atributo: array
//metodos: entrar, proximo, imprimir
class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {

        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {

            return null
        }

    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')

fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

const novaFila = new Fila<number>(1, 2, 3)

novaFila.imprimir()

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
type Par<C, V > = { chave: C, valor: V}

class Mapa<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C) : Par<C, V> | null {
        const resultado = this.itens
            .filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave)
        encontrado ? encontrado.valor = par.valor : this.itens.push(par)
    }

    limpar(){
        this.itens = new Array<Par<C, V>>()
    }

    imprimir(){
        console.log(this.itens)
    }
}
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()

