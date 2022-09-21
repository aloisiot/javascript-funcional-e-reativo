import { timer } from "rxjs";

// Espera 3s
// Gera um número na sequência a cada 0.5s
const subscription = timer(3000, 500).subscribe(console.log);

// Cancela a subscrição depois de 10s
setTimeout(() => {
  subscription.unsubscribe();
}, 10000);
