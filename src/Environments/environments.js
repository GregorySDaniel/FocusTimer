import * as el from "./elements.js"

el.btnTree.addEventListener('click', () => {
  if (el.forestAudio.paused) {
    el.forestAudio.play();
  } else {
    el.forestAudio.pause();
  }
  el.btnTree.classList.toggle("pressed");
})
el.btnCloud.addEventListener('click', () => {
  if (el.rainAudio.paused) {
    el.rainAudio.play();
  } else {
    el.rainAudio.pause();
  }
  el.btnCloud.classList.toggle("pressed");
})
el.btnCoffe.addEventListener('click', () => {
  if (el.coffeAudio.paused) {
    el.coffeAudio.play();
  } else {
    el.coffeAudio.pause();
  }
  el.btnCoffe.classList.toggle("pressed");
})
el.btnFire.addEventListener('click', () => {
  if (el.fireplaceAudio.paused) {
    el.fireplaceAudio.play();
  } else {
    el.fireplaceAudio.pause();
  }
  el.btnFire.classList.toggle("pressed");
})