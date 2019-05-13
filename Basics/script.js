/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/***********************
* Variable mutation and Type coercion
************************/
/*
var firstName = 'John';
var age = 28;
//Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'Twenty eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*********************
* Basic Operators
**********************/
/*
var now, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

//Math Operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*********************
* Operator precendence
**********************/
/*
var now, yearJohn, fullAge, isFullAge, ageJohn, ageMark, average;

now = 2018;
yearJohn = 1989;
fullAge = 18;

// Multiple operators
isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
ageJohn = now - yearJohn;
ageMark = 35;
average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//Assignment operators work from right-to-left

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/********************
* CODING CHALLENGE 1
*********************/
/*
var johnHeight = 1.95;
var johnWeight = 92;

var markHeight = 1.6980;
var markWeight = 78;

var johnBmi = johnWeight / (johnHeight * johnHeight);
var markBmi = markWeight / (markHeight * markHeight);

var isMarkHigher = johnBmi < markBmi;
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigher);
*/

/**********************
* If / else statements
**********************/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var johnHeight = 1.95; //meters
var johnWeight = 92; //kgs

var markHeight = 1.69;
var markWeight = 78;

var johnBMI = johnWeight / (johnHeight * johnHeight);
var markBMI = markWeight / (markHeight * markHeight);

if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/***************
* Boolean Logic
***************/
/*
var firstName = 'John';
var age = 23;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20 ) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/********************************************
* The ternary operator and Switch statements
********************************************/
/*
var firstName = 'John';
var age = 17;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.');

// Switch statements
var job = 'Instructor';
switch(job) {
  case 'Teacher':
  case 'Instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'Driver':
    console.log(firstName + ' drives an Uber in Lisbon.');
    break;
  case 'Designer':
    console.log(firstName + ' designes beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
age = 31;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/

/************************************************
* Truthy and Falsy values and equality operators
************************************************/

// falsy values: undefined, null, 0 '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;
if (height || height === 0) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has NOT been defined.');
}

// Equality Operators
if (height === '23') {
  console.log('The == operator does type coercion!');
} // This log won't work because it is false
*/

/********************
* CODING CHALLENGE 2
********************/

var johnAve = (116 + 94 + 123) / 3;
var mikeAve = (116 + 94 + 123) / 3;

if (johnAve > mikeAve) {
  console.log('John\'s teams average is higher than Mike\'s with ' + johnAve + ' points.');
} else if (mikeAve > johnAve) {
  console.log('Mike\'s teams average is higher than John\'s with ' + mikeAve + ' points.');
} else {
  console.log('Both teams had the same average: \nMike: ' + mikeAve + '\nJohn: ' + johnAve)
}
