function deepCopy(obj) {
  if (typeof obj !== "object") return obj;
  const copy = Object.create(Array.isArray(obj) ? [] : {});
  Object.setPrototypeOf(copy, Object.getPrototypeOf(obj));
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

const o = {
  n: "Initial",
};

const c = deepCopy(o);
o.n = "Change";
console.log("o ", o);
console.log("c ", c);

const a = [1, 2, 3, 4];

const ac = deepCopy(a);
a[0] = 1000;
console.log("a", a);
console.log("ac", ac);
