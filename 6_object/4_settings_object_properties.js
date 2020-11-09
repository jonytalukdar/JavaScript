var point = {
    x : 12,
    y : 34,
    z : 56,
    e : 67
}

point.x = 90
point.a = 'joney'
console.log(point);
console.log(point.e);

var prop = 'e'
point[prop] = 55
console.log(point);