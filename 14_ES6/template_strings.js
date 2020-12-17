var str = 'this is aweosme to learn somethin new';

var str2 = `this is i awesome to learn somethin nedw
so very fast we are learning   javascrip `;

console.log(str2);

var age = 1;
var name = 'Joney Talukdar';

console.log('My name is ' + name + ' and I am ' + age + ' years old');

console.log(
  `My name is ${name} and I am ${age} year old , I am ${
    age < 18 ? 'not' : ''
  } adult`
);

console.log(name.padStart(12));
console.log(name.padEnd(12));
console.log('S'.repeat(12));
