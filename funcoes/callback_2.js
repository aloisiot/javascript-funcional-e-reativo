const fs = require("fs")
const path = require("path")

const caminho = path.join(__dirname, "..", "data", "dados.txt")
const exibirConteudo = (_, conteudo) => console.log(conteudo.toString().split("\n"))
fs.readFile(caminho, exibirConteudo)

const dados = fs.readFileSync(caminho)
console.log(dados.toString().split("\n"))
