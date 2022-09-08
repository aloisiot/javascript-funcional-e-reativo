// Functors são 'wrapers' de um valor e implementam o método map
const deepCopy = require("./deep-copy");

// wrapper
function safeType(value) {
  return {
    value,
    invalid() {
      this.value === null || this.value === undefined;
    },
    map(fn) {
      return this.invalid()
        ? safeType(null)
        : safeType(fn(deepCopy(this.value)));
    },
  };
}

const result = safeType("Texto legal!!")
  .map((t) => t.toUpperCase())
  .map((t) => t.split("").join(" "));

console.log(result.value);
