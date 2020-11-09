var arr = [4,7,2,6,8,10 ,4,5,45,9,57,34]

var find = 10
var isFound = false

for(var i = 0 ; i < arr.length ; i ++){
    if(arr[i] == find){
        console.log('data found index of ' + i);
        isFound = true
        break
    }  
}

if(!isFound){
    console.log('data not found');
}
