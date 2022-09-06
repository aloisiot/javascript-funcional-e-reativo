const firstElement = (arrayOrString) => arrayOrString[0];
const toLowerCase = (string) => string.toLowerCase();

new Promise((resolve) => resolve(["Ana", "Talita", "Gabriela"]))
  .then(firstElement)
  .then(firstElement)
  .then(toLowerCase)
  .then(console.log);
