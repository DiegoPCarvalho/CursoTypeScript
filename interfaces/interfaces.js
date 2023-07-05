"use strict";
function saudarComOla(pessoa) {
    console.log(`Ola, ${pessoa.nome}`);
}
const pessoa = {
    nome: `Joao`,
    idade: 27,
    saudar(sobrenome) {
        console.log(`Ola, meu nome e ${this.nome} ${sobrenome}`);
    }
};
function mudarNome(pessoa) {
    pessoa.nome = `Joana`;
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: `Jonas`, idade: 32, altura: 1.75})
pessoa.saudar(`Silva`);
//usando classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Ola, meu nome e ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = `Mona`;
saudarComOla(meuCliente);
meuCliente.saudar('Damasceno');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // return base ** exp
    //Math.pow(2.6)
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 6));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) {
    return b;
}
teste(new RealABC);
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
// console.log(x)
// console.log(y)
// console.log(z)
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map