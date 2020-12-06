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

var Reactangle = function (width, height) {
  this.width = width;
  this.height = height;
  (this.draw = function () {
    console.log('this is rectangle');
    this.print();
  }),
    (this.print = function () {
      console.log('this is width :' + this.width);
      console.log('this is height : ' + this.height);
    });
};

// var rect1 = new Reactangle(12, 34);
// rect1.draw();

// var rect2 = new Reactangle(34, 67);
// rect2.draw();

// var rect3 = new Reactangle(34, 90);
// rect3.draw();

// new keyword

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}

var rect4 = myNew(Reactangle, 45, 67);
rect4.draw();
