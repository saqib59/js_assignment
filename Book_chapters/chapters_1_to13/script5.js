document.write("<h1> Chapter 9 to 11  </h1>");
document.write("<h2> User Input and conditional statements  </h2>");
// Q1
var city = prompt("Type name of city?? ");
if(city=="karachi")
{
    document.write("Welcome to the city of lights");
}
else{
    document.write("Welcome to "+city);

}
document.write("<hr>");

// Q2
var gender=+prompt("Gender \n 1.Male   /    2.Female");
if(gender==1){
    document.write("<br>Good Morning Sir!");
}
else if(gender==2){
    document.write("<br>Good Morning Ma'am!");
}
else{
    document.write("<br>invalid input");
}
document.write("<hr>");


// Q3
var Signal_color=prompt("Signal Color?? ");
if(Signal_color=="red"){
    document.write("<br>Must Stop!");
}
else if(Signal_color=="yellow"){
    document.write("<br>Ready to move");
}
else if(Signal_color=="green"){
    document.write("<br>Move now");
}
else{
    document.write("<br>invalid input");
}

document.write("<hr>");

// Q4
var fuel=parseInt(prompt("Remaining fuel in car??"));
if(fuel<=0.25){
    document.write("<br>Please refill the fuel in your car");
}
else{
    document.write("<br>No need to refill.");
}

document.write("<hr>");

// Q5 a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
    }

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }
    
// Q6
var sub1= prompt("Enter 1st subject name: ");
var sub2= prompt("Enter 2nd subject name: ");
var sub3= prompt("Enter 3rd subject name: ");
var sub1_marks=+prompt("Enter obtained marks out of 100 in: "+sub1);
var sub2_marks=+prompt("Enter obtained marks out of 100 in: "+sub2);
var sub3_marks=+prompt("Enter obtained marks out of 100 in: "+sub3);
obt= sub1_marks + sub2_marks+ sub3_marks;
per= (obt*100)/300;
var grade,remark;
if (per<=100 && per>=80){
    grade="A-one";
    remark="Excellent";
}
else if (per<80 && per>=70){
    grade="A";
    remark="Good";

}else if (per<70 && per>=60){
    grade="B";
    remark="You need to improve";

}else if (per<60 && per>=0){
    grade="Fail";
    remark="Sorry";

}else{
    grade="invalid";

}
document.write("<h2> Marksheet </h2>");
document.write("<br> Total marks: 300");
document.write("<br> Marks obtained: "+obt);
document.write("<br> Percentage: "+per+" %");
document.write("<br> Grade: "+grade);
document.write("<br> Remarks: "+remark);

// Q7 
document.write("<hr>");
document.write("<h2> Guess Game </h2>");
var sec_num = 7;
var gue_num = +prompt("Guess any number from 1 to 10 ?");
if(gue_num==sec_num){
document.write("Bingo! Correct answer.");
}
else if((gue_num+1)==sec_num){
document.write("Close enough to the correct answer");
}

document.write("<hr>");
// Q8
document.write("<h2> Divisible by 3 or not!  </h2>");

var num = +prompt("Divisible by 3 or not! \n Enter any number ?");
if(num%3==0){
document.write(num+" the given number is divisible by 3");
}
else{
document.write(num+" the given number is not divisible by 3");
}



document.write("<hr>");

// Q9
document.write("<h2> Even or odd  </h2>");

var num = +prompt("Even or odd \n Enter any number ?");
if(num%2==0){
document.write(num+" is the number is even");
}
else{
document.write(num+" is the number is odd number");
}
document.write("<hr>");

// Q 10
document.write("<h2> Temperature  </h2>");

var temp=parseInt(prompt("Temperature??"));
if(temp>40){
document.write("It is too hot outside.");
}
else if(temp>30){
document.write("The Weather today is Normal.");
}
else if(temp>20){
document.write("Today’s Weather is cool.");
}
else if(temp>10){
document.write("OMG! Today’s weather is so Cool.");
}
  


document.write("<hr>");

// Q11
document.write("<h2> Calculator  </h2>");

var f_num=parseInt(prompt(" Calculator \n Enter 1st number: "));
var s_num=parseInt(prompt("Enter 2nd number: "));
var op=prompt("operator?? ");
var result;
if(op=="/"){
    result= f_num/s_num;
document.write(" calculated result: "+result);

}
else if(op=="*"){
    result= f_num*s_num;
document.write(" calculated result: "+result);

}
else if(op=="+"){
    result= f_num+s_num;
document.write(" calculated result: "+result);

}
else if(op=="-"){
    result= f_num-s_num;
document.write(" calculated result: "+result);

}
else if(op=="%"){
    result= f_num%s_num;
document.write(" calculated result: "+result);

}
