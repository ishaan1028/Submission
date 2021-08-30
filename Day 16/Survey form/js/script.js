
let s1 = document.querySelector('#s1');
let s2 = document.querySelector('#s2');
let s3 = document.querySelector('#s3');
let s4 = document.querySelector('#s4');
let s5 = document.querySelector('#s5');

let stars = [s1, s2, s3, s4, s5];

function off() {
    stars.forEach(v => {
        v.classList.remove('lit');
    });
}

s1.addEventListener("click", () => {
    off();
    s1.classList.add('lit');
});

s2.addEventListener("click", () => {

    off();
    for (let i = 0; i < 2; i++) {
        stars[i].classList.add('lit');
    }
});
s3.addEventListener("click", () => {

    off();
    for (let i = 0; i < 3; i++) {
        stars[i].classList.add('lit');
    }
});
s4.addEventListener("click", () => {

    off();
    for (let i = 0; i < 4; i++) {
        stars[i].classList.add('lit');
    }
});
s5.addEventListener("click", () => {

    off();
    for (let i = 0; i < 5; i++) {
        stars[i].classList.add('lit');
    }
});