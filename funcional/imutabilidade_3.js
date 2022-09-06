const pessoa = {
  nome: "Marcia",
  altura: 1.6,
  cidade: "Sabará",
  endereco: {
    rua: "Rua das flores",
  },
};

const pessoaRef = pessoa;
pessoa.nome = "Clara";
console.log(pessoaRef);

// Mutabilidade (referência)
function alterarPessoa(pess) {
  pess.nome = "Pedro";
  pess.altura = 2.0;
  pess.cidade = "São Paulo";
  return pess;
}

alterarPessoa(pessoa);
console.log(pessoaRef);

function alterarPessoaImut(pess) {
  // Cópia rasa
  return { ...pess, nome: "Dalila", altura: 1.74 };
}

// Mudança em objeto anunhado impacta as copias
pessoa.endereco.rua = "Rua dois";
console.log(alterarPessoaImut(pessoa));
console.log(pessoa);


function copyObj(obj) {
  const result = Object.create();
  for(const key in obj) {
    if(typeof obj[key] === "object") {
      result[key] = copyObj(obj[key])
    } else {
      result[key] = obj[key]
    }
  }
}