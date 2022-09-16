const numbersStream = () => {
  return {
    init(fn) {
      let num = 0;
      const interval = setInterval(() => {
        fn(num++);
      }, 300);

      return {
        stop() {
          clearInterval(interval);
        },
      };
    },
  };
};

const nStream1 = numbersStream().init((n) => {
  console.log(`#1 ${n}`);

});
const nStream2 = numbersStream().init((n) => {
  console.log(`#2 ${n}`);

});

setTimeout(nStream1.stop, 1500);
setTimeout(nStream2.stop, 6000);
