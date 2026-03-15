const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
let playing = false;

function toggleMusic() {
  if (playing) {
    music.pause();
    musicIcon.className = 'fas fa-music';
    musicBtn.classList.add('muted');
    playing = false;
  } else {
    music.play();
    musicIcon.className = 'fas fa-pause';
    musicBtn.classList.remove('muted');
    playing = true;
  }
}

document.addEventListener('click', function startMusic() {
  if (!playing) {
    music.volume = 0.4;
    music.play().then(() => {
      playing = true;
      musicIcon.className = 'fas fa-pause';
    }).catch(()=>{});
  }
  document.removeEventListener('click', startMusic);
}, { once: true });