// closure is when a function is able to remember and access its lexical scope
// even when that function executing outside its lexical scope

// able to remember and access its lexical scope
// when that function executing outside its lexical scope

// function test() {
//   var msg = 'We are learning lexical scope and closure';

//   function sayMsg() {
//     console.log(msg);
//   }
//   sayMsg();
// }

// test();

function test() {
  var msg = 'We are learning lexical scope and closure';

  return function () {
    console.log(msg);
  };
}

var sayMsg = test();
sayMsg();
