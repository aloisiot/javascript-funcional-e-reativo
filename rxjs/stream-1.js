import { interval } from "rxjs";

const i = interval(500);

const subscription = i.subscribe((n) => {
  const x = Math.pow(2, n);
  console.log(x);
  if (x > 1000) subscription.unsubscribe();
});
