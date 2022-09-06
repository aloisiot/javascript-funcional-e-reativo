// Uma função pura é uma função que o valor de retorno
// é determinado APENAS por seus valores de entrada,
// sem efeitos colaterais observaveis.

let qtdExecucoes = 0;
console.log("contados -> " + qtdExecucoes);

// Pura !!
function somar(a, b) {
  qtdExecucoes++; // Efeito colateral observavel (violação)
  return a + b;
}

console.log(somar(15, 26));
console.log(somar(15, 26));
console.log(somar(15, 26));
console.log(somar(15, 26));
console.log(somar(15, 26));
console.log("contados -> " + qtdExecucoes);
