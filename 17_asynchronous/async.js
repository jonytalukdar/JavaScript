console.log('This is One');
console.log('This is Two');
setTimeout(function () {
  console.log('This is Three');
}, 3000);
setTimeout(() => {
  console.log('This is Four');
}, 5000);
console.log('This is Six');
