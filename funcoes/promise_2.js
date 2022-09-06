function waitFor(time = 2000) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Resolved after some time.`), time)
  );
}

waitFor(2000)
  .then(() => waitFor(1000))
  .then(() => waitFor(1000))
  .then(() => waitFor(1000))
  .then(console.log);
