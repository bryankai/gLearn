function mode(numbers) {

 // function to count # of occurances
 function occurances(value,array) {
  let counter = 0;
  for (let i=0; i<array.length; i++) {
    if (value === array[i]) {
      counter++;
    }
  }
  return counter
 }
  let occuranceArray = [];
  // creates array of how many times each of those elements appear in the array
  for (let j=0; j<numbers.length; j++) {
    occuranceArray.push(occurances(numbers[j],numbers));
  }
  // how many times the mode appears
  let maxOccurance = (Math.max(...occuranceArray));
  // where the mode is
  let index = occuranceArray.indexOf(maxOccurance);
  // found the mode!
  let result = numbers[index];
  return result
}

mode([2,2,3,2,1])
