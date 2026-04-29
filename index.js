// Task 1: Adding and Removing Elements
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");    // Adds to the end
fruits.shift();           // Removes the first (apple)
fruits.unshift("grape");  // Adds to the beginning
console.log("Task 1 Final Fruits:", fruits);

// Task 2: Query and Access
let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
let resultsArray = [includesResult, firstIndex, lastIndex];
console.log("Task 2 Results:", resultsArray);

// Task 3: Combining Arrays
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");
console.log("Task 3 Final Teams:", allTeams);

// Task 4: Extracting and Splicing
let numbers = [10, 20, 30, 40, 50];
// slice(start, end) - non-destructive
let middleNumbers = numbers.slice(1, 3); 
// splice(index, howMany, add1, add2) - destructive
numbers.splice(3, 2, 60, 70); 
console.log("Task 4 middleNumbers:", middleNumbers);
console.log("Task 4 modified numbers:", numbers);

// Task 5: Sorting and Reversing
let scores = [85, 70, 95, 60, 75];
scores.sort();    // Sorts ascending
scores.reverse(); // Reverses that order to make it descending
console.log("Task 5 Final Scores:", scores);
