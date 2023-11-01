let on_off = document.querySelector('.icon .title');
let audio = document.querySelector('.musicOn audio');

on_off.onclick = function() {
  audio.paused ? audio.play() : audio.pause();
}