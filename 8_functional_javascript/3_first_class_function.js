// firsts class function

function add ( a , b){
    return a + b
}

// 1. A function can be stored in a variable

var sum = add
console.log(sum(12,12));
console.log(typeof sum);

// 2. A function can be stored in an Array 

var arr = []
arr.push(sum)
console.log(arr);
console.log(arr[0](4,4));

// 3. A function can be stored in an Object

var obj = {
    sum : add
}
console.log(obj);
console.log(obj.sum(7,8));


// 4. We can create a function as we want 

setTimeout(function (){
    console.log('i have created,,,');
} , 2000)

// 5. We can pass function as an arguments
// 6. We can return funtion from another function

