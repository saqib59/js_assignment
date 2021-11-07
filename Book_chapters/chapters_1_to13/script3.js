document.write("<h1> Chapter 4  </h1>");

// 1. Declare 3 variables in one statement.
var a,b,c;
// 2. Declare 5 legal & 5 illegal variable names.
var blank_1 = "numbers";
var ab="$" ;
var blank_3 ="_";
var blank_2 ="a letter";
var blank_4 ="sensitive",blank_5="keywords" ;
/*3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS ________*/

document.write("<h2>Rules for naming JS variables </h2><br><br>");
document.write("<h4> Variable names can only contains "+blank_1+" , "+ab+" and "+blank_3+". For example $my_1stVariable");
document.write("<br>Variable must begin with "+blank_2+","+ab+" or "+blank_3+". For example $name, _name or name");
document.write("<br>Variable names are case"+blank_4);
document.write("<br>Variable names are case "+blank_5 );
