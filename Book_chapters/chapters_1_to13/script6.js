document.write("<h1> Chapter 5  </h1>");
document.write("<h2> Math Expressions  </h2>");

// Q1
var num1 = 3;
var num2 = 5;
var sum = num1 +num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum);
document.write("<hr>");

// Q2
var sub = num1 -num2;
document.write("Subtraction of "+num1+" and "+num2+" is "+sub);
document.write("<br>");

var mul = num1 *num2;
document.write("Multiplication of "+num1+" and "+num2+" is "+mul);
document.write("<br>");
var div = num1 /num2;
document.write("Division of "+num1+" and "+num2+" is "+div);
document.write("<hr>");

// Q4
var cost=600;
var qun=+prompt("How many movie tickets you wants to buys?? ");
tot=cost* qun;
document.write("Total cost to buy "+qun+" tickets to a movie is "+tot+" PKR");
document.write("<hr>");

// Q5
var num =+prompt("Table number ?? ");
document.write("<br>");
document.write("<br> Table of "+num);
document.write("<br>");
for(i=0;i<=10;i++){
    mul=num*i;
    document.write(num+" x "+i+" = "+mul);
    document.write("<br>");
}
document.write("<hr>");

// Q6

var cel = +prompt("Enter temperature in celsius?? ");
var F = (cel*9/5)+32;
document.write(cel+"oC is "+F+"oF");
document.write("<br>");
var Fah = +prompt("Enter temperature in fahrenhitrate?? ");
var C = (Fah-32)*5/9;
document.write(Fah+"oF is "+C+"oC");
document.write("<hr>");

// Q7
var item1 = +prompt("Price of item 1?? ");
var item2 = +prompt("Price of item 2?? ");
var qun1 = +prompt(" Ordered quantity of item 1?? ");
var qun2 = +prompt(" Ordered quantity of item 2?? ");
var ship=100;
var tot_cost=(item1*qun1)+(item2*qun2);
document.write("<br>");
document.write("Price of item 1 is "+item1);
document.write("<br>");
document.write(" Quantity of item 1 is"+qun1);
document.write("<br>");
document.write("Price of item 2 is "+item2);
document.write("<br>");
document.write(" Quantity of item 2 is "+qun2);
document.write("<br>");
document.write("Shipping charges is:");
document.write("<br>");
document.write("The total cost is "+tot);
document.write("<hr>");




