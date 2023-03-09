const prompt = require('prompt-sync')()

const num = parseInt(prompt("Enter Your Number: "))
isPrime= true;

if(num===1){
    console.log("1 is neither prime number nor composite number.")
}
else if(num>1){
    for(let i=12;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is a Prime Number`)
    }
    else{
        console.log(`${num} is not a Prime Number`)
    }
}
else{
    console.log("The Number is not a positive number")
}
