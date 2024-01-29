// Task: Javascript functions and loop practice

// Part 1 - Creating a function

let numbers = [1, 2, 3, 4, 5];
let sum = calculateSum(numbers);

function calculateSum(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
    return sum;
  }
}
let result = sum;

console.log(result);

// Part 2 - Using a while loop

let counter = 0;
while (counter < 5) {
  counter += 1;
  console.log(counter);
// }

// Part 3 - Using a do-while loop

let countDown = 5;

do {
  countDown -= 1;
  console.log(countDown);
} while (countDown > 0);

// Part 4 - Function with conditional logic

function evaluateGrade(x) {
  if (x > 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(evaluateGrade(40));
console.log(evaluateGrade(50));
console.log(evaluateGrade(70));
console.log(evaluateGrade(100));
