//Comparing two JSON having the same properties without order
// var _ = require('lodash');
// var obj1 = {name:"Person 1", age:5};
// var obj2 = {age:5, name:"Person 1"};

// console.log(_.isEqual(obj1, obj2));


// //1. Declare four variables without assigning values and print them in console

// let x,y,z,a
// console.log(x,y,z,a);

// //2. value of the variable myvar as output
// var myvar= 1;
// console.log(myvar);

// //3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

// let firstName = "Soumya";
// let lastName = "Dutta";
// let maritialStatus = "Unmmarried";
// let country = "India";
// let age = 29 ;

// console.log(firstName);
// console.log(lastName);
// console.log(maritialStatus);
// console.log(country);
// console.log(age);

// //4.Declare variables to store your first name, last name, marital status, country and age in a single line
// console.log(firstName, lastName, maritialStatus, country, age);

// //5. Declare variables and assign string, boolean, undefined and null data types
// let str = "Soumya";
// let bool = true;
// let unde;
// let nul = null;

// //6. Convert the string to integer parseInt() Number() Plus sign(+)
// let str1 = "1234";
// let convstr1 = parseInt(str1);
// console.log(typeof(str1));

// //7. Write 6 statement which provide truthy & falsey values.

// //truthy statements
// if(true) {
//     x= 45;
// }

// if (3===3) {
//     x = 34;
// }

// if (34) {
//     x = 24;
// }
// //falsy statements
// if (false) {
//     x = 23;
// }

// if (0) {
//     x=56;
// }

// if (null) {
//     x=9;
// }

// //Task 2: Simple Programs todo for Operators
// //1. Square of a number

// let num1 = 3;
// console.log(`Square of ${num1} is ${num1*num1}`);

// //2. Swapping 2 numbers

// let num2 = 3;
// let num3 = 4;
// let f = num2;
// num2=num3;
// num3 = f;
// console.log(`Swapped numbers are num2 ie. ${num2} and num3 ie. ${num3}`);

// //3. Addition of 3 numbers
// let x = 3;
// let y = 4;
// let z = 5;
// console.log(`Addition of 3 numbers x,y and z is ${x+y}`)

// //4. Celsius to fahrenheit conversion
// let tcel = 24;
// console.log(`${tcel} deg celsius is ${tcel*9/5 + 32} in Fahrenheit`);

// //5. Meter to miles
// let m = 2000;
// console.log(`The distance ${m} meter in miles is ${m/1609.344}`);

// //6.Pounds to kg
// let massInPounds = 75;
// console.log(`${massInPounds} pounds is ${0.45359237*massInPounds} in kg`);

// //7.Calculate Batting Average

// let totalRuns = 23000;
// let totalOuts = 350;
// console.log(`Batting Average of the player is ${totalRuns/totalOuts}`);

// //8. Calculate five test scores and print their average
// let totalScore = 442;
// let totalTest = 5;
// console.log(`Average Test Score Secured = ${totalScore/totalTest}`);

// //9.Power of any number x ^ y
// let num4 = 4;
// let power = 2;
// console.log(`Power of the given number ${num4} is ${Math.pow(num4,power)}.`);

// //10.Calculate Simple Interest
// let principal = 20000;
// let timePeriod = 2;
// let interestRate = 5;
// console.log(`The simple interest on the principle amount is Rs.${principal*timePeriod*interestRate/100}`);

// //11.Calculate area of an equilateral triangle
// let side = 5;
// console.log(`Area of equilateral triangle with side ${side}cm is ${Math.sqrt(3)/4 * Math.pow(side,2)}`);

// //12. Area Of Isosceles Triangle
// let base = 20;
// let height = 10;
// console.log(`Area of isosceles triangle with base ${base}cm and height ${height}cm is ${base*height/2} square cm. `);

// //13. Volume of Sphere
// let radius = 5;
// console.log(`Volume of Sphere with radius ${radius}cm is ${4/3 * 3.141 * Math.pow(radius,3)}`);

// //14. Volume of Prism
// let baseLength = 10;
// let basewidth = 30;
// let prismHeight = 15;
// console.log(`Volume of Prism is ${baseLength*basewidth*prismHeight/2}.`);

// //20.  a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

// let perUnitRate = 10;
// let unitConsumedPerHour = 100;
// let totalUnit = unitConsumedPerHour*24*30;
// console.log(`Total Energy Bill is ${totalUnit*perUnitRate}.`);


// TASK-3 Simple Programs todo for Condition , Looping and Arrays
// 1.     Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// let string = "";
// let n = 6;
// for (let x=0 ; x<=n ; x++) {
//     for(let y=0 ; y<=x ; y++) {
//         string+="#";
//     }
//     string+="\n";
// }
// console.log(string);

//2. Iterate through the string array and print it contents

// var strArray= ["<option>Jazz</option>",
//       ,"<option>Blues</option>",
//       ,"<option>New Age</option>",
//       ,"<option>Classical</option>",
//       ,"<option>Opera</option>"];

// for(let values of strArray) {
//     console.log(values);
// }

//write a code to count the elements in the array . Don’t use length property

// var myarray=[11,22,33,44,55];
// let n = 0;
// for (let values of myarray) {
//     n+=1;
// }
// console.log(`The no. of elements in the array is ${n}`);

// let foods = ["egg", "paneer", "chicken", "mutton", "mushroom", "soyabean", "lamb", "duck", "beans", "spinach", "beef", "pizza", "burger", "pasta", 
// "noodles", "mixture","lasagna","rice","roti","paratha"];
// // Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
// console.log(`My fifth favorite food is ${foods[4]}`); 
// // Find the length of your foods array
// console.log (`The length of my foods array is ${foods.length}`)

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

// let friends = [ "Mari","MarryJane","CaptainAmerica","Munnabai","Jeff","AAK chandran"];

// function dataHandling(input){
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === "Mari") {
//             input[i] = "Munnabai";
//         }
//     }
//     console.log(input);
//     }
    
//     dataHandling(friends);

