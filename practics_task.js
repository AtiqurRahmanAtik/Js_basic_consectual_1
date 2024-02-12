let taka = 1000;
let apple = 400;
let orang =300;

let total = apple + orang;

let back = taka - total;

console.log(back+" total "+ total);

console.log("========");

let math = 75.25;
let bangla = 65;
let english = 80;
let physic = 35.45;
let cemestry = 99.50;

let sum = math + bangla + english + physic + cemestry;

let avg = sum / 5;
console.log(avg.toFixed(2));
console.log("total is :"+sum);

console.log("======");

// let number = 119;

// let rem = number % 5;
// console.log(rem);

const a = isNaN('11');
const b = isNaN(2 - 10);

console.log(a);
console.log(b);

console.log("=========");

// 1 no
// let bargerPrice= 600;
// let coke = 30;

// if(bargerPrice >= 500){
//     console.log("free cook",coke);
// }
// else{
//     console.log(coke+bargerPrice);
// }


// 2 no.

// let BMI = 36;
// if (BMI <18.5){
//     console.log("you are underweight");
// }
// else if(BMI >=18.5 && BMI <24.9){
//     console.log('you are normal');
// }
// else if(BMI >=25 && BMI <=29.9){
//     console.log("overweighted");
// }

// else{
//     console.log("you are obese");
// }

// 3. no

// let score = 225;

// if(score >=90 && score <=100){
//     console.log('you are A+');
// }
// else if(score >=80 && score<=89){
//     console.log("you are B");
// }
// else if(score >=70 && score<=79){
//     console.log("you are c");
// }
// else if(score >=60 && score<=69){
//     console.log("you are d");
// }
// else if(score>=0 && score<=59){
//     console.log("F");
// }


// 4 no 

// let yourMarks= 89;
// let fried = 61;
// if(yourMarks > 80){

//     if(fried >=80 ){
//         console.log("go to lunckh");
//     }
//     else if(fried>=60 && fried<80){
//         console.log("good luck next time. ");
//     }
//     else if(fried>=40 && fried<60){
//         console.log("keep your friend's message unseen.")
//     }
//     else if(fried<40){
//         console.log("block your friend");

//     }
// }
// else{
//     console.log("sad you !");
// }


// 5. no 

// let num1 =5;
// let num2 = 3;


// let result = num1 > num2 ? num1 * num1 : num1 + num2;
// console.log("result is : "+result);

// 6. no

// let age = 15;
// ticketPrice = 800;
// let student = true;
// let discount;
// if(age < 10){
//     console.log("free ticket ");
// }
// else if (student== true && age <=59){
//    discount = ticketPrice * 50 /100;
//    console.log(discount);
//    console.log("payment", ticketPrice - discount);
// }
// else if(age >=60 && age<=100){
//     discount = ticketPrice * 15/100;
//     console.log(discount);
//     console.log("payment",ticketPrice - discount);
// }
// else{
//     console.log(ticketPrice);
// }


// 17.5  task 3
// let book = ['math','english','javaScript','bangla'];
// if(book.includes('javaScript')){
//     console.log("include book");
// }
// else{
//     console.log("not include here");
// }

// console.log(book);

// 17.5  task 4


let arr = ['atik','rony'];
let names = 'atik';
let x = Array.isArray( arr);
let y= Array.isArray(  names);

console.log("it is array "+x);
console.log("it is array "+y);
