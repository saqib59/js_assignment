// Q1
var first_name=prompt("First name:");
var last_name=prompt("Last name:");
var fullname=(first_name+" "+last_name).toUpperCase();
alert("Hi, "+fullname+" Nice to meet you!");

// Q2

var model=prompt("Your favourite mobile phone model? :");
document.write("My favorite phone is: "+model+"<br> Length of string: "+model.length);
document.write("<hr>");
// Q3

var country= "Pakistani";
index=country.indexOf('n');
document.write("String :"+country+"<br> Index of n: "+index);
document.write("<hr>");
// Q4

var greet= "Hello World";
index=greet.lastIndexOf('l');
document.write("String document.write:"+greet+"<br>Last index of l: "+index);
document.write("<hr>");
// Q5

index=country.charAt(3);
document.write("String :"+country+"<br> Character at index 3 : "+index);
document.write("<hr>");

// Q6

var fullname=first_name.concat(" ",last_name);
document.write("Hi, "+fullname+" Nice to meet you!");
document.write("<hr>");

// Q7

var city= "Hyderabad";
rep=city.replace("Hyder","Islam");
document.write("City :"+city+"<br> After replacement : "+rep);

document.write("<hr>");

// Q8

var message = "Ali and Sami are best friends. They play cricket and football together.";
rep=message.replace(/and/g,"&");
document.write("Message : "+message+"<br> After replacement : "+rep);
document.write("<hr>");


// Q9
var num = "472";
document.write("<br> Value: "+num+"<br>Type: "+typeof(num));
var chng = parseInt(num);
document.write("<br> Value: "+num+"<br>Type: "+typeof(chng));
document.write("<hr>");



// Q10
var input=prompt("Enter statement:");
document.write("<br> User input: "+input+"<br>Uppercase: "+input.toUpperCase());
document.write("<hr>");



// Q11
var input=prompt("Enter statement:");
fst=input.charAt(0).toUpperCase();
document.write("<br> User input: "+input+"<br>Uppercase: "+(fst+input.slice(1)));
document.write("<hr>");


// Q12
var num = 35.36;
 var string = num.toString().replace("." , "");
 document.write("Number: "+num +"<br> Result: "+string);
document.write("<hr>");


// Q13
var names = prompt("UserName:")
for(var i=0;i<names.length;i++){
        if(names[i].charCodeAt() === 33 || names[i].charCodeAt() === 44 || names[i].charCodeAt() === 46 || names[i].charCodeAt() === 64 ){
                alert("Please enter a valid userName")
        }
}
document.write(names);
document.write("<hr>");



// Q14
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("What you want to order:").toLowerCase();
var indeNum = bakeryItems.indexOf(searchItem)
console.log(indeNum)
if(bakeryItems.indexOf(searchItem) !== -1){
        document.write(`${searchItem} is Available at Index ${bakeryItems.indexOf(searchItem)} in our Bakery`)

}

else{
        document.write(`${searchItem} is Not Available in our Bakery`)

}



// Q15

var password = prompt("Enter Password!");
var pass_validation = /^[a-zA-Z0-9!$@]{1,}$/
if(password !== ""){
        if(!password.match(pass_validation)){
                alert("Please enter a valid Password")
        }
        else{
                alert("Password is Correct")
        }

}


else{
        alert("Please fill up password field")
}



// Q16

var university = "University of Karachi";
var arr = university.split("")
document.write(arr.join("<br />")  )


// Q17

var user = prompt("enter word");
document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.charAt(user.length-1))
document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1))


// Q18

var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
var count = string.match(/the/g)
console.log(count.length)