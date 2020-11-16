// loop recursive

function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log('Hey, I am calling');
  sayHi(n - 1);
}

sayHi(12);

// sum

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(10));

// factorial

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(12));

// sumOfArray

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}
console.log(sumOfArray(arr, arr.length - 1));
