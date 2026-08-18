const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const progressArea = document.getElementById('progressArea');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const playSVG = '<path d="M8 5v14l11-7z"/>';
const pauseSVG = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().then(() => {
      playIcon.innerHTML = pauseSVG;
    }).catch(err => {
      console.error("播放發生錯誤：", err);
    });
  } else {
    audio.pause();
    playIcon.innerHTML = playSVG;
  }
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${pct}%`;
  }
});

progressArea.addEventListener('click', (e) => {
  if (!audio.duration) return;
  const rect = progressArea.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  audio.currentTime = (clickX / rect.width) * audio.duration;
});

prevBtn.addEventListener('click', () => audio.currentTime -= 10);
nextBtn.addEventListener('click', () => audio.currentTime += 10);