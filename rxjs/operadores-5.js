import { Observable, of } from "rxjs";

const terminaCom = (final) => (recurso) =>
  new Observable((inscrito) => {
    recurso.subscribe((v) => {
      if (typeof v === "string" && v.endsWith(final)) {
        inscrito.next(v);
      }
    });
  });

of("Marcia Santos", "Joao Santos", "Carla Silva")
  .pipe(terminaCom("Santos"))
  .subscribe(console.log);
