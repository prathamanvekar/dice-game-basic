var randomNumber1 = Math.floor((Math.random() * 6)+1);

var randomNumber2 = Math.floor((Math.random() * 6)+1);

var element1 = document.getElementsByClassName("img1")[0];

element1.setAttribute("src","./images/dice" + randomNumber1 + ".png");

var element2 = document.getElementsByClassName("img2")[0];

element2.setAttribute("src","./images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!🚩";
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
} else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!📍";
}