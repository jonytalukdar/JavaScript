var point = {
    math:67,
    higher: 87,
    chemistry : 86
}

console.log(point.higher); // dot notation
console.log(point.chemistry);
console.log(point.chemistry + point.higher);

console.log(point['chemistry']);  // array notation
console.log(point['higher']);
console.log(point['higher'] + point['math']);