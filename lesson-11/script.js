const marks = [55, 65, 75, 85]

function calAvg(marks){
    let sum=0;
    for(let val of marks){
        sum+=val;
    }
    console.log((sum)/marks.length)
    return ((sum)/marks.length)
}
console.log('Average:',calAvg(marks));

function calGrades(marks){
    let avg = calAvg(marks)
    if (avg>= 70 && avg<=80 ){
        return ("Grade A")
    }
    else if (avg >= 81 && avg < 91){
        return ('Grade B')
    }
    else if (avg >= 91 && avg <= 100){
        return ('Grade c')
    }
}

console.log('Grade:',calGrades(marks));