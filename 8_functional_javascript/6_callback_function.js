function sample(a , b ,cb){
    var c = a + b
    var d = a - b
    var result = cb(c,d)
    return result
}

//sum

var result = sample(5 , 8 , function(c,d){
    return c + d
})
console.log(result)


//abstraction

 var result1 = sample(5 , 8 , function(c , d){
    return c - d
})
console.log(result1)

//multipication

var result2 = sample(5 , 8 , function(c , d){
    return c * d
})
console.log(result2)


// division

var result3 = sample(5 , 8 , function(c ,d){
    return c / d
})
console.log(result3)
