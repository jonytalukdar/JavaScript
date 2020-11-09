function addAll() {
    sum = 0

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = addAll(1, 2, 3)
console.log(result)




function person(name, email) {
    return {
        name: name,
        email: email
    }
}

var p1 = person('joney talukdar', 'jonytalukdar30@gmail.com')

console.log(p1);