function searchElement(arr, ele) {
    for (let val of arr) {
        if (val === ele) {
            return true;
        }
    }
    return false;
}

let boolean = searchElement([14, 5, 3, 6, 7], 3);
console.log(boolean)