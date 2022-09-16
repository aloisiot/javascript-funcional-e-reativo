// Os dois tipos...

// 1. Operadores de criação
import { of } from "rxjs";

// 2. Operadores encadeaveis (Pipe op.)
import { map, last } from "rxjs";

of("a", "b", "c")
  .pipe(last())
  .pipe(map((s) => s.toUpperCase()))
  .subscribe(console.log);
