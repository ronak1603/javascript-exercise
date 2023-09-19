function sumOfArgs(...items){
    if(items.length === 2 && Array.isArray(items[0]) && Array.isArray(items[1])){
        console.log(items[0].reduce((a,b) => a + b))
        console.log(items[1].reduce((a,b) =>{ 
            console.log(a, 'few');
            return (a-b);
        }))
        return items[0].reduce((a,b) => a + b);
    }
}

console.log("sum of items", sumOfArgs([10, 4, 2, 7 ,5], [34, 6, 23, 4, 1]))