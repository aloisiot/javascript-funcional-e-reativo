// Os dois tipos...

// 1. Operadores de criação (Criational op.)
import { of } from "rxjs";

// 2. Operadores encadeaveis (Pipeable op.)
import { concatAll, first, last } from "rxjs";

of("a", "b", "c", [1, 2, 3, 4])
  .pipe(last(), concatAll(), first())
  .subscribe(console.log);
