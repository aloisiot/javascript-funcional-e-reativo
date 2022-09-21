import { from, Observable } from "rxjs";

// Operadores encadeaveis (Pipeable op.)

function primeiro() {
  return (fonte) => {
    return new Observable((subscriber) => {
      fonte.subscribe({
        next(v) {
          subscriber.next(v);
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return (fonte) => {
    let ult;
    return new Observable((subscriber) => {
      fonte.subscribe({
        next: (v) => (ult = v),
        complete() {
          if (ult) subscriber.next(ult);
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4]).pipe(primeiro()).subscribe(console.log);
from([1, 2, 3, 4]).pipe(ultimo()).subscribe(console.log);
