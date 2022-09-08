const textoComTamanhoEntre = (min) => (max) => (erro) => (texto) => {
  if (min > max) [min, max] = [max, min];
  const tamanho = (texto || "").trim().length;
  if (tamanho < min || tamanho > max) {
    throw erro;
  }
};

const aplicarValidacao = (fn) => (valor) => {
  try {
    fn(valor);
  } catch (erro) {
    return { erro };
  }
};

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao(
  "Nome do produto inválido!"
);
const p = { nome: "A", preco: 23.45, desconto: 0.25 };
const validarNome = aplicarValidacao(forcarNomeProdutoValido);
console.log(validarNome(p.nome));
