function isFizzBuzz(t){
    if(typeof(t) !== 'number'){
        return 't is not a number: ' + t
    }

    if( t%3 === 0 ){
        return 'Fizz'
    }

    if(t%5 === 0){
        return 'Buzz'
    }

    if(t%3 === 0 && t%5 === 0){
        return 'FizzBuzz'
    }
}

let number = isFizzBuzz(10)
console.log(number)

let val = isFizzBuzz('ronak')
console.log(val);

