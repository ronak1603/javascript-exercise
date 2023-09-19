function largestNumber(arr){
    return arr.reduce((largest, ele) => {
        return ( ele > largest )? ele : largest
    })
}

console.log(largestNumber([1, 4, 6, 23, 32]))