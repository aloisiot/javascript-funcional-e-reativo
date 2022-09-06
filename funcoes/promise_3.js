function randomNumberBetween(min, max, time = 1000) {
  if (min > max) [max, min] = [min, max];
  const n = Math.random() * (max - min + 1) + min;
  return new Promise((resolve) => {
    setTimeout(() => resolve(parseInt(n)), time);
  });
}

randomNumberBetween(10, 20)
  .then((n) => n * 10)
  .then((nX10) => nX10 / 4)
  .then(console.log);

function severalRandomNumbersBetween(min, max) {
  return Promise.all([
    randomNumberBetween(min, max, 200),
    randomNumberBetween(min, max, 300),
    randomNumberBetween(min, max, 600),
    randomNumberBetween(min, max, 1000),
    randomNumberBetween(min, max, 3000),
    randomNumberBetween(min, max, 150),
  ]);
}

const asc = (x, y) => x - y;
const desc = (x, y) => y - x;

severalRandomNumbersBetween(10, 100, 3000)
  .then((numbers) => numbers.sort(desc))
  .then(console.log);
