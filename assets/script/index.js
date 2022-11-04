'use strict';
const guess = document.querySelector(".input-cls");
const newNum = document.querySelector(".sys-number");
const msg = document.querySelector(".msg-cls");
const btn = document.querySelector(".btn-compute");
let isBegin = 0;
let count = 4;
window.onload = function () {
    setInterval(function () {
        console.log(isBegin);
        if (isBegin!==0) {
            newNum.innerText = `${getRandomNum()}`;
        }
    }, 1000);
}
function getRandomNum()
{
    return Math.floor(Math.random() * 50 + 1);
}

btn.onclick = function () {
    msg.innerText = "";
    if (guess.value.trim() === "") {
        msg.innerText = "Please input number!";
        return;
    }
    if (count === 0) {
        msg.innerText = "You only have four chances!";
        return;
    }
    if (btn.value === "Start") {
        isBegin = 1;
        btn.value = "Stop";
    }else if (btn.value === "Stop") {
        count--;
        isBegin = 0;
        btn.value = "Start";
        guess.value === newNum.innerText ? msg.innerText = "Congratulation win!" : msg.innerText = "Try again!";
    }
}

 