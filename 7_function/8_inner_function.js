// function greatings(great , name) {
//     function sayHi(){
//         console.log(great , name);
//     }

//     sayHi()
// }

// greatings('good morning' , 'joney talukdar')

function greatings(great , name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }
    var message = great + ' ' + getFirstName()
    console.log(message);
}

greatings('good morning ')