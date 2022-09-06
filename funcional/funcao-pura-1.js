// Uma função pura é uma função que o valor de retorno
// é determinado APENAS por seus valores de entrada,
// sem efeitos colaterais observaveis.

const PI = 3.14

// Impura (PI é um valor externo à função)
function circArea_Impure(raio) {
  return raio * raio * PI
}

console.log(circArea_Impure(10));

// Pura (PI é passado como parâmetro)
function circArea_Pure(raio, pi) {
  return raio * raio * pi
}

console.log(circArea_Pure(10, PI));
console.log(circArea_Pure(10, 3.1415));
console.log(circArea_Pure(10, Math.PI));
