var a = 'this is a strings'

// if(true){
//     if(true){
//         if(true){
//             if(true){
//                 if(true){
//                     var b = 'I am B'
//                 }
//             }
//         }
//     }
// }


// console.log(a);
// console.log(b);

// function x(){
//     // var a = 20
//     function y(){
//         // var a = 10
//         console.log(a);
//     }
//     console.log(a);
//     y()
// }

// x()

function test(n){
    function a(){
        return n%3 ==0
    }

    function b(){
        return n%5 == 0
    }

    if(a() && b()){
        console.log(n + ' is a divisable number with 3 and 5');
    }else{
        console.log(n + ' is not divisacbe with 3 and 5');
    }
}

test(15)


