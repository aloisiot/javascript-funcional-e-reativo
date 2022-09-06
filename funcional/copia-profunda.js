const deepCopy = require("./deep-copy");

const pessoa = {
  nome: "Marcia",
  altura: 1.6,
  cidade: "Sabará",
  endereco: {
    rua: "Rua das flores",
  },
};

const pessoa_2 = deepCopy(pessoa);
pessoa.nome = "TEST";
console.log(pessoa);
console.log(pessoa_2);

const arr = [1, 5, 9, 87, { a: "jkj" }];
console.log(deepCopy(arr));
console.log(deepCopy("arr"));
