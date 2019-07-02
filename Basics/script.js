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

// var johnAve = (89 + 120 + 103) / 3;
// var mikeAve = (116 + 94 + 123) / 3;
// var maryAve = (97 + 134 + 105) / 3;
// console.log(johnAve, mikeAve, maryAve);

// if (johnAve > mikeAve && johnAve > maryAve) {
//   console.log('John\'s teams average is higher than Mike\'s and Mary\'s with ' + johnAve + ' points.');
// } else if (mikeAve > johnAve && mikeAve > maryAve) {
//   console.log('Mike\'s teams average is higher than John\'s and Mary\'s with ' + mikeAve + ' points.');
// } else if (maryAve > johnAve && maryAve > mikeAve){
//   console.log('Mary\'s teams average is higher than John\'s and Mike\'s with ' + maryAve + ' points.');
// } else {
//   console.log('There is a draw')
// }

/**************
 *  FUNCTIONS
 **************/

//  function calculateAge(birthYear) {
//      return 2019 - birthYear;
//  }

//  var ageJohn = calculateAge(1990);
//  var ageMike = calculateAge(1948);
//  var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/*************************************
 * FUNCTION STATEMENT AND EXPRESSIONS
 *************************************/
// Function declaration
// function whatDoYouDo(job, firstName){}

 // Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites.';
//         default:
//             return firstName + ' does something else.';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// Anything that returns a result is an expression
// Statements perform an action but don't produce an immediate value

/*********
 * ARRAYS
 *********/

 // Initialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names);
//  console.log(names[1]);
//  console.log(names.length);

// // Mutate Array Data
//  names[1] = 'Ben';
//  names[names.length] = 'Mary';
//  console.log(names);

//  // Different data types
//  var john = ['John', 'Smith', 1990, 'designer', false];

//  john.push('blue');
//  john.unshift('Mr.');
//  console.log(john);

//  john.pop();
//  john.pop();
//  john.shift();
//  console.log(john);

//  console.log(john.indexOf(1990));

//  var isDesigner = john.indexOf('designer') === -1 ? 'John is not a Designer' : 'John is a Designer';
// console.log(isDesigner);

/*********************
 * CODING CHALLENGE 3
 *********************/

// function tipCalculator(bill) {
//   var tipPercentage = 0.15;
//   if(bill < 50) {
//     tipPercentage = 0.20;
//   } else if(bill > 200) {
//     tipPercentage = 0.10;
//   }
//   return tipPercentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// var finalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log("The tip percentage based on the bills:", tips);
// console.log("The final amount of the bill plus the tip:", finalBill);

/*************************
 * Objects and Properties
 *************************/

// Object Literal
//  var John = {
//    firstName: 'John', //'Key:Value' pair
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false
//  };
//  console.log(John.firstName);
//  console.log(John['lastName']);
//  var x = 'birthYear';
//  console.log(John[x]);

//  John.job = 'designer';
//  John['isMarried'] = true;
//  console.log(John);
// //New Object Syntax
//  var Jane = new Object();
//  Jane.firstName = 'Jane';
//  Jane.birthYear = 1969;
//  Jane['lastName'] = 'Smith';
//  console.log(Jane);

/**********************
 * Objects and Methods
 **********************/

//   var John = {
//    firstName: 'John', //'Key:Value' pair
//    lastName: 'Smith',
//    birthYear: 1992,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function() {
//      this.age = 2018 - this.birthYear; //'this' keyword means basically 'this object'
//    }
//  };

// John.calcAge();
// console.log(John);

/*********************
 * Coding Challenge 4
 *********************/

//  var John = {
//    firstName: 'John',
//    lastName: 'Smith',
//    mass: 85,
//    height: 1.71,
//    calcBmi: function() {
//      this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//    } 
//  };

//  var Mark = {
//   firstName: 'Mark',
//   lastName: 'Johnson',
//   mass: 85,
//   height: 1.71,
//   calcBmi: function() {
//      this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//     }
//  };

//  if(John.calcBmi() > Mark.calcBmi()) {
//    console.log(John.firstName, John.lastName, "has the higher BMI at", John.bmi);
//   } else if(John.bmi < Mark.bmi) {
//     console.log(Mark.firstName, Mark.lastName, "has the higher BMI at", Mark.bmi);
//   } else {
//     console.log(John.firstName, John.lastName, "and", Mark.firstName, Mark.lastName, "has the same BMI at", John.bmi);
//   }

/**********************
 * Loops and Iteration
 **********************/

 // //For loop
//  for(var i = 0; i < 10; i++){
//    console.log(i);
//  }

//  var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

//  for(var i = 0; i < john.length; i++){
//    console.log(john[i]);
//  }

//  //While loop
//  var i = 0;
//  while(i < john.length){
//    console.log(john[i]);
//    i++;
//  }

 //Continue and break statements
 //break = getting out of the loop
 //continue = stopping the current cycle and moving onto the next

//  var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//  for(var i = 0; i < john.length; i++){
//    if(typeof john[i] !== 'string') continue;
//    console.log(john[i]);
//  }
//  //Result: John, Smith, designer, blue
 
//  for(var i = 0; i < john.length; i++){
//   if(typeof john[i] !== 'string') break;
//   console.log(john[i]);
//  }
//  //Result: John, Smith

//  for(var i = john.length -1; i >= 0; i--){
//    console.log(john[i]);
//  }

/*********************
 * Coding Challenge 5
 *********************/

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.allTips = [];
    this.totalPaid = [];

    for(i = 0; i < this.bills.length; i++){
      bill = this.bills[i];

      if(bill < 50) {
        tipPercentage = 0.20;
      }
      else if(bill >= 50 && bill <= 200){
        tipPercentage = 0.15;
      }
      else {
        tipPercentage = 0.10;
      }

      this.allTips[i] = bill * tipPercentage;
      this.totalPaid[i] = bill + bill * tipPercentage; 
    }
  }
};

var mark = {
  fullName: 'Mark Jones',
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.allTips = [];
    this.totalPaid = [];

    for(i = 0; i < this.bills.length; i++){
      bill = this.bills[i];

      if(bill < 100) {
        tipPercentage = 0.20;
      }
      else if(bill >= 100 && bill <= 300){
        tipPercentage = 0.15;
      }
      else {
        tipPercentage = 0.10;
      }

      this.allTips[i] = bill * tipPercentage;
      this.totalPaid[i] = bill + bill * tipPercentage; 
    }
  }
};

function averageTips(johnPaid, markPaid) {
  var johnSum = 0;
  var markSum = 0;

  for(i = 0; i < johnPaid.length; i++) {
    johnSum += johnPaid[i];
    johnAverage = johnSum / johnPaid.length;
  }
  for(i = 0; i < markPaid.length; i++) {
    markSum += markPaid[i];
    markAverage = markSum / markPaid.length;
  }
  if(this.johnAverage > this.markAverage) {
    console.log("John's family paid more in tips on average compared to Mark's family");
    console.log(this.johnAverage);
  }
  else {
    console.log("Mark's family paid more in tips on average compared to John's family");
    console.log(this.markAverage);
  }
}

john.calcTips();
mark.calcTips();
averageTips(john.allTips, mark.allTips);
console.log(john);
console.log(mark)