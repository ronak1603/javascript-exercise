function rangeArray(start, end){
    const arr = [];
    for(let i = start; i<=end; i++){
        arr.push(i);
    }

    console.log('arr', arr)
    return arr;
}

let val1 = rangeArray(1, 5);
console.log('val1', val1)
console.log('--------');
let val2 = rangeArray(-5, 0)
console.log('val2', val2)