'use strict';

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // for invalid press

  key.classList.add('playing');

  audio.currentTime = 0; //continue playing
  audio.play();
}

function removeTransition(e) {
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
