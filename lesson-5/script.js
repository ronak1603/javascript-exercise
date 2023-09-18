const penaltyPoint = 5
const speedLimit = 70
function checkSpped(s){
    if(s<70){
        return 'everthing is safe!'
    }
    else{
        let point = Math.floor((s-speedLimit)/penaltyPoint)
        if(point<10){
            return ('Speed Limit Crossed by Penalty Point: ' + point);
        }
        else{
            return 'Liscense Suspended'
        }
          
    }
}

let val1 = checkSpped(70)
console.log(val1)

let val2 = checkSpped(63)
console.log(val2)

let val3 = checkSpped(100)
console.log(val3)

let val4 = checkSpped(120)
console.log(val4)