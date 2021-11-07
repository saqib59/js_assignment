document.write("<h1> Chapters 6 to 9  </h1>");
document.write("<h2> Math Expressions  </h2>");
// Q1.
var a = 10;
document.write("<h5> Result </h5><br>");
document.write("The value of a is : "+a);


document.write("<hr><br><br>The value of ++a is : "+(++a));
document.write("<br>Now the value of a is : "+a);

document.write("<br><br>The value of a++ is : "+(a++));
document.write("<br>Now the value of a is : "+a);


document.write("<br><br>The value of --a is : "+(--a));
document.write("<br>Now the value of a is : "+a);

document.write("<br><br>The value of a-- is : "+(a--));
document.write("<br>Now the value of a is : "+a);


// Q2.
var a = 2,b=1,result ;
var result= --a - --b + ++b + b--;
document.write("<br><br><br>a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);



// Q3
var var1=prompt("Your beautiful name, Sir?? ");
document.write("<br><br>Hello "+var1+" Nice to meet you!")

document.write("<br>");

// Q4
var num =+prompt("Enter number of table : ");
document.write("<br>");
document.write("<br> Multipication table of "+num);
document.write("<br>");
for(i=0;i<=10;i++){
    mul=num*i;
    document.write(num+" x "+i+" = "+mul);
    document.write("<br>");
}

// Q5
var sub1= prompt("Enter 1st subject name: ");
var sub2= prompt("Enter 2nd subject name: ");
var sub3= prompt("Enter 3rd subject name: ");
var sub1_marks=+prompt("Enter obtained marks out of 100 :");
var sub2_marks=+prompt("Enter obtained marks out of 100 :");
var sub3_marks=+prompt("Enter obtained marks out of 100 :");
obt= sub1_marks + sub2_marks+ sub3_marks;
per= (obt*100)/300;
document.write("<h3> Subjects &emsp; Total_Marks &emsp; Obtained_Marks &emsp; Percentage");
    document.write("<br>");
    document.write("<br>");

document.write(sub1+" &emsp;&emsp;&emsp;&emsp; 100 &emsp;&emsp;&emsp;&emsp;&emsp;"+sub1_marks+" &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;"+sub1_marks+"%");
document.write("<br>");
document.write(sub2+" &emsp;&emsp;&emsp;&emsp; 100 &emsp;&emsp;&emsp;&emsp;&emsp;"+sub2_marks+" &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;"+sub2_marks+"%");
document.write("<br>");
document.write(sub3+" &emsp;&emsp;&emsp;&emsp; 100 &emsp;&emsp;&emsp;&emsp;&emsp;"+sub3_marks+" &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;"+sub3_marks+"%");
document.write("<br>");
document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 300 &emsp;&emsp;&emsp;&emsp;&emsp;"+obt+" &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; "+per+"%");

