import { Observable } from "rxjs";

function getNumAleatorio(min, max) {
  if (min > max) [min, max] = [max, min];
  const n = Math.random() * (max - min) + min;
  return +n.toFixed(0);
}

function gerarNumerosAleatorios(min, max) {
  return new Observable((subscriber) => {
    setInterval(() => {
      const n = getNumAleatorio(min, max);
      subscriber.next(n);
    }, 200);
  });
}

function gerarNumerosSequencia(min, max) {
  if (min > max) [min, max] = [max, min];
  return new Observable((subscriber) => {
    Array(max - min + 1)
      .fill()
      .map((_, i) => i + min)
      .forEach(n => subscriber.next(n));
    subscriber.complete()
  });
}

gerarNumerosAleatorios(10, 100).subscribe(console.log);
gerarNumerosSequencia(10, 100).subscribe(console.log);
