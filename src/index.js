module.exports = function getZerosCount(number) {
  // your implementation    
  let counter = 0;

  while (number >= 5) {
    number = Math.floor(number / 5);
    counter += number;
  }

  return counter;
}
