// &&, || , !

//  && and operator

// a && b 

// true && true = true
// true && false = false
// false && true = false
// false && false = false


// || or operator

// a || b

// true || true = true
// true || false = true
// false || true = true
// false || false = false


// ! not operator

// true = false 
// false = true

// && 

// var id = true
// var pass = false

// if(id && pass){
//     console.log('your are  permitted');

// }else{
//     console.log('you are not permitted');
// }


// || 

// var id = true
// var pass = false

// if(id || pass){
//     console.log('you are permitted');
// }

// var j = true
// var c = true

// console.log(!j==c);

var a = 40
var b =34
var c = 55
var d = 50

if(a>b && c>d){
    console.log('a is greater than b and c is greater than d');
}else{
    console.log('at least one condition is false');
}

if(a<b || c<d){
    console.log('a is greater than b or c is greater than d');
}else{
    console.log('two  condition is false');
}

var n = false
console.log(!n);






