let r;

const identity = (x) => x;
r = identity(2);
r;

const self = (λ) => λ(λ);
r = self(identity);
r;

const first = (f) => (l) => f;
r = first("FIRST")("LAST");
r;

let last = (f) => (l) => l;
r = last("FIRST")("LAST");
r;

const flip = (λ) => (f) => (l) => λ(l)(f);
last = flip(first);
r = last("FIRST")("LAST");
r;

// -------------
//   BOOLEAN
// -------------

/*
* Um predicado é uma função que retorna um valor booleano.
* O predicado mais fundamental é ISZERO, que retorna TRUE se
* o seu argumento é o numeral de Church 0, e FALSE se
* seu argumento for qualquer outro numeral de Church.
*/

// TRUE
const T = first;
T.inspect = () => "λ: TRUE";

// FALSE
const F = last;
F.inspect = () => "λ: FALSE";

// NOT
const NOT = (λ) => flip(λ)(T)(F);
r = NOT(F);
r;
r = NOT(T);
r;

// AND
const AND = (λx) => (λy) => λx(λy)(F);
r = AND(T)(T);
r;
r = AND(T)(F);
r;
r = AND(F)(T);
r;
r = AND(F)(F);
r;

// OR
const OR = (λx) => (λy) => λx(T)(λy);
r = OR(T)(T);
r;
r = OR(T)(F);
r;
r = OR(F)(T);
r;
r = OR(F)(F);
r;

// EQUALS
const EQ = (λx) => (λy) => λx(λy)(NOT(λy));
r = EQ(T)(T);
r;
r = EQ(T)(F);
r;
r = EQ(F)(T);
r;
r = EQ(F)(F);
r;

// XOR
const XOR = (λx) => (λy) => NOT(EQ(λx)(λy));
r = XOR(T)(T);
r;
r = XOR(T)(F);
r;
r = XOR(F)(T);
r;
r = XOR(F)(F);
r;
