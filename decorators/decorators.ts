function logarClasse(constructor: Function) {
    console.log(constructor)
}

// new Eletrodomestico()

function decoratorVazio(_: Function) { }

function logharClasseSe(valor: Boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(a: string, b: number) {
    return function (_: Function): void {
        console.log(a + ' ' + b)
    }
}

type Constructor = { new(...args: any[]): {} }

function logarObjeto(construtor: Constructor) {
    console.log('Carregando...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log(`Antes...`)
            super(...args)
            console.log(`Depois ....`)
        }
    }
}

// new Eletrodomestico

interface Eletrodomestico {
    imprimir?(): void
}

// @logarClasse
// @logharClasseSe(true)
// @decorator('Teste', 123456)
// @logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}


function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

//desafio
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}
 
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissao')
            }
        }
    }
}


class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        }else {
            return false
        }
    }

    @congelar
    getSaldo(){
        return this.saldo
    }
}


const cc = new ContaCorrente(10248.57)
cc.sacar(5000) 
cc.sacar(5000) 
cc.sacar(248.5699999999997) 
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }
// console.log(cc.getSaldo())

//Object.freeze()
function congelar(alvo: any, nomeMetodo: string, 
        descritor: PropertyDescriptor){
            console.log(alvo)
            console.log(nomeMetodo)
            console.log(descritor)
            descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any) : void {
            if(valor < 0){
                throw new Error('Saldo Invalido')
            }else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}

function paramInfo(alvo: any, nomeParametro: string, 
        indiceParam: number){
            console.log(`Alvo: ${alvo}`)
            console.log(`Metodo: ${nomeParametro}`)
            console.log(`Indice: ${indiceParam}`)
}
