// function testMe() {
//   console.log(this);
// }
// testMe();

// let obj = {
//   name: 'Joney Talukdar',
//   age: 21,

//   print: () => {
//     console.log(this);
//   },
// };

// obj.print();

let obj = {
  name: 'joney talukdar',

  print: function () {
    // let self = this;
    console.log(this.name);
    setTimeout(() => {
      //   console.log(this);
      console.log(`Hello ${this.name}`);
    }, 3000);
  },
};
obj.print();
