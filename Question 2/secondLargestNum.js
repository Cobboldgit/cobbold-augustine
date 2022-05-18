const secondLargestNumber = (array) => {
  // Check array length
  if (array.length < 2) {
    return "Array must be more than 1";
  }

  // Sort array in ascending order
  array.sort((a, b) => {
    return a - b;
  });

  // Loop through the array:
  // Start from second last number
  // Because it is the second largest
  for (let i = array.length - 2; i >= 0; i--) {

    // if the element is not equal to the largest number
    if (array[i] != array[array.length - 1]) {
      return `The second largest number is ${array[i]}`;
    }

  }
};

