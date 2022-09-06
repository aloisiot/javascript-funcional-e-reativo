// Funcão que opera em outras funções,
// tomando-as como argumento po retornando-as,
// são chamadas de 'higher order functions' (Funções de alta ordem).

function executar(descricao) {
  return (fn, ...args) => `${descricao} ${fn(...args)}`;
}

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

const soma = executar("O resultado da soma é")(somar, 1, 3);
const produto = executar("O produto da multilicação é")(multiplicar, 2, 8);
console.log(soma);
console.log(produto);
