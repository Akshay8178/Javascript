'use strict';
let imagesofdice = document.querySelector(".Dice")
let scoreofplayer1 = document.getElementById("score-1");
let scoreofplayer2 = document.getElementById("score-2");
let Rolldicebutton = document.getElementById("centerelement-2");
let current1 = document.getElementById("current--1")
let current2 = document.getElementById("current--2")
imagesofdice.classList.add("hidden");

let score = 0;


function rolldice(){
    let random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);
    imagesofdice.classList.remove("hidden");  
    imagesofdice.src = `dice-${random}.png`;
    score += random;
    current1.innerHTML = score ;   
    if (random == 1){   
        scoreofplayer1.innerText = score ;   
        current1.innerText = 0 ;     
        score = 0 ; 
    }  
}



 
Rolldicebutton.addEventListener("click" , rolldice);