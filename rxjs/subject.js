import { Observable, Subject } from "rxjs";

const comObserver = () => {
  return new Observable((sub) => sub.next("Obs... " + Math.random()));
};

const comSubject = () => {
  const sub = new Subject();
  setTimeout(() => {
    sub.next("Sub... " + Math.random());
  }, 1000);
  return sub;
};

const comObs = comObserver();
comObs.subscribe(console.log);
comObs.subscribe(console.log);

const comSub = comSubject();
comSub.subscribe(console.log);
comSub.subscribe(console.log);
