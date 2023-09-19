function eleOccurance(arr, ele){
    return arr.reduce((count, eleToSearch) =>{
        let countOccurance = (eleToSearch === ele) ? 1: 0
        return count + countOccurance;
    }, 0)
}

console.log(eleOccurance([23, 2, 4, 2, 5, 2, 56, 7, 2], 2));