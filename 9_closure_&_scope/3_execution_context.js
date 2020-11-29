// execution context

function a() {
  b();
  console.log('I am function a');
}

function b() {
  d();
  console.log('I am function b');
}

function c() {
  console.log('I am funtion c');
}

function d() {
  c();
  console.log('I am function d');
}

var x = 100;
a();
console.log('I am Global');

// execution of c function context
// execution of b function context
//execution of a function context
//execution of global context
