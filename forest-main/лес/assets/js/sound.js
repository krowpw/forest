let btnSound = document.querySelector(".btn-sound");
let sound = document.querySelector("audio");
btnSound.onclick = () => {
  if (sound.paused) {
    console.log("включить");
    sound.play();
  } else {
    console.log("выключаем");
    sound.pause();
  }
};
