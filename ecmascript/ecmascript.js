"use strict";
//let e const
let seraQuePode = '?'; // hoisting
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = `Colocar o casacco!`;
    console.log(acao);
}
const cpf = `123.456.789-00`;
// cpf = `789.456.123-00`
console.log(cpf);
const segredo = `externo`;
function revelar() {
    let segredo = `interno`;
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = `def`;
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
//arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
function somar2(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
console.log(somar2(3, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log(`Ola!!`);
saudacao();
const falarCom = (pessoa) => console.log(`Ola ${pessoa}`);
falarCom('Mona');
//this
// function normalComThis(){
//     console.log(this)
// }
// const nomalComThisEspecial = normalComThis
//     .bind({nome: `Mona`})
// nomalComThisEspecial()
// //this???
// // console.log(this)
// const arrowComThis = () => console.log(this)
// const arrowComThisEspecial = arrowComThis
//     .bind({nome: `Mona`})
// arrowComThisEspecial()
//parametro padrao
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log(`FIM`);
}
contagemRegressiva();
contagemRegressiva(3);
//operador spreed & rest
const numbers = [1, 99, 10, -5, 1035, 352];
console.log(Math.max(...numbers));
const turmaA = ['Joao', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaA);
console.log(turmaB);
function retornarArray(...arg) {
    return arg;
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 345, 643);
console.log(numeros);
console.log(retornarArray(...numbers));
//rest $ spread(Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (array)
const carac = [`Motor Zetec 1.0`, 2020];
// const motor = carac[0]
// const ano = carac[1]
const [motor, ano] = carac;
console.log(motor);
console.log(ano);
//Destructuring (Objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    car: {
        w: 'importado'
    }
};
const { nome: n, preco: p, car: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
//desafios
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//exercicio 2
const dizerOla = function (nome = `Pessoa`) {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
//exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//exercicio 4
const array = [55, 20];
array.push(...nums);
console.log(array);
//exercicio 5
const notas = [8.5, 6.3, 9.4];
const [notas1, nota2, nota3] = notas;
console.log(notas1, nota2, nota3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome: Nome, experiencia } = cientista;
console.log(Nome, experiencia);
//callback asincronas
// function esperar3sec(callback: (dado: string) => void){
//     setTimeout(() => {
//         callback(`3 segundos depois`)
//     }, 3000)
// }
// esperar3sec(function(resultado: string){
//     console.log(resultado)
// })
// function esperar3sPromise(){
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve(`3 segundos promise`)
//         }, 3000)
//     })
// }
// esperar3sPromise()
//     .then(dado => console.log(dado))
// fetch(`https://swapi.dev/api/people/1`)
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
//     .catch(res => console.log(res))
//# sourceMappingURL=ecmascript.js.map