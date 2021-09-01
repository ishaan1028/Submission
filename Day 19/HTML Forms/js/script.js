

function submitted(e) {
    e.preventDefault();



    let genderAns = "";
    gender.forEach(val => {
        if (val.checked) {
            genderAns = val.value;
        }
    });

    let foods = {};
    let flag = true;
    options.forEach(val => {
        if (val.value in foods && flag) {
            alert("select different foods");
            flag = false;
            foods = {};
        }
        else if (val.value == "") {

        }
        else {
            foods[val.value] = 1;
        }

    });

    if (flag) {
        tbody.innerHTML += `<tr><td>${fname.value}</td><td>${lname.value}</td><td>${address.value}</td><td>${pincode.value}</td><td>${genderAns}</td><td>${Object.keys(foods).join(",")}</td><td>${state.value}</td><td>${country.value}</td></tr>`;

        document.forms[0].reset();

    }
    else {
        options.forEach(val => {
            val.value = "";

        });


    }
    foods = {};
    /*
    fname.value = "";
    lname.value = "";
    address.value = "";
    state.value = "";
    country.value = "";
    pincode.value = "";


    options.forEach(val => {
        val.value = "";

    });

    gender.forEach(val => {
        val.checked = false;
    });

    */

}








let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let state = document.getElementById("state");
let country = document.getElementById("country");
let options = document.getElementsByName("options");
let pincode = document.getElementById("pincode");
let address = document.getElementById("address");
let gender = document.getElementsByName("Gender");
let tbody = document.getElementById("tabbody");



// const optionsArray = {};

// options.forEach(option => {

//     option.addEventListener("change", () => {
//         if (option.value in optionsArray) {
//             alert("Please select different foods");
//             option.value = "";
//         }
//         else {
//             optionsArray[option.value] = 1;
//         }

//     })

// });

