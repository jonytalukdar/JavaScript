function makeWords(text) {
  //   let str = text.trim();
  //   let words = str.split(' ');
  //   return words;
  try {
    let str = text.trim();
    let words = str.split(' ');
    return words;
  } catch (error) {
    console.log('this is invalid input');
  }
}

// let result = makeWords('hello this is very easy to learnign javascript ');
let result = makeWords(3214);
console.log(result);
