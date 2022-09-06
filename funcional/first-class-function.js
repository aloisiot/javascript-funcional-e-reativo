// Diz-se que uma linguagem de programação possui
// funções de primeira classe (first class functions) quando
// funções são tratadas como qualquer outra variável.

const x = 3;
const y = function (txt) {
  return `Esse é o texto: ${txt}`;
};

const z = () => "Função arrow.";

console.log(x);
console.log(y("Olá!"));
console.log(z());
