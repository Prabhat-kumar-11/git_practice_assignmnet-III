function checkPrime(n){
    let isPrime = true;
    for(let i = 2; i*i <= n; i++){
        if(n % i == 0){
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

let num = 11;

if(checkPrime(num)){
    console.log(num + " is prime");
}
else{
    console.log(num + " is not prime");
}