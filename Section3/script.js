///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// retirement(1965); This won't work because
// it is a function expression not a 
// function decleration like above

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

// variables
//console.log(age); This won't work because
// in the creation phase of the object 
// the code is scanned for variable
// declarations and set to undefined.
// var age = 23;

// function foo() {
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);

// Basically, hoisting can be used to 
// declare functions before the have been
// declared.



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a+d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

// Regular function call: the this keyword points at the 
// global object (the window object in the browser).

// Method call: the this variable points to the object
// that is calling the method.

// The this keyword is not assigned a value until a 
// function where it is actually defined is actually called. 

// Examples:
// console.log(this); --> Refers to the window as it is the default.
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
/*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
*/
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// REMEMBER: We use paranthesis to call a function but we can
// treat the function as a variable by not using the paranthesis
// when we want to use it.



