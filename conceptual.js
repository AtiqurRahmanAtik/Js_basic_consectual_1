// let arr= [10,25,35,40,6,11];
// let sum=0;
// let sub=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 ===0){
//         sum = sum +arr[i];
//     }
//     else{
//         sub= sub + arr[i];
//     }
// }
// console.log(sum);
// console.log(sub);

// let arr= [10,25,35,40,6,11];
// let sum=0;
// let sub =0;
// for(let x of arr){
//     if(x % 2 ===0){
//         sum = sum + x;

//     }
//     else{
//         sub = sub +x;
//     }
// }
// console.log(sum);
// console.log(sub);

// let i =5;

// do{
//     console.log(i);
//     i++;
// }
// while(i<10)

// let x = 'He llo world';
// let y = 'hello';

// console.log(x.toLowerCase().includes(y));


// let x = 'He llo world';
// let y = 'hello';
// let names = 'atiqur rahman';
// let a = names.split(" ").join(" + ");
// console.log(a);


// console.log(x.replace(/\s/g, '').toLowerCase().includes(y.toLowerCase()));


// very important code 

// let person = {
//     name : 'atik',
//     age : 36,
//     address : 'rajshahi',
//     isMale : true,
//     atik : {
//         age: 27,
//         isBSC : true
//     },
//     names : ['atik','rony','jony'],
// }
// for( let x in person){
    
//     console.log( x+" | "+person[x] +" " +typeof person[x]);
// }
// console.log(person.atik['isBSC']);
// console.log(person.names[2]);


// let person = {
//         name : 'atik',
//         age : 36,
//         address : 'rajshahi',
//         isMale : true,
// }

// let x = "my name is "+person.name+ " . age is "+person.age+ " my address is "+person.address+" i am : "+person.isMale ;



// let y = `my name is ${person.name} . my age is ${person.age} i am from ${person.address} . i am ${person.isMale}`;

// console.log(x);
// console.log("====");
// console.log(y);

// let names = 'tanvir ahmed';

// let rev = "";
// for(let i=names.length -1 ; i>=0; i-- ){
  
//     // console.log(names[i]);
//     rev = rev + names[i];
// }
// console.log(rev.split("").join(" "));


// very important code string

// let myInfo = 'my naMe iS atiQur rahMan';

// let gap = myInfo.split(" ");
// console.log(gap);
// for (let i=0; i<gap.length; i++){
//    gap[i]= gap[i][0].toUpperCase()+gap[i].slice(1).toLocaleLowerCase();
// }

// console.log(gap.join(" "));


// let toDoList = [
//    "buy groceries",
//     "complete project" ,
//     "Exercise",
//   " read a book",
//     "attend meeting",
// ]


//  toDoList.push("walt the dog");

//  if(!toDoList.includes('call a friend')) {
    
//      toDoList.push('call a friend');
//  }
//  else{
//     console.log('kicu kora lagbe nah');
//   }

//  if(toDoList.includes('attend meeting')){
//     let x = toDoList.indexOf('attend meeting');
//     toDoList.splice(x,1,'atik');

//  }
//  else{
//     console.log('not included');
//  }

// console.log(toDoList);

let obj = {
    name: 'atik',
    age : 26,
    address : 'rajshahi'
}


 function names (name){

   return `he's name is  ${name.name}. and he is from ${name.address}`
 }

 console.log(names(obj));
 
console.log("=========");

// function lengthConverter(mile){
//     let x = mile / 0.62137;
//     return x;
// }

// let y = lengthConverter(2);
// console.log(y);
 



function arr ( arr){
    let len = arr.length;
    sum = 0;
    if(arr % 2 ===1){
        console.log(arr);

    }
}

let arr = [10,9,12,16,19,3];
console.log(arr(arr));