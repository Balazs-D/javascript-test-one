// Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".

function begin(city) {
    if (city.startsWith("Los") || (city.startsWith("New"))) {
        console.log("Task 1: " + city);
    } else {
        console.log("Task 1: " + "The city name does not begin with Los or New");
    }
    return;
}

begin("Los Angeles");

// 2. Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.


function compute(sum) {
    return sum[0] + sum[1] + sum[2];
}
console.log("Task 2: " + (compute([3, 8, 9])));


// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".

let firstName = "John";
let lastName = "Doe"

console.log("Task 3: " + lastName + "," + firstName);

// 4. Write a program that takes an integer and returns true if it's divisible by 100, otherwise return false.


function divisible(integer) {
    if (integer % 100 === 0) {
        console.log("Task 4: " + "True")
    } else {
        console.log("Task 4: " + "False")
    }
    return

}
divisible(2800)

// 5. Write a program that adds a string ending to each item in an array.

let fruits = ["apple", "orange", "kiwi"];

function addEnd(ending) {

}



// 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.

let number = 11;

if (number % 2 === 0) {
    console.log(number + " is even.")
} else {
    console.log("Task 6: " + number + " is odd.");
}

// 7. You are given 2 out of 3 angles of a triangle, in degrees e.g. 29° and 59°. Write a program that classifies the missing angle (the third angle of a triangle) as either "acute", "right", or "obtuse" based on its degrees.

function angleClass(a, b) {
    if (180 - (a + b) < 90) {
        console.log("Task 7: " + "Missing angle is: acute")
    } else if  (180 - (a + b) === 90) {
        console.log("Task 7: " + "Missing angle is: right")
    } else {
        console.log("Task 7: " + "Missing angle is: obtuse")
    }

    

}

(angleClass(29,59))


// 8. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".

let testName = "maria jane jones";

function uppercase(testName) {
    return testName.charAt(0).toUpperCase() + testName.slice(1);

}

console.log("Task 8: " + (uppercase("maria jane jones")));

// 9. Write a program that takes a string and returns the word count. The string will be a sentence.

function countAndReturn(sentence) {
    return sentence.split(" ").length;    
}
console.log("Task 9: " + countAndReturn("The string will be a sentence"));

// 10. Write a program to multiply each value in an array by the number of items in that array.

let ourArray = [2, 3, 1, 0];

function multiByLength(a,b){
for(i = 0; i < ourArray.length; i++){

}

}

multiByLength(ourArray);

   