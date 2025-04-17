// String
console.log("hello world"); //Single quote
console.log("hellow world"); // Double quote
console.log('"hello world"');
console.log("'hello world'");
console.log(`"'Hello world'"`); // backstrop
console.log("99");

// Number
console.log(99); // inspector console will show number as purple color and string as while color
console.log(-99.99);
console.log(1 + 1);
console.log(1 - 1);
console.log(3 * 2);
console.log(4 / 2);
console.log(4 % 2); // Mod
console.log(5 % 2); // Mod
console.log(3 ** 4); // 3*3*3*3
console.log("true"); // while color since it's a string
console.log(true); // puprle color since it's a boolean
console.log(false);

// null / undefined
console.log(null);
console.log(undefined);

// NaN - Not a Number
console.log(NaN);
console.log(4 / "a");

// inline comment
/*
Block comment
*/

// Javascript is a dynmaic language. It doesn't require type declaration
const name = "Steven"; // Declare with 'const' - Cannot re-assaign value after declaration
let age = 25; // Declare with 'let' - you can re-assaign value after declaration

age = 26;

const firstName = "Steven"; // naming convention - camelCase
const lastName = "Duo";
// more naming convention examples
// const first_name = "Steven"; // snake_case
// const firstName = "Steven"; // camelCase
// const FirstName = "Steven"; // PascalCase
// https://medium.com/@code.ceeker/naming-conventions-camel-case-pascal-case-kebab-case-and-more-dc4e515b9652

// String concat
const fullName1 = firstName + " " + lastName; // old way
console.log(fullName1);
const fullName2 = `${firstName} ${lastName}`; // commonly used
console.log(fullName2);

// Logic operator
console.log("true && true = ", true && true); // And
console.log("true && false = ", true && false); //And
console.log("true || false = ", true || false); // Or
console.log("false || false = ", false || false); // Or
console.log("!true", !true);
console.log("!false", !false);

// Comparison
console.log("---- Comparision ----");
console.log("3 > 2", 3 > 2);
console.log("3 < 2", 3 < 2);
console.log("2 <= 2", 2 <= 2);
console.log("3 >= 2", 2 >= 2);

console.log(`firstName == 'Steven'`, firstName == "Steven");
console.log(`firstName === 'Steven'`, firstName === "Steven");

console.log(` 1 == '1' `, 1 == "1");
console.log(` 1 === '1' `, 1 === "1");
// Never use double equal sign '==', always use `===`

age = 27;
//Control flow
if (age === 26) {
  console.log("the age is 26");
} else if (age === 25) {
  console.log("the age is 25");
} else if (age === 24) {
  console.log("the age is 24");
} else {
  console.log("the age is not correct");
}

if (age > 25 && age < 30) {
  console.log("age is between 25 and 30");
}

//Switch - not use often - similar to if else
const day = "Monday";

switch (day) {
  case "Monday": {
    console.log("it is Monday");
    break;
  }
  case "Tuesday": {
    console.log("it is Tuesday");
    break;
  }
  default:
    console.log("it is other day");
}

//Ternary  Operator
// let dayNumber = 0
// if(day === 'Monday') {
//     dayNumber = 1
// } else {
//     dayNumber = -1
// }

let dayNumber = day === "Monday" ? 1 : -1;

// Loops
console.log("----- Loops -----");

// for loop
console.log("for loops");

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
    // break;
  }
  console.log("For loop; i=", i);
}

// While loop
console.log("----- While loop-----");
let n = 0;
while (n < 5) {
  console.log("while loop n value:", n);
  n++;
  // continue;
  // break;
}

// Truth & Flasy value

let value = 0;
// falsy: false, null, undefined, NaN, '' empty string, 0

if (value) {
  console.log("it is a Truthy value");
} else {
  console.log("it is Falsy value");
}

// Function
// Similar to high school math function
// f(x) = 2x + 1
// f(3) = 7
// f(x, y) = 3x + 4y
// f(3, 5) = 29

function calculate(x, y) {
  console.log("the function is executed", x, y);
  const result = x * 2 + y * 3;
  console.log(result);
  return result;
}

const calcualteResult1 = calculate(2, 3);
const calcualteResult2 = calculate(3, 4);
console.log("calcualteResult1", calcualteResult1);
console.log("calcualteResult2", calcualteResult2);

// Array
const array1 = [0, 1, 2, 3, 4, 5];
console.log(array1);

console.log(array1.length);

// JS is a 0-based indexing language
console.log("array1[1]", array1[1]);

array1[0] = 99;
console.log(array1);

array1[6] = 100;
console.log(array1);

// iterate the array
for (let i = 0; i < array1.length; i++) {
  console.log(`array[${i}]`, array1[i]);
}

// array manipulate
array1.push(101); // add an element to the end of array
console.log(array1);
array1.pop(); // pop out the last element from the end of array
console.log(array1);
array1.unshift(-1); // insert element at the head of array
console.log(array1);
array1.shift(); // remove the first element from the array
console.log(array1);

// Object / Hash / Key - Value pairs

const person = {
  firstName: "Steven",
  lastName: "Zhao",
  age: 25,
  eat: function (food) {
    console.log("eat food", food);
  },
  hobbies: ["Football", "Baseball"],
  address: {
    street: "123 Road",
    country: "China",
    phone: {
      areaNumber: "001",
      number: "123456",
    },
  },
};

console.log(person);
console.log(person.firstName);
person.eat("burger");
console.log(person.hobbies[1]);

console.log(person.address.phone.number);

person.company = "Google";
person.age = 26;
console.log(person);

let propertyKey = "firstName";

console.log(person.firstName, person[propertyKey]);

// Implement a bill calculator

// Each bill is an object that has prices and taxRate
// { prices: [5, 15, 33], taxRate: 1.13}
// a bill subtotal is (sum of prices) * taxRate

// should have a getSubTotal function

// should have a calcTips function that
// if a bill is less than 30, return 0
// if a bill is greater than or equal to 30 and less than 300,return bill subTotal * 0.1
// if a bill is greater than or equal to 300, return subTotal * 0.25;

// The bill calculator should take an array of bills as input and return the array of total(billSubtotal + tip);
// The bill calculator function should be named as `billCalculator`

const bills = [
  { prices: [5, 15, 33], taxRate: 1.13 },
  { prices: [3], taxRate: 1.15 },
  { prices: [150, 77, 68], taxRate: 1.05 },
];

function sum(arrNum) {
  let result = 0;
  for (let i = 0; i < arrNum.length; i++) {
    result = result + arrNum[i];
  }
  return result;
}

function getSubtotal(bill) {
  return sum(bill.prices) * bill.taxRate;
}

function getTips(subtotal) {
  if (subtotal < 30) {
    return 0;
  } else if (subtotal >= 30 && subtotal < 300) {
    return subtotal * 0.1;
  } else {
    return subtotal * 0.25;
  }
}

function billCalculator(bills) {
  let result = 0;
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const subtotal = getSubtotal(bill);
    const tips = getTips(subtotal);
    const billResult = subtotal + tips;
    result += billResult;
  }
  return result;
}

console.log(billCalculator(bills));


// callback function
function displayFullName(name) {
  console.log(`Fullname is:`, name);
}

function getFullName(firstName, lastName, displayNameFunc) {
  const fullName = `${firstName} ${lastName}`;
  displayFullName(fullName);
  return fullName;
}

const firstName2 = "Steven";
const lastName2 = "Zhao";

getFullName(firstName, lastName, function(name){
  // anonymous function
  console.log(`Fullname is:`, name);
});




//array

console.log("----- Array -----");
const people = [
  { firstName: "Steven", lastName: "Jobs", age: 25 },
  { firstName: "Bill", lastName: "Gates", age: 30 },
  { firstName: "Elon", lastName: "Musk", age: 35 },
  { firstName: "Mark", lastName: "Zuckerberg", age: 40 },
  { firstName: "Larry", lastName: "Page", age: 45 }
];

// for (let i = 0; i < people.length; i++) {
//   const person = people[i];
//   const fullName = `${person.firstName} ${person.lastName}`;
//   console.log(`${fullName} is at age ${person.age}`);
// }

// forEach
people.forEach(function(person){
  const fullName = `${person.firstName} ${person.lastName}`;
  console.log(`${fullName} is at age ${person.age}`);
});

// map
const fullNames = people.map(function(person){
  return `${person.firstName} ${person.lastName}`;
});
console.log(fullNames);

// filter
const filteredPeople = people.filter(function(person){
  return person.age > 30;
});
console.log(filteredPeople);

// reduce - a bit complicated
// acc is the accumulator, which is the value returned from the previous iteration
const totalAge = people.reduce(function(acc, person){
  return acc + person.age;
}, 0);
console.log(totalAge);

// find
const foundPerson = people.find(function(person){
  return person.age === 30;
});
console.log(foundPerson);

// findIndex
const foundPersonIndex = people.findIndex(function(person){
  return person.age === 30;
});
console.log(foundPersonIndex);

// every
const allPeople = people.every(function(person){
  return person.age > 20;
});
console.log(allPeople);

// some
const somePeople = people.some(function(person){
  return person.age > 30;
});
console.log(somePeople);

// sort
const sortedPeople = people.sort(function(a, b){
  return a.age - b.age;
});
console.log(sortedPeople);

// sort with compare function
const sortedPeople2 = people.sort(function(a, b){
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortedPeople2);


// chainable methods
const chainablePeople = people
  .filter(function(person){
    return person.age > 30;
  })
  .map(function(person){
    return `${person.firstName} ${person.lastName}`;
  })
  .sort(function(a, b){
    return a.localeCompare(b);
  });
console.log(chainablePeople);
