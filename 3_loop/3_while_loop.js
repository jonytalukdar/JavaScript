
// var i = 0
// while(i<10){
//     console.log( i + (' joney talukdar'));
//     i++
// }

var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random() * 30 + 1)
    if(rand== 8){
        console.log('Winner Winner Chicken Dinner');
        isRunning = false
    }else{
        console.log('you have got = ' + rand);
    }
}