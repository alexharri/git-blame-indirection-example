function doSomeFunkyStuff() {
  // ...
}

const { MPP_ACTIVE } = process.env;

if (MPP_ACTIVE != null) {
  doSomeFunkyStuff();
}
