const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const progressArea = document.getElementById('progressArea');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const playSVG = '<path d="M8 5v14l11-7z"/>';
const pauseSVG = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

// 播放/暫停 控制
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

// 進度條更新
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${pct}%`;
  }
});

// 點擊進度條跳轉時間
progressArea.addEventListener('click', (e) => {
  if (!audio.duration) return;
  const rect = progressArea.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  audio.currentTime = (clickX / rect.width) * audio.duration;
});

// 快進/倒退 10 秒
prevBtn.addEventListener('click', () => audio.currentTime -= 10);
nextBtn.addEventListener('click', () => audio.currentTime += 10);

// 渲染 pageData 資料（包含標題、簡介，可順便將音訊網址一併動態化）
document.addEventListener("DOMContentLoaded", () => {
  if (typeof pageData !== "undefined") {
    if (pageData.title) document.getElementById("title-text").textContent = pageData.title;
    if (pageData.intro) document.getElementById("intro-text").textContent = pageData.intro;
    if (pageData.audioUrl) audio.src = pageData.audioUrl; // 💡 讓音訊網址也能從 data.js 替換
  } else {
    console.error("找不到 pageData，請確認 index.html 是否已正確引入 data.js");
  }
});