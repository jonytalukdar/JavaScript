

var a = 10

function b() {
    var x = 12

    return function() {
        console.log(x);
    }
}

var abc = b()
console.dir(abc)