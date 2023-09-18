const valueArray = [0, 1, '', undefined, false, true];
function checkValuesOfArray(a){
    let flag = 0;
    for (let i of valueArray) {
        if(i){
            flag = 1;
        }
    }
    return flag;
}

console.log(checkValuesOfArray(valueArray))