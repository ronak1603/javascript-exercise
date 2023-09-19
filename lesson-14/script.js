function sumOfArgs(...rest){
    return rest.reduce((total, curVal) => total+curVal )
}

console.log("items:", sumOfArgs(10, 5, 18, 2, 4))