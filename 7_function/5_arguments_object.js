function test(a, b, c) {
    // console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

test(12, 20, 30)


sum = 0

function addAll() {
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);

}

addAll(2, 4, 5)