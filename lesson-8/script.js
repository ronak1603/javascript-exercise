const person = {
    name: 'John',
    age: 24,
    title: 'Software Developer',
}

const bike = {
    comapnyName: 'Harley Davidson',
    numberPlateDigit: 1603,
}

function isObjectKeyString(obj){
    for(let key in obj){
        if(typeof(obj[key]) === 'string'){
            console.log(key,':', obj[key]);
        }
    }
}

isObjectKeyString(person);
console.log('---------');
isObjectKeyString(bike);
console.log('|||||||||')