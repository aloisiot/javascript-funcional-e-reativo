import readline from "readline";

function obterResposta(questao) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(questao, (resp) => {
      resolve(resp);
      rl.close()
    });
  });
}

// Subject
async function porteiro(...interessados) {
  while (true) {
    const resp = await obterResposta("Quem chegou? ");
    interessados.forEach((interessado) => {
      if (interessado.condicao(resp)) {
        interessado.acao(resp);
      }
    });
  }
}

// Observer
function organizadorFesta() {
  return {
    condicao: (resp) => resp.toLowerCase() === "aniversariante",
    acao: () => console.log("Surpresaaa!!!"),
  };
}

// Observer
function inquilino202() {
  return {
    condicao: (resp) => resp.toLowerCase() === "carteiro",
    acao: () => console.log("Correspondencia para o 202."),
  };
}

porteiro(organizadorFesta(), inquilino202());
