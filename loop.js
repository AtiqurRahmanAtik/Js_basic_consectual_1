let x = 'atik rahman';
let a =[];
for(let z of x ){
    console.log(z);
    a.push(z);
}
console.log(a);

console.log('======');

let nam = 'atik';

for(let i=0; i<10; i++){
    if(i===7){
        break;
    }
    console.log(i+" no. "+nam);
}

console.log("=+++++");

let i =0;
let mul =1;
while(i<=5){
    
    mul = mul * i;
    i++;
    
    
    console.log(mul);
}

console.log("=======");

let j=0;

while(j<20){
    console.log(j);
    j+=2
}

console.log("======");

let arr= [20,25,30,66,11,6];

let sum =0;
let sub = 0;
for(let i=0; i<arr.length ; i++){
    if(arr[i] %2 ===0){
        sum= sum + arr[i];
    }
    else{
        sub = sub +arr[i];
    }
}

console.log(sum);
console.log(sub);