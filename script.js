const WHITE_KEY = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEY = ["s", "d", "g", "h", "j"];

const key = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

key.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
    if(e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEY.indexOf(key);
  const blackKeyIndex = BLACK_KEY.indexOf(key);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
