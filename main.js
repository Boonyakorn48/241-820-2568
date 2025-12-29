/* 
//String,Number, Boolean, Object, Array

//1. String
let firstName = "John Doe";
const idcard = '123';
//2. Number
let age = 30;
let height = 5.9;

//3. Boolean
let isSudent = false;
firstName = 'test';
console.log('My name is', firstName, 'and I am', age, 'yeas old.');

 
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ


let Number1 = 'test';
let Number2 = 'xxx';

let result = Number1 + Number2;
console.log("ผลบวก =", result);


// Conditional statements
// if, else if, else
//


let number1 = 10;
let number2 = 20;

let conditiona1 = number1 > number2; //false
console.log("result of condition is:", conditiona1);
*/
/*
let number1 = 21;
let number2 = 20;

//if - else condition
if(number1 != number2){
    console.log('this if')
} else if (number1 == number2){
    console.log('this else if')
} else {
    console.log('this else')
}
*/
/*
Grade
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
< 50  เป็นเกรด F
*/
/*
let score = prompt("ป้อนคะเเนนของคุณ")
console.log("คะเเนนของคุณ " + score)

if (score >= 80){
    console.log('A')
} else if (score >= 70){
    console.log('B')
} else if (score >= 60){
    console.log('C')
} else if (score >= 50){
    console.log('D')
} else {
    console.log('F')
}
*/

/*
&& และ
|| หรือ
! NOT หรือ ไม่
*/
/*
let number1 = 5
let number2 = 8
// true && flase
let condition = !(number1 >= 3 || number2 >= 10)
console.log("condition:", condition);

let age = 30;
let gender = "ชาย";

// true && true = true
if (age >= 20 && gender == "ชาย"){
    console.log("ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}
*/
/*
let number = 20

if (number % 2 != 0){
    console.log(" เป็นเลขคู่")
}
 */

/*
loop statements:
while
for
*/

let counter = -1;
while (counter < 10){
    console.log('Hello World');
    //counter = counter + 1;
    counter += 1;
}

for(let i=0; i<10; i++){
    console.log('Hello World from for loop');
}