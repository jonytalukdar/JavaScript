var obj = {
    bangla : 87,
    english : 83,
    math : 90,
    higherMath : 89
}

// console.log('math' in obj);
// console.log('physics' in obj);

for ( var i in obj){
    console.log(i + ' : ' + obj[i]);
}


