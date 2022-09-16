const pipe = (...fns) => (value) => {
  return fns.reduce((acc, fn) => fn(acc), value);
};

const chars = [
  ["o", "l", "a"],
  [" "],
  ["m", ["u"], ["n", "d", "o"]],
  ["!", "!", "!"],
];
const flat = (level) => (arr) => arr.flat(level);
const join = (sep) => (arr) => arr.join(sep);
const multiplyChars = (n) => (text) => {
  return text
    .split("")
    .map((char) => Array(n).fill(char).join(""))
    .join("");
};

const handler = pipe(
  flat(Infinity),
  join(""),
  multiplyChars(3),
);

console.log(handler(chars));
