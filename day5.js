
// 1) Do the below programs in anonymous function & IIFE

// a) Print odd numbers in an array

//anonymous function
/*
let arr = [1, 2, 3, 4, 5];

let fun = function (arr) {

    arr.forEach(v => v % 2 !== 0 && console.log(v));


};

fun(arr);

*/

// IIFE

/*
let arr = [1, 2, 3, 4, 5];

(function (arr) {
    arr.forEach(v => v % 2 !== 0 && console.log(v));
})(arr);

*/

// ---------------------------------------------------------------------------------


// b) Convert all the strings to title caps in a string array

//anonymous function
/*
let arr = ["hello there", "i am madara", "a shinobi developer"];

let fun = function (arr) {

    arr = arr.map(e => {

        e = e.split(" ");

        e = e.map(s => {
            s = s.split("");
            s[0] = s[0].toUpperCase();
            return s.join("");
        })


        return e.join(" ");
    })

    console.log(arr);


};

fun(arr);

*/

// IIFE

/*
let arr = ["hello there", "i am madara", "a shinobi developer"];

(function (arr) {
    arr = arr.map(e => {

        e = e.split(" ");

        e = e.map(s => {
            s = s.split("");
            s[0] = s[0].toUpperCase();
            return s.join("");
        })


        return e.join(" ");
    })

    console.log(arr);
})(arr);
*/

// ---------------------------------------------------------------------------------

// c) Sum of all numbers in an array

//anonymous function
/*
let arr = [1, 2, 3, 4, 5];

let fun = function (arr) {
    let ans = 0;
    arr.forEach(v => ans += v);
    console.log(ans);

};

fun(arr);
*/

//IIFE

/*
let arr = [1, 2, 3, 4, 5];

(function (arr) {
    let ans = 0;
    arr.forEach(v => ans += v);
    console.log(ans);
})(arr);
*/

// ---------------------------------------------------------------------------------

// d) Return all the prime numbers in an array

//anonymous function
/*
let arr = [2, 3, 4, 5, 7, 9, 11, 12, 13, 15, 18, 20];

let fun = function (arr) {
    let z = [2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < z.length; j++) {

            if (arr[i] % z[j] == 0 && arr[i] != z[j]) {

                flag = false;
                break;

            }

        }

        flag ? console.log(arr[i]) : 1;

    }

};

fun(arr);

*/

//IIFE

/*
let arr = [2, 3, 4, 5, 7, 9, 11, 12, 13, 15, 18, 20];

(function (arr) {
    let z = [2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < z.length; j++) {

            if (arr[i] % z[j] == 0 && arr[i] != z[j]) {

                flag = false;
                break;

            }

        }

        flag ? console.log(arr[i]) : 1;

    }
})(arr);

*/

// ---------------------------------------------------------------------------------

// e) Return all the palindromes in an array

//anonymous function
/*
let arr = ["aba", "abc", "aa", "mom", "cat", "abcdba"];

const fun = function (arr) {
    arr = arr.map(e => {

        e = e.split("");

        for (let i = 0; i < e.length / 2; i++) {
            if (e[i] !== e[e.length - 1 - i]) return null;
        }

        return e.join("");

    }).filter(e => e !== null);

    console.log(arr);
}

fun(arr);
*/

// IIFE

/*
let arr = ["aba", "abc", "aa", "mom", "cat", "abcdba"];

(function (arr) {

    arr = arr.map(e => {

        e = e.split("");

        for (let i = 0; i < e.length / 2; i++) {
            if (e[i] !== e[e.length - 1 - i]) return null;
        }

        return e.join("");

    }).filter(e => e !== null);

    console.log(arr);

})(arr);

*/

// ---------------------------------------------------------------------------------


// f) Return median of two sorted arrays of same size

//anonymous function
/*
let merge = function (a1, a2) {

    let i = 0, j = 0, k = 0;
    let arr = [];
    for (i, j; i < a1.length && j < a2.length;) {
        if (a1[i] < a2[j]) {
            arr.push(a1[i]);
            i++;

        }

        if (a1[i] > a2[j]) {
            arr.push(a2[j]);
            j++;
        }

    }

    if (i == a1.length) {
        for (j; j < a2.length;) {
            arr.push(a2[j]);
            j++;
        }
    }

    if (j == a2.length) {
        for (i; i < a1.length;) {
            arr.push(a1[i]);
            i++;
        }
    }

    return arr;

}

let a1 = [1, 12, 15, 26, 38];

let a2 = [2, 13, 17, 30, 45];

let arr = merge(a1, a2);

let avg = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;

console.log(avg);

*/

