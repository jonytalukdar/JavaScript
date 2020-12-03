for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(() => {
      console.log(n);
    }, 1000 * n);
  })(i);
}
