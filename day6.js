// 1 Practice(submission not needed) - https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373

// 2) https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb

//3 https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359

// a) Write a code to print the numbers in the array

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i]
}
console.log(new_string);

// Output: 1234567891011

*/

// b) Write a code to print from last to first with spaces(Make sure there is no space after the last element

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var new_string = "";

for (var i = 10; i >= 0; i--) {
    new_string += numsArr[i] + " "
}
console.log(new_string.trim());

// Output: 11 10 9 8 7 6 5 4 3 2 1

*/

// c) Write a code to replace the array value — If the number is even, replace it with ‘even’.

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);

// Output: [1, 'even', 3,'even', 5, 'even',7, 'even', 9,'even', 11]

*/

// d) Write a code to replace the array value — If the index is even, replace it with ‘even’.

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        numsArr[i] = "even"
    }
}

console.log(numsArr);

// Output: ['even', 2, 'even',4, 'even', 6,'even', 8, 'even',10, 'even']

*/

// e) Write a code to add all the numbers in the array

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var sum = 0;

for (var i = 0; i <= 10; i++) {
    sum += numsArr[i]
}
console.log(sum);

// Output: 66

*/

// e) Write a code to add even numbers in the array

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var sum = 0;

for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) sum += numsArr[i]
}
console.log(sum);

// Output: 30

*/


//f) Write a code to print elements in the inner arrays

/*
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

let ans = "";
numsArr.forEach(e => {
    ans += e.join(" ") + " "
});

console.log(ans.trim());


// Output: 1 2 3 4 5 6 7 8 9 10 11

*/

// g) Write a code to add elements in the inner arrays based on odd or even values

/*
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 != 0) {
            sum_odd += inner_array[j]
        }
        else {
            sum_even += inner_array[j]
        }
    }
}

console.log(sum_odd);
console.log(sum_even);

// Output: 36 30

*/


// 4) https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d

// a) Fix the code to get the largest of three.

/*
aa = (f, s, t) => {

    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);

// Output: 1 2 3
// 3

*/

// b) Fix the code to Sum of the digits present in the number

/*
let n = 123;

function add(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += +n[i]
    }
    return sum;
}

console.log(add(n.toString()));

// Output: 6

*/

// c)Fix the code to Sum of all numbers using IIFE function

/*
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();

// Output: 38

*/


// d) Fix the code to gen Title caps.

/*

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].split("")[0].toUpperCase() + arr[i].slice(1, arr[i].length));
    }
}
ano(arr);

//Output
// Guvi
// Geek
// Zen
// Fullstack


*/

// e) Fix the code to return the Prime numbers

/*
const newArray = [1, 3, 2, 5, 10];

const myPrime = newArray.filter(num => {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && num !== i) {
            return false;
        }
    }
    return num > 1;
});

console.log(myPrime);

// Output: [ 3, 2, 5 ]

*/