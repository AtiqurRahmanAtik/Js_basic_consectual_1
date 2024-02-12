
function   calculateMoney(totalTicket) {
    
    if(totalTicket <=0){
        return `Invalid Number`;
    }

    let ticketPrice = 120;
    let totalIncome = totalTicket * ticketPrice;

    let gardFree = 500;
    let totalStaf= 8;
    let totalLunchFree = totalStaf * 50;
    let totalKhoroc = gardFree + totalLunchFree;

    let ProfitBakerVai = totalIncome - totalKhoroc;

    return ` ${ProfitBakerVai} `;
}







function checkName (name){
    
    if(typeof name !=='string'){
        return "invalid";
    }


    for(let i=0; i<name.length; i++){
 
        let vowel = ['A','y','i','e','o' ,'u','w'];

        name = name.split("").join("").toLowerCase();

        if(vowel.includes(name[name.length -1])){
            return "Good Name";
        }
        else{
            return  "Bad Name";
        }
       
    }
}







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









function password(obj){

    if(!obj.siteName || !obj.name || !obj.birthYear){
        return "invalid";
    }
    else if(obj.birthYear.length <=4){
        return "invalid";
    }
 
    let siteName = obj.siteName.split(" ");
    let name = obj.name;
    let birthYear = obj.birthYear;
    
    for (let i=0; i<siteName.length; i++){
        siteName[i]= siteName[i][0].toUpperCase()+siteName[i].slice(1).toLowerCase();
    }
    

    return siteName +"#"+name+"@"+birthYear;

}








function  monthlySavings(arr, livingCost){

    if(!Array.isArray(arr) || typeof livingCost !=='number'){
        return "invalid input";
    } 

    let total =0;

    for(let x of arr){
        if(x >= 3000){
            
            let vat = x * 20 /100;
            let withOutVat = x - vat;
            total = total + withOutVat ;
            
        }
        else {
            total = total + x;
        }

    }
    
    let profit = total -livingCost;
    
    if(profit >=0){
        return profit;
    }
    else{
        return "earn more";
    }
    
}


  










