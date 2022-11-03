'use strict';
const inputShowRandom = document.querySelector(".input-cls");
const btnGenerate = document.querySelector(".btn-compute");
  
function getRandomNum()
{
    return Math.floor(Math.random() * 50 + 1);
}
btnGenerate.onclick = function () {

    inputShowRandom.value = getRandomNum();
}
 