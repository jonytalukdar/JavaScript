setTimeout(function (){
    console.log('i will come after 4 second');
} , 4000)


var addition = function( a , b) {
    return a + b
}

addition(12 ,12)
var another = addition
console.log(another(12,12));
