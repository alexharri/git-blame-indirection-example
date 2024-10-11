const { MPP_ACTIVE } = process.env;

function doSomeFunkyStuff() {
  // ...
}

if (MPP_ACTIVE === "true") {
  doSomeFunkyStuff();
}
