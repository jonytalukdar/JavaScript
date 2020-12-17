// function Person(name) {
//   this.name = name;
// }

// var result = new Person('Joney Talukdar');
// console.log(result);

var obj = {
  name: 'Joney Talukdar',
};

// console.log(obj);

// for (var i in obj) {
//   console.log(i);
// }

// console.log(Object.keys(obj));

// var descriptor = Object.getOwnPropertyDescriptor(obj, 'name');

// console.log(descriptor);

// var baseObj = Object.getPrototypeOf(obj);
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString');
// console.log(descriptor);

Object.defineProperty(obj, 'name', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'Jerry Talukdar',
});
console.log(obj);
