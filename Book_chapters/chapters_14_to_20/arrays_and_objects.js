// 1- declare and initialize empty multi dimensional array
var empty_multi_dimensional_array = [[],[]];

// 2- Declare and initialize a multidimensional array representing the following matrix:

var multidimensional_array_matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];


// 3- Write a program to print numeric counting from 1 to 10.

document.write("<h2>Arrays And Objects</h2>");
document.write("3- Write a program to print numeric counting from 1 to 10.");

for (var i = 0; i <= 10; i++) {
  document.write(`${i} <br>`);
}

/* 4- Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/


document.write(`4- Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user <br>`);

var table_no = +prompt("Enter Table No.");
var table_length = +prompt("Enter Table Length.");

for (var i = 1; i <= table_length; i++) {
  document.write(`${table_no} x ${i} = ${table_no*i} <br>`);
}

/*5 - Write a program to print items of the following array
using for loop:
fruits = ["apple”, “banana”, “mango”, “orange”,
“strawberry”]*/


document.write(`5 - Write a program to print items of the following array
using for loop: fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] <br>`);

var fruits = ["apple", "banana", "mango", "orange","strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]} <br>`)
}

/*6 - Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */



document.write(`6 - Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k <br>`);


document.write("Counting <br>");
for (var i = 1; i <= 15; i++) {
  document.write(`${i} <br>`);
}

document.write("Reverse Counting <br>");

for (var i = 10; i >= 1; i--) {
  document.write(`${i} <br>`);
}

document.write("Even <br>");

for (var i = 0; i <= 20; i+=2) {
  document.write(`${i} <br>`);
}


document.write("Odd <br>");

for (var i = 1; i <= 20; i+=2) {
  document.write(`${i} <br>`);
}

document.write("Series <br>");

for (var i = 2000; i <= 20000; i+=2000) {
  document.write(`${i} <br>`);
}