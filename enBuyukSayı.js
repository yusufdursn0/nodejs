const numbers = [10, 11, 42, 99, 32, 5];
let maxNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log("En büyük sayı:", maxNumber);