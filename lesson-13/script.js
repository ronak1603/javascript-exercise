function showPrime(val){
    for(let curVal = 2; curVal<=val; curVal++){
        if(isPrime(curVal)){
            console.log('Prime number:'+ curVal)
        }
    }

}

function isPrime(num){
    for(let i =2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }

    return true;
}

showPrime(10)