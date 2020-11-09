// function add(a, b) {
//     var result = a + b
//     console.log(result);

// }

// add(12 , 10)

// function sub(a, b) {
//     var result = a - b
//     console.log(result);
// }

// sub(12, 2)
// sub(23 , 10)

var arr1 = [1, 2, 3, 4, 5 ,12 ,10 ,34]
var arr2 = [3, 4, 5, 6, 7]
var arr3 = [4, 5, 6, 7, 8]

function sumOfArray(arr) {
    var sum = 0
    for( var i = 0 ; i < arr.length ; i++){
        console.log(arr[i] + ' + ' + sum + ' = ' + (arr[i]+sum));
        sum+=arr[i]
    }
}

sumOfArray(arr1)

sumOfArray(arr2)