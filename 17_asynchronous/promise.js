// let pro = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, 'one');
// });
// let pro2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'two');
// });

// pro.then((v) => {
//   console.log(v);
// });
// pro2.then((v) => {
//   console.log(v);
// });
function getIphone(isPass) {
  let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPass === true) {
        resolve('i have got i phone');
      } else {
        reject('you have failed');
      }
    }, 3000);
  });
  return pro;
}

// let result = getIphone(true) its not working beacause its a asynchronous

// console.log(getIphone(false));

getIphone(false)
  .then((res) => {
    console.log(res);
  })
  .catch('you have failed');
