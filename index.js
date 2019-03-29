

// var leftDie = Math.random();
// leftDie = leftDie * 6;
// leftDie = Math.floor(leftDie) + 1;
// console.log(leftDie);

// var rightDie = Math.random();
// rightDie = rightDie * 6;
// rightDie = Math.floor(rightDie) + 1;
// console.log(rightDie);

// if (leftDie === 6){
//     var leftDie = document.querySelectorAll("img")[0];
//     leftDie.setAttribute("src", "images/dice6.png");
// } else if (leftDie === 5) {
//     var leftDie = document.querySelectorAll("img")[0];
//     leftDie.setAttribute("src", "images/dice5.png");
// } else if (leftDie === 4) {
//     var leftDie = document.querySelectorAll("img")[0];
//     leftDie.setAttribute("src", "images/dice4.png");
// } else if (leftDie === 3) {
//     var leftDie = document.querySelectorAll("img")[0];
//     leftDie.setAttribute("src", "images/dice3.png");
// }else if (leftDie === 2) {
//     var leftDie = document.querySelectorAll("img")[0];
//     leftDie.setAttribute("src", "images/dice4.png");
// }else{
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
// }

//
const randomNumber1 = Math.floor(Math.random() *6) + 1;
const randomDiceImage = "dice" + randomNumber1 + ".png";
const randomImageSource = "images/" + randomDiceImage;
const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

const randomNumber2 =  Math.floor(Math.random() *6) + 1;
const randomDiceImage2 = "dice" + randomNumber2 + ".png";
const randomImageSource2 = "images/" + randomDiceImage2;
const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber2 > randomNumber1){
    document.querySelectorAll("h1")[0].innerHTML="Player2 Wins!";
} else if (randomNumber2 === randomNumber1){
    document.querySelectorAll("h1")[0].innerHTML="It is a tie!";
}
else {
    document.querySelectorAll("h1")[0].innerHTML="Player1 Wins!";
}
