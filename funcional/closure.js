// O conseito closure se aplica quando
// uma função é capaz de "lembrar" seu escopo léxico
// mesmo quando a função é executada fora desse escopo.

const incrementarTres = require("./closure-escope")

const x = 1000;
console.log(incrementarTres());