function isOddOrEven(num) {
    for (let i = 0; i <= num; i++) {
        const alertMessage = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, alertMessage);
    }
}

isOddOrEven(15);