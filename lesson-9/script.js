function multiples(num) {

  let sumOfMultipleValue = 0;

  for(let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      // console.log(i);
      sumOfMultipleValue +=i;
    }
  }
  // return sumOfMultipleValue;
  console.log(`sumOfMultipleValue of 3 & 5 upto ${num} digit is:`, sumOfMultipleValue);
}

multiples(10);