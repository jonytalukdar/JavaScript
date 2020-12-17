// var vs let vs const

// let change = 23;
// change = 35;
// console.log(change);

// const a = 12;
// a = 123;
// console.log(a);

if (true) {
  let a = 12;
}
console.log(a);

for (var i = 0; i < 10; i++) {}
console.log(i);

{
  let iamLet = 'i am let variable';
}
console.log(iamLet);
