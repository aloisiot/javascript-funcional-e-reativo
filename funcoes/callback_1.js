const printSoma = (a, b) => console.log(a + b) 
const printSubtracao = (a, b) => console.log(a - b) 
const exec = (fn, a, b) => typeof fn == "function" && fn(a, b)

exec(printSoma, 3, 4)
exec(printSubtracao, 3, 4)
