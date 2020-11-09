// what is pure functions ??

// `** it returns the same result if given the same arguments**`
// `** is does not cause any observation side effects`


function sqr (n) {
    return n*n
}

console.log(sqr(3));
console.log(sqr(4));
console.log(sqr(5));



var n = 10
function change(){
    n=100
}

change()
console.log(n);


var point = {
    x : 12,
    y : 34
}

function printPoint(point){
    point.x = 100
    point.y = 200

    console.log(point);
}

printPoint(point)
console.log(point);
