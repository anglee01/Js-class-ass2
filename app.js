//MATH EXPRESSIONS
//q1
var a=10;
console.log("The value of a is:"+ " "+a);
 
var a=++a;
console.log("The of ++a is:"+" "+a);
console.log("Now the value of a is:"+" "+a);

var a=a++;
console.log("The value of a++ is:"+" "+a);
console.log("Now the value of a is:"+" "+ ++a);
 
var a=--a;
console.log("The of --a is:"+" "+a);
console.log("Now the value of a is:"+" "+a);
 
var a=a--;
console.log("The value of a-- is:"+" "+a);
console.log("Now the value of a is:"+" "+ --a);
//q2
var a = 2, b = 1;
console.log("The value of a is:"+" "+a);
console.log("The value of b is:"+" "+b);
var result = --a - --b + ++b + b--;
console.log("The result is:"+" "+result);
//q3
var name=prompt("ENTER YOUR NAME");
console.log("Welcome"+" "+name);
//q5
var num=+prompt("Enter a number");
 for(i=1; i<=10;i++){
 console.log(num + "*" + i + "=" + num*i);
 }


 //q6
 //a
 var subject1 =prompt("Enter the 1st subject");
 console.log(subject1);
 var subject2=prompt("Enter the 2nd subject");
 console.log(subject2);
 var subject3=prompt("Enter the 3rd subject");
 console.log(subject3);
 //b
 var totalMarks=300;
 //c
 console.log("Total Marks ="+" "+totalMarks);
 var marksObtained1=+prompt("Enter marks in"+" "+subject1)
 //d
 console.log("The marks in "+" "+subject1+" "+"is"+" "+marksObtained1);
 var marksObtained2=+prompt("Enter marks in"+" "+subject2);
 console.log("The marks in "+" "+subject2+" "+"is"+" "+marksObtained2);
 var marksObtained3=+prompt("Enter marks in"+" "+subject3);
 console.log("The marks in "+" "+subject3+" "+"is"+" "+marksObtained3);
 //e
 var total_obtained_marks= marksObtained1+marksObtained2+marksObtained3;
 console.log("The total Marks are:"+" "+total_obtained_marks);
  //percentage
  var percentage= (total_obtained_marks*100)/totalMarks;
  console.log("Percentage:"+" "+percentage);


//USER INPUT & CONDITIONAL STATEMENT
//Q1
var city=prompt("Enter your city");
if(city="karachi")
{
    alert("Wecolme to city of lights");
}
//q2
var gender=prompt("Enter your gender");
if(gender="male")
{
    alert("Good morning Sir!");
}
else{
    alert("Good morning Maa'm!");
}
//q3
var color= prompt("Enter the signal color");
if(color=="red")
{
    alert("Must stop");
}
else if(color=="yellow")
{
    alert("Ready to move");
}
else if(color=="green")
{
    alert("Move now");
}
//q4
var fule=prompt("What is the remaining fule?");
if(fule< 0.25)
{
    alert("Please refill the fule in your car");
}
else{
    alert("You may go");
}
//q5
//a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//c
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
//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    //f
    if("car" < "cat"){
        alert("car is smaller than cat");
        }
//q6
var english=+prompt("Enter marks in english");
var maths=+prompt("Enter marks in maths");
var urdu=+prompt("Enter marks in urdu");
var totalMarks=300;
console.log("TOTAL MARKS:"+" "+totalMarks);
var marksObtained= english+maths+urdu;
console.log("Marks obtained="+" "+ marksObtained);
var percentage=(marksObtained*100)/totalMarks;
console.log("Percentage:"+" "+percentage);

if(percentage>=80)
{
    console.log("A+");
    console.log("Excellent");
}
else if(percentage >=70)
{
    console.log("A");
    console.log("Good");
}
else if(percentage>=60)
{
    console.log("B");
    console.log("YOU NEED TO IMPROVE");
}
else if(percentage<=60)
{
    console.log("Fail");
    console.log("Sorry");
}
//q7
var secretNum=6;
var num=+prompt("Guess a number");
if(num===secretNum)
{
    console.log("Bingo correct number");
}
else if(num+1===secretNum)
{
    console.log("Close enough to the correct number");
}
//q8
var num=prompt("Enter a number");
if(num%3==0)
{
console.log("The number is divisible by 3");
}
else{
    console.log("The number is not divisible by 3");
}
//q9
var number=prompt("Enter a number");
if(number%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}
//q10
var temp= prompt("Enter the temperature");
if(temp>40){
    console.log("It is too hot outside.");
}
else if(temp> 30){
    console.log("The Weather today is Normal.");
}
 else if(temp> 20){

    console.log("Today’s Weather is cool.");
}
else if(temp>10){
      console.log("OMG! Today’s weather is so Cool.");
}
//q11
var fisrtNum= +prompt("Enter the fisrt number");
console.log(fisrtNum);
var secondNum= +prompt("Enter the second number");
console.log(secondNum);
var operation=prompt("enetr an operation","+,-,/,*,%");
console.log(operation);
if(operation=="+"){
    console.log(fisrtNum+secondNum);
}
else if(operation== "-"){
    console.log(fisrtNum-secondNum);
}
else if (operation== "/" )
{
  console.log(fisrtNum/secondNum);
}
else if(operation=="*"){
    console.log(fisrtNum*secondNum);
}
else if(operation=="%"){
console.log(fisrtNum/secondNum);
}
