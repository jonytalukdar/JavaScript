// var rect = {
//   width: 100,
//   height: 50,
//   draw: function () {
//     console.log('this is rectangle');
//     this.print();
//   },

//   print: function () {
//     console.log('this is width :' + this.width);
//     console.log('this is height : ' + this.height);
//   },
// };

// rect.draw();

// // rect.height = 34;

// // rect.draw();

// // this keyword

// function myFunction() {
//   console.log(this);
// }

// new myFunction();

// var another = {
//   width: 34,
//   height: 56,
//   anotherPrint: rect.print,
// };

// another.anotherPrint();
// console.log(another.height);

// var rect = {
//   width: 100,
//   height: 50,
//   draw: function () {
//     console.log('this is rectangle');
//     this.print();
//   },

//   print: function () {
//     console.log('this is width :' + this.width);
//     console.log('this is height : ' + this.height);
//   },
// };

// factory pattern

// var createNewRect = function (width, height) {
//   return {
//     width: width,
//     height: height,
//     draw: function () {
//       console.log('this is rectangle');
//       this.print();
//     },

//     print: function () {
//       console.log('this is width :' + this.width);
//       console.log('this is height : ' + this.height);
//     },
//   };
// };

// var rect1 = createNewRect(12, 34);
// rect1.draw();

// var rect2 = createNewRect(56, 78);
// rect2.draw();

// var rect3 = createNewRect(100, 50);
// rect3.draw();

// constructor pattern

// var Reactangle = function (width, height) {
//   this.width = width;
//   this.height = height;
//   (this.draw = function () {
//     console.log('this is rectangle');
//     this.print();
//   }),
//     (this.print = function () {
//       console.log('this is width :' + this.width);
//       console.log('this is height : ' + this.height);
//     });
// };

// var rect1 = new Reactangle(12, 34);
// rect1.draw();

// var rect2 = new Reactangle(34, 67);
// rect2.draw();

// var rect3 = new Reactangle(34, 90);
// rect3.draw();

// // new keyword

// function myNew(constructor) {
//   var obj = {};
//   Object.setPrototypeOf(obj, constructor);
//   var argsArray = Array.prototype.slice.apply(arguments);
//   constructor.apply(obj, argsArray.slice(1));

//   return obj;
// }

// var rect4 = myNew(Reactangle, 45, 67);
// rect4.draw();

// constructor poverty

// var str = new String('this is a strings');
// console.log('My strings is : ' + str);

// function test() {
//   console.log('something');
// }

// test();
// console.log(test.name);
// console.log(test.length);

// var Rect = Function(
//   'width',
//   'height',
//   `  this.width = width;
//   this.height = height;
//   (this.draw = function () {
//     console.log('this is rectangle');
//     this.print();
//   }),
//     (this.print = function () {
//       console.log('this is width :' + this.width);
//       console.log('this is height : ' + this.height);
//     });`
// );

// var rect5 = new Rect(12, 4);
// rect5.draw();
// console.log(typeof rect5);

// function myFunc(c, d) {
//   console.log(this);
//   console.log(this.a + this.b + c + d);
// }

// call , apply
//bind

// myFunc.call({ a: 23, b: 12 }, 10, 5);
// myFunc.apply({ a: 200, b: 100 }, [12, 12]);
// myFunc();

// var test = myFunc.bind({ a: 12, b: 12 }, 12, 12);
// test();

// pass by value vs pass by reference
// pass by call vs pass by reference

// var n = 12;

// function change(n) {
//   n = n + 100;
//   console.log(n);
// }
// change(n);
// console.log(n);

// var obj = {
//   a: 23,
//   b: 34,
// };

// function changeObject(obj) {
//   obj.a = obj.a + 100;
//   obj.b = obj.b + 100;
//   console.log(obj);
// }

// changeObject(obj);

// console.log(obj);

var Reactangle = function (width, height) {
  // var name = 'joney'

  this.width = width;
  this.height = height;
  var position = {
    x: 56,
    y: -100,
  };

  var print = function () {
    console.log('this is width :' + this.width);
    console.log('this is height : ' + this.height);
  }.bind(this);

  // this.getPosition = function () {
  //   return position;
  // };

  this.draw = function () {
    console.log('this is rectangle');
    print();
    console.log('Position x : ' + position.x, 'position y : ' + position.y);
  };

  Object.defineProperty(this, 'position', {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rect7 = new Reactangle(12, 3);
rect7.draw();
// rect7.getPosition();
// console.log(rect7.getPosition());
rect7.position = {
  x: 234,
  y: 567,
};
console.log(rect7.position);
