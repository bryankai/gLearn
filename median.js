function median(numbers) {
  // sort array in numerical order
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i+1]<numbers[i]) {
      const temp = numbers[i];
      numbers[i] = numbers[i+1];
      numbers[i+1] = temp;
    }
  }
  console.log(numbers);
  // if odd, select middle number
  if (numbers.length%2==1) {
    
  }
  // if even, take average of middle numbers

  }

median([1,2,3,5,6,2,3,3])
