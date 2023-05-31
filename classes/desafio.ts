// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0

    constructor(public nome: string){}

    public buzinar(): void {
        console.log(`Tooooooooooooooooot!`)
    }

    public acelerar(delta: number): number {
       return this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto(`Ducati`)
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// // Exercício 2 - Herança
abstract class Objeto2D  {
    public base: number = 0
    public altura: number = 0

    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}
 
const retangulo = new Retangulo()
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())

 
// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string{
        return this._primeiroNome
    }

    set primeiroNome(valor: string){
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
} 

const est = new Estagiario()
console.log(est.primeiroNome)
est.primeiroNome = `Le`
console.log(est.primeiroNome) 
est.primeiroNome = 'Leonardo'
console.log(est.primeiroNome)