var arr = [1, 5, 8, 3, 9, 2, 7, 20, 12];

// var result = arr.find(function (value) {
//   return value === 9;
// });

// console.log(result);

// var result = arr.findIndex(function (value) {
//   return value === 12;
// });
// console.log(result);

// implementation of Find method

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}

var result = myFind(arr, function (value) {
  return value === 9;
});
console.log(result);

// inplementation o findIndex

function myFindIndex(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
}

var result1 = myFindIndex(arr, function (value) {
  return value === 12;
});
console.log(result1);
