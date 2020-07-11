var buttonsList = document.querySelectorAll("button");
var audio;

for (var i = 0; i < buttonsList.length; i++) {
  var btnNo = buttonsList[i];

  btnNo.addEventListener("click", handleClick);
}

function handleClick() {
  var btnInner = this.innerHTML;

  btnAnimation(btnInner);

  switch (btnInner) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;

  btnAnimation(keyPressed);

  switch (keyPressed) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      break;
  }
});

function btnAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.toggle("pressed");

  setTimeout(function() {
    activeButton.classList.toggle("pressed");
  }, 100);
}
