// 1) Funcao como parametro para outra funcao
const executarQualquerCoisa = (fn) => fn.call?.()

executarQualquerCoisa(() => console.log("Executou"))
executarQualquerCoisa(3)

// 2) Retornar uma funcao a partir de outra funcao
const potencia = base => expoente => Math.pow(base, expoente)
const potenciaDe3 = potencia(3)
console.log(potenciaDe3(3))
console.log(potencia(4)(4))

const calc = x => y => fn => typeof fn === "function" && fn(x, y)

const somar = (x, y) => x + y
const subtrair = (x, y) => x - y
const multiplicar = (x, y) => x * y
const dividir = (x, y) => x / y

console.log("somar: ", calc(10)(5)(somar))
console.log("subtrair: ", calc(10)(5)(subtrair))
console.log("multiplicar: ", calc(10)(5)(multiplicar))
console.log("dividir: ", calc(10)(5)(dividir))