//IIFE

/*
let a1 = [1, 12, 15, 26, 38];

let a2 = [2, 13, 17, 30, 45];

(function (a1, a2) {

    let i = 0, j = 0, k = 0;
    let arr = [];
    for (i, j; i < a1.length && j < a2.length;) {
        if (a1[i] < a2[j]) {
            arr.push(a1[i]);
            i++;

        }

        if (a1[i] > a2[j]) {
            arr.push(a2[j]);
            j++;
        }

    }

    if (i == a1.length) {
        for (j; j < a2.length;) {
            arr.push(a2[j]);
            j++;
        }
    }

    if (j == a2.length) {
        for (i; i < a1.length;) {
            arr.push(a1[i]);
            i++;
        }
    }

    let avg = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;

    console.log(avg);

})(a1, a2);

*/

// ---------------------------------------------------------------------------------


// g) Remove duplicates from an array

//anonymous function
/*
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];
let obj = {};

let fun = function (arr) {

    arr.forEach(v => obj[v] ? obj[v] = 1 : obj[v] = 1);
    arr = Object.keys(obj);
    console.log(arr);

};

fun(arr);

*/

//IIFE

/*
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];
let obj = {};

(function (arr) {

    arr.forEach(v => obj[v] ? obj[v] = 1 : obj[v] = 1);
    arr = Object.keys(obj);
    console.log(arr);

})(arr);

*/

// ---------------------------------------------------------------------------------


// h) Rotate an array by k times

//anonymous function

/*
let arr = [1, 2, 3, 4, 5];

let fun = function (arr, k) {

    while (k--) {

        let first = arr[arr.length - 1];

        for (let i = arr.length - 1; i >= 1; i--) {

            arr[i] = arr[i - 1];

        }

        arr[0] = first;



    }

    console.log(arr);

};

fun(arr, 2);

*/

//IIFE

/*
let arr = [1, 2, 3, 4, 5];

(function (arr, k) {

    while (k--) {

        let first = arr[arr.length - 1];

        for (let i = arr.length - 1; i >= 1; i--) {

            arr[i] = arr[i - 1];

        }

        arr[0] = first;



    }

    console.log(arr);

})(arr, 2);
*/

// ---------------------------------------------------------------------------------

// 2) https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

// ---------------------------------------------------------------------------------

// 3) Do the below programs in arrow functions

// a) Print odd numbers in an array

/*
const fun = (arr) => {
    arr.forEach(e => {
        e % 2 !== 0 && console.log(e)
    })
}

const arr = [1, 2, 3, 4, 5, 6];
fun(arr);

*/

// b) Convert all the strings to title caps in a string array

/*
let arr = ["hello there", "i am madara", "a shinobi developer"];

let fun = (arr) => {

    arr = arr.map(e => {

        e = e.split(" ");

        e = e.map(s => {
            s = s.split("");
            s[0] = s[0].toUpperCase();
            return s.join("");
        })


        return e.join(" ");
    })

    console.log(arr);


};

fun(arr);

*/

// c) Sum of all numbers in an array

/*
const arr = [1, 2, 3, 4, 5, 6];

const fun = (arr) => {

    const sum = arr.reduce((a, c) => a + c, 0);

    console.log(sum);

}

fun(arr);

*/

// d) Return all the prime numbers in an array

/*
let arr = [2, 3, 4, 5, 7, 9, 11, 12, 13, 15, 18, 20];

let fun = (arr) => {
    let z = [2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < z.length; j++) {

            if (arr[i] % z[j] == 0 && arr[i] != z[j]) {

                flag = false;
                break;

            }

        }

        flag ? console.log(arr[i]) : 1;

    }

};

fun(arr);

*/


// e) Return all the palindromes in an array

/*
let arr = ["aba", "abc", "aa", "mom", "cat", "abcdba"];

const fun = (arr) => {
    arr = arr.map(e => {

        e = e.split("");

        for (let i = 0; i < e.length / 2; i++) {
            if (e[i] !== e[e.length - 1 - i]) return null;
        }

        return e.join("");

    }).filter(e => e !== null);

    console.log(arr);
}

fun(arr);

*/