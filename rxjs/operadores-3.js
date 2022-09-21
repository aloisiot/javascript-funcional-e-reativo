import { Observable } from "rxjs";

// Operador de criação.
function elementosComDelay(tempo, ...el) {
  return new Observable((subscriber) => {
    (el || []).forEach((e, i) => {
      setTimeout(() => {
        subscriber.next(e);
        if (i + 1 === el.length) subscriber.complete();
      }, tempo * (i + 1));
    });
  });
}

elementosComDelay(100, 2, 4, 3, 15, 6, 3, 4).subscribe(console.log);
