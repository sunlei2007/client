'use strict';
const guess = document.querySelector(".guess");
const newNum = document.querySelector(".sys-number");
const msg = document.querySelector(".msg-cls");
const btn = document.querySelector(".btn-compute");
  
function getRandomNum()
{
    return Math.floor(Math.random() * 50 + 1);
}
btn.onclick = function () {

    var myNumber = getRandomNum();
    var sysNumber = getRandomNum();
    guess.innerText = `Guesses: ${myNumber}`;
    newNum.innerText = `${sysNumber}`;

    myNumber > sysNumber ? msg.innerText = "My number is biggger" : msg.innerText = "My number is smaller";

    btn.value = "Restart";
}
 