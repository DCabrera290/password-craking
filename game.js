const passwordForm = document.querySelector("#password-form");

const playerSelector = document.getElementById("image-select");
const playerImg = document.getElementById("character-image");

const anonymous =
  "https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_640.png";
const opHacker =
  "https://static1.bigstockphoto.com/7/2/2/large1500/227356579.jpg";
const greenHacker =
  "https://play-lh.googleusercontent.com/Pn1YFGox_nG5pQmHol4XX5-CF1shOZCbzDChgmr1F52F86PTAIpevJHie-zY4QPsm0fa";
const hackerOne =
  "https://static.vecteezy.com/system/resources/thumbnails/029/621/646/small/hacker-with-laptop-hacking-computer-system-isolated-on-transparent-background-png.png";

playerImg.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png";
playerSelector.addEventListener("change", function () {
  let userChoice = this.value;
  if (userChoice == 1) {
    playerImg.src = anonymous;
  } else if (userChoice == 2) {
    playerImg.src = opHacker;
  } else if (userChoice == 3) {
    playerImg.src = greenHacker;
  } else if (userChoice == 4) {
    playerImg.src = hackerOne;
  }
});
// initialize game variables
let phrase = "loremipsum";
let index = 0;
let wrongCounter = 0;
let wrong = document.getElementById("wrong");

playerImg.addEventListener("change", function () {});
for (let char of phrase) {
  const letterInput = document.createElement("input");
  letterInput.type = "text";
  letterInput.classList.add("letter-input");
  letterInput.maxLength = "1";
  letterInput.id = index.toString();
  passwordForm.appendChild(letterInput);
  index++;
}

passwordForm.addEventListener("change", function (event) {
  const thisInput = event.target;
  const guess = thisInput.value;

  if (guess === phrase[thisInput.id]) {
    console.log("You guessed right!");
  } else {
    console.log("Wow... you really suck at this!");
  }
  if (guess === phrase[parseInt(thisInput.id)]) {
    thisInput.disabled = true;
    thisInput.style.backgroundColor = "green";
  } else {
    thisInput.disabled = true;
    thisInput.style.backgroundColor = "darkred";
    thisInput.style.border = "1px dotted red";
    wrongCounter++;
    wrong.textContent = wrongCounter;
  }
});
