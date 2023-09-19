function excludeElement(arr, ele){
    const newArr = [];
    for(let val of arr){
        if(!ele.includes(val)){
            newArr.push(val)
        }
    }
    return newArr
}

console.log(excludeElement([23, 4, 3, 67, 5], [5]))