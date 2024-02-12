let arr = [20,5,9,10,12,35];
let y = arr.splice(2,0,100,200);
console.log(y);

console.log(arr);
arr[arr.length-1] = 300;
console.log(arr);