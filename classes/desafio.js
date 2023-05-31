"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log(`Tooooooooooooooooot!`);
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto(`Ducati`);
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// // Exercício 2 - Herança
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const est = new Estagiario();
console.log(est.primeiroNome);
est.primeiroNome = `Le`;
console.log(est.primeiroNome);
est.primeiroNome = 'Leonardo';
console.log(est.primeiroNome);
//# sourceMappingURL=desafio.js.map