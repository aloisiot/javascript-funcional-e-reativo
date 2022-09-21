import { Observable, of } from "rxjs";

const terminaCom = (final) => (recurso) =>
  new Observable((inscrito) => {
    recurso.subscribe({
      next(v) {
        if (typeof v === "string" && v.endsWith(final)) {
          inscrito.next(v);
        }
      },
      complete: () => inscrito.complete(),
      error: (e) => inscrito.error(e),
    });
  });

of("Marcia Santos", "Joao Santos", "Carla Silva")
  .pipe(terminaCom("Santos"))
  .subscribe(console.log);
