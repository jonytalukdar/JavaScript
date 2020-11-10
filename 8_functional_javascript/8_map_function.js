var arr = [1, 2, 3, 4];

var powerArr = arr.map(function(value){
    // return Math.floor(Math.random()*12 + 1)
    return Math.pow(value , 4)
})

console.log(arr)
console.log(powerArr)

function myMap(arr){
    var newArr = []
    for(var i = 0 ; i < arr.length ; i++){
        var temp = Math.pow(arr[i] , 4)
        newArr.push(temp)
    }

    return newArr
}

console.log(myMap(arr))


// map implements



function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

var sqr = myMap(arr, function (value) {
  return value * 2;
});

var qb = myMap(arr, function (value) {
  return value * 3;
});

var power = myMap(arr, function (value) {
  return value * 4;
});

console.log(arr);
console.log(sqr);
console.log(qb);
console.log(power);
