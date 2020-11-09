
var isRunning = true



for(; ;){

    var rand = Math.floor(Math.random() * 30 + 1)
    if(rand== 8){
        console.log('Winner Winner Chicken Dinner');
        break
    }else{
        console.log('you have got = ' + rand);
    }

}