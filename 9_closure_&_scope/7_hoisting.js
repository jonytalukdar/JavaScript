var a = 100;

// newPrint(a);

print(12);

var newPrint = print;

newPrint(45);

function print(a) {
  console.log(a);
}

print(a);

//creational phase
// a = undefined
//  print = ref

// executional phase
// a = 100
