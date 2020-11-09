

while(true){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand== 8){
        console.log('Winner Winner Chicken Dinner');
        break
    }else{
        console.log('you have got = ' + rand);
    }
}

for(var i = 1 ; i <=100 ; i++){
    if(i%50==0){
        break
    }else{
        console.log(i);
    }
}