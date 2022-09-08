const corrente = (...fns) => (valor) => {
  return fns.reduce((ac, fn) => fn(ac), valor);
};

const gritar = (texto) => texto.toUpperCase();
const enfatizar = (texto) => `${texto}!!!`;
const tornarLento = (texto) => texto.split("").join(" ");

const transformarTexto = corrente(gritar, enfatizar, tornarLento);

console.log(transformarTexto("Texto"));
