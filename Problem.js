// function anvTovori(ana){

//     if(typeof ana !=='number' || ana<0){
//         return 'number dao';
//     }
//     let vori = ana * 0.0625;
//     return vori;
// }

// let vori = 16;
// console.log(anvTovori(vori))




//problem

// function pandacost (singara, samucha,jilapi){

//     if(typeof singara !=='number' 
//      || typeof samucha !== 'number' 
//      || typeof jilapi !=='number' ){
//         return 'please gime a integer number';
//     }
//     else if(singara<=0 || samucha <=0 || jilapi <=0){
//         return 'dae positive';
//     }
//     let singaraPrince = 5;
//     let samuchaPrince =10;
//     let jilapiPrice = 20;

//     let total = singaraPrince * singara + samuchaPrince * samucha + jilapiPrice *jilapi;

//     return total;
// }


// console.log (pandacost(3,5,10));


//problem conceptual 

// function piciningBgert(person){

//     let buget = 0;
//     if(person < 100){
//         let fristcost = person * 5000;
//         return fristcost;

//     }
//     else if(person > 100 && person<=200){

//         let fristcost = 100* 5000;
//         let secndCost = (person - 1000)* 4000 ;
//         return secndCost; 
//     }
//     else if(person >200){
//         let tried = Fristcost * 300;
//         return tried;
//     }
// }

// let person = 180;
// console.log(piciningBgert(person));


// function cubeFunction(number){
//     if(typeof number !=='number'){
//         return 'number dao';
//     }
//     else if ( number <=0 ) {
       
//             return '0 deya jabe nah';
        
//     }
//     else{

//         let x = Math.pow(number,3);
//         return x;
//     }

// }

// let x = 5;
// console.log(cubeFunction(x));

// console.log("===");


// function stringMatch(str1,str2){
//    if(str1.includes(str2)){
//     return true;
//    }
//    else{
//     return false;
//    }



//problem 2
// let returns = str1.includes(str2);
// return true;
// }

// let x = 'John Doe';
// let y = 'ohn';
// console.log(stringMatch(x,y));



//problem 3

// function sortMaker(arr){

//     if(!Array.isArray(arr)){
//         return 'array dao'
//     }
//     let [a,b]= arr;
//     if(a<=0 || b<=0){
//         return false;
//     }
//     else if(a === b){
//         return 'equal';
//     }
//     else if (a !==b){
//         let des = arr.sort().reverse();
//         return des;
//     }
// }


// console.log(sortMaker([4,2]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([4,6]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([4,-6]));


//Problem 4

// function findAddress(object){

//    let street = object.street || "__";
//    let House = object.House || "++";
//    let socity = object.socity || "&&";

//    let str = street +","+House+","+ socity;
//    return str;

// }

// let obj = {
//     street : 10,
//     House : "15A",
//     socity : "Earth perfect"
// }
// console.log(findAddress (obj));

//Problem 5

// function canPay(arr , number){
//     if(arr.length === 0){
//         return "array is empty";
//     }
//     let sum= 0;

//     for(let x of arr){

//         sum = sum +x;

//     }
//     if(sum >= number){
//         return true;
//     }
//     else{
//         return false;
//     }

//     // return sum;
// }

// console.log(canPay([1,5,5], 10));


// function CoutnNumber(number){
//     let find= 5;
//     let sum =0;
//     for(let x of number){
//         if(x ===find){
//             sum ++;
//         }
//     }
//    return sum;
// }

// let numbers = [5,6,11,12,98,5];
// console.log (CoutnNumber(numbers));



// function largeWord (word){

//      word = word.split(" ");

    
//     let big= word[0];
//     for(let i=1; i<word.length; i++){
//         let all = word[i];
//         if(big.length < all.length){
//             big = all;
//         }
//     }
//     console.log(big);
// }

// let str = "i am learning Programming to becaome a programmer";

// largeWord(str);





// function mySavings(arr, livingCost){
//     let total =0;
//     let vat = 0;
//     let newArr =[];
//     for(let x of arr){
//         total += x;
//         if(x >= 3000){
//             let vat = x * 20 /100;
//             vat = x - vat;
//             // console.log(total - vat);
//             newArr.push(vat);
//             // console.log(vat);

//         }
//     }
//     let sum =0;
//     for(let i=0; i<newArr.length; i++){

//         sum = sum + newArr[i];
//     }
//     // console.log(newArr);
//     console.log(sum);

    
    
// }

// console.log(mySavings([ 1000 , 2000 , 3000 ] , 5400));




//original 5.no

// function monthlySavings(arr, livingCost){

//     if(!Array.isArray(arr) ){
//         return "invalid input";
//     } 
//     else if(typeof livingCost !=='number' ){
//         return "invalid input";
//     }

//     let total =0;

//     for(let x of arr){
//         if(x >= 3000){
            
//             let vat = x * 20 /100;
//             let withOutVat = x - vat;
//             total = total + withOutVat ;
            
//         }
//         else {
//             total = total + x;
//         }

//     }
    
//     let profit = total -livingCost;
//     // return profit;
//     if(profit >=0){
//         return profit;
//     }
//     else{
//         return "earn more";
//     }
    
// }


//     console.log(monthlySavings( [1000,2000,3000], 5400));
//     console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
//     console.log(monthlySavings( [ 900 , 2700 , 3400] , 10000));
//     console.log(monthlySavings(  100, [ 900 , 2700 , 3400]));

//problem no 3



function deleteInvalids(arr) {

    if(!Array.isArray(arr) ){
        return "error message";
    }
    
    let newArr = [];
   for(let i=0; i<arr.length; i++){
    if(typeof arr[i] ==='number' &&  !isNaN(arr[i]) && arr[i] !==null ){

        newArr.push(arr[i]);
    }
   }

   return newArr;
}

console.log(deleteInvalids([1, null , undefined ,18,-19,NaN,"12",[1,2],{ob:"lala"}]));

console.log(deleteInvalids ([1,2,-19]));

console.log(deleteInvalids ([1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}]));



