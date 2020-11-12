var arr = [4, 6, 7, 2, 8, 9, 54, 23, 5, 8, 3];

// var filteredArr = arr.filter(function (value) {
//   return value % 2 == 0;
// });

// console.log(filteredArr);

function filteredArr(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var even = filteredArr(arr, function (value) {
  return value % 2 == 0;
});
console.log(even);

var odd = filteredArr(arr, function (value) {
  return value % 2 == 1;
});
console.log(odd);

var greaterThan10 = filteredArr(arr, function (value) {
  return value > 10;
});
console.log(greaterThan10);
