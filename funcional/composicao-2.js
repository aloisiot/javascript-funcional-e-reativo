function compor(...fns) {
  return (valor) => {
    return fns.reduce(async (ac, fn) => {
      return Promise.resolve(ac) === ac ? fn(await ac) : fn(ac);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}
function tornarLento(texto) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(texto.split("").join(" ")), 1000);
  });
}

const exagerar = compor(gritar, enfatizar);
const exagerarLento = compor(gritar, enfatizar, tornarLento);

exagerarLento("Para").then(console.log);
exagerar("Cuidado com o buraco").then(console.log);

module.exports = compor;
