function add(a, b, c) {
  return a + b + c;
}

// console.log(add(1122,34,56))

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = currying(12)(12)(12);
console.log(result);
