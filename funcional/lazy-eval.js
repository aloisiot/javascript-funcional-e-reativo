const eager = (a, b) => {
  const end = Date.now() + 1000;
  while (Date.now() < end) {}
  const c = Math.pow(a, 3);
  return b + c;
};

const lazy = (a) => {
  const end = Date.now() + 1000;
  while (Date.now() < end) {}
  const c = Math.pow(a, 3);
  return (b) => b + c;
};

console.time("#1")
console.log(eager(4, 200))
console.log(eager(4, 300))
console.log(eager(4, 400))
console.timeEnd("#1")

console.time("#2")
const lazy4 = lazy(4)
console.log(lazy4(200))
console.log(lazy4(300))
console.log(lazy4(400))
console.timeEnd("#2")