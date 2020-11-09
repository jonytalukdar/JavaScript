var obj = {
    math : 87,
    bangla : 86,
    english : 85 
}

// console.log(Object.keys(obj));  // find keys in object
// console.log(Object.values(obj)); // find values in object
// console.log(Object.entries(obj)); // find full of details in obeject

// to make new copy for separate edit
var obj2 = Object.assign( {} , obj)
obj2.math = 85


// to make new copy and edit
var obj3 = Object.create(obj)
obj3.math = 80
obj3.bangla = 90
obj3.english = 88


console.log(obj);
console.log(obj2);
console.log(obj3);


