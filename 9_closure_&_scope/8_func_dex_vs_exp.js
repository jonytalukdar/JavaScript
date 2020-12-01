abc();

function abc() {
  console.log('this is function abc');
}

// newAbc(); // error

var newAbc = function () {
  console.log('this is function newAbc');
};

newAbc();

// creational phase
// abc = Reference;
// newAbc = undefined;

// executional phasee
// abc =  result
// newAbc = undefined
