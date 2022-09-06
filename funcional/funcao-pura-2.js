// Uma função pura é uma função que o valor de retorno
// é determinado APENAS por seus valores de entrada,
// sem efeitos colaterais observaveis.

// Impura por depender de Math.random(),
// que é um fator externo
function randomNum(min, max) {
  if(min > max) [min, max] = [max, min];
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(randomNum(1, 12));
console.log(randomNum(15, 36));
console.log(randomNum(14, 45));
console.log(randomNum(154, 32));