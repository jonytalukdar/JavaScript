var x = 55;

function sample() {
  var x = 12;
  console.log(x);
  function nested() {
    var y = 45;
    console.log(y);
  }
  // console.log(y); //error
  nested();
}

sample();
