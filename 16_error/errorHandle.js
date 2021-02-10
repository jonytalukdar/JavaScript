function changeIt(v) {
  let result = Number.parseInt(v);
  if (!result) {
    return 'Please provide a value which is avail to convert to It';
  }
  return result;
}

// let result2 = changeIt('4342.45');
let result2 = changeIt('hewth;ohfsdlk');
console.log(result2);
