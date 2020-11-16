var persons = [
  {
    name: 'A',
    age: 21,
  },
  {
    name: 'B',
    age: 27,
  },
  {
    name: 'C',
    age: 23,
  },
  {
    name: 'D',
    age: 26,
  },
];

// persons.sort();
// console.log(persons);

//accending sorting

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

// decending sorting

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return -1;
  } else if (a.age < b.age) {
    return 1;
  } else {
    return 0;
  }
});
console.log(persons);

var arr = [1, -4, 4, 8, 2, 9, 3, 7, -7, 0, 3, 2, 9, -9, 4, 3];

// arr.sort()
// console.log(arr)

//decending sorting

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);

// accending sorting

arr.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);

// every function

var arr2 = [2, 5, 7, 2, 1, 6, 7, 9, 1, 4, 7, 8, 3, 1];

var result = arr2.every(function (value) {
  return value % 2 == 0;
});
console.log(result);

var result2 = arr2.every(function (value) {
  return value >= 0;
});
console.log(result2);

// some function

var result3 = arr2.some(function (value) {
  return value % 2 == 1;
});
console.log(result3);

var result4 = arr2.some(function (value) {
  return value < 0;
});
console.log(result4);
