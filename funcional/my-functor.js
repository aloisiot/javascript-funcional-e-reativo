// Functors são 'wrapers' de um valor e implementam o método map

import deepCopy from "./deep-copy.js";

function safeType(value) {
  const wraper = Object.create(null);
  Object.defineProperty(wraper, "value", {
    enumerable: false,
    writable: false,
    configurable: false,
    value,
  });
  Object.setPrototypeOf(wraper, {
    map(fn) {
      if (this.value === null || this.value === undefined) {
        return safeType(null);
      } else {
        const copy = deepCopy(this.value);
        return safeType(Array.isArray(copy) ? copy.map(fn) : fn(copy));
      }
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  });
  return wraper;
}

const obj = safeType({ name: "Larissa", age: 34 });
const mappedObj = obj.map((o) => {
  return { ...o, name: "Marcela" };
});
console.log(obj.value);
console.log(mappedObj.value);

const arr = safeType([1, 2, 3]);
const mappedArray = arr.flatMap((val) => val + 10);
console.log(arr.value);
console.log(mappedArray);
