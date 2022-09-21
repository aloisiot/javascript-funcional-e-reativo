import { asyncScheduler, from, observeOn } from "rxjs";

console.log("Antes...");

from([1, 2, 3, 4, 5])
    .pipe(observeOn(asyncScheduler))
    .subscribe(console.log);

console.log("Depois...");
