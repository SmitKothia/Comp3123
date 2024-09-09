function findLargestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = 1000;
let num2 = 510;
let num3 = 440;

let largest = findLargestOfThree(num1, num2, num3);

console.log("Largest of three given integers:");
console.log(num1, num2, num3);
console.log("Largest integer is: " + largest);
