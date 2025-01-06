let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


// Update the result based on random numbers
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

//document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice`${randomNumber1}`.png")
document.getElementsByClassName("img1")[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
document.getElementsByClassName("img2")[0].setAttribute("src", `./images/dice${randomNumber2}.png`);



