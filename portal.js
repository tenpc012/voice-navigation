import { spotsData } from './spotsData.js';

// 系統介面文字翻譯對照表 (用於 00 號竹簡)
const uiTranslations = {
  "zh-tw": "返回語言選擇",
  "en": "Return to Language Selection",
  "ja": "言語選択に戻る",
  "ko": "언어 선택으로 돌아가기",
  "vi": "Quay lại chọn ngôn ngữ",
  "id": "Kembali ke Pilihan Bahasa",
  "th": "กลับไปที่การเลือกภาษา",
  "ms": "Kembali ke Pilihan Bahasa",
  "fr": "Retour à la sélection de la langue",
  "es": "Volver a la selección de idioma",
  "de": "Zurück zur Sprachauswahl",
  "ar": "العودة إلى اختيار اللغة",
  "pt": "Voltar à seleção de idioma"
};

let selectedLang = "";

window.selectLanguage = function(langCode) {
  selectedLang = langCode;

  const langCard = document.getElementById("langCard");
  const container = document.getElementById("bambooContainer");
  const slatsBox = document.getElementById("bambooSlats");

  // 淡出語言卡片
  langCard.style.opacity = "0";
  langCard.style.transform = "translateY(-10px)";

  setTimeout(() => {
    langCard.style.display = "none";
    slatsBox.innerHTML = "";
    container.style.display = "flex";

    // A. 根據選擇的語言，取得 00 號返回鍵的文字
    const backText = uiTranslations[selectedLang] || uiTranslations["en"];

    // 生成【00 返回】竹簡
    const backSlat = document.createElement("a");
    backSlat.className = "slat-item slat-back";
    backSlat.href = "javascript:void(0);";
    backSlat.onclick = resetLanguage;
    backSlat.innerHTML = `
      <div><span class="num">00</span> ${backText}</div>
      <small style="color:#ffb400;">◄</small>
    `;
    slatsBox.appendChild(backSlat);
    setTimeout(() => backSlat.classList.add("show"), 10);

    // B. 根據選擇的語言取得對應景點清單（若未設定則預設顯示中文）
    const currentSpotList = spotsData[selectedLang] || spotsData["zh-tw"];

    // 生成 01 ~ 29 景點竹簡，直接使用 spotsData 中的相對路徑 url
    currentSpotList.forEach((spot, index) => {
      const numStr = String(index + 1).padStart(2, '0');
      
      const slat = document.createElement("a");
      slat.className = "slat-item";
      slat.href = spot.url; // 這裡使用的是方案 B 的相對路徑
      slat.innerHTML = `
        <div><span class="num">${numStr}</span> ${spot.name}</div>
        <small style="color:#d4af37;">►</small>
      `;
      
      slatsBox.appendChild(slat);

      setTimeout(() => {
        slat.classList.add("show");
      }, (index + 1) * 35);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 350);
};

function resetLanguage() {
  const langCard = document.getElementById("langCard");
  const container = document.getElementById("bambooContainer");
  const slats = document.querySelectorAll(".slat-item");

  slats.forEach(slat => slat.classList.remove("show"));

  setTimeout(() => {
    container.style.display = "none";
    langCard.style.display = "block";

    setTimeout(() => {
      langCard.style.opacity = "1";
      langCard.style.transform = "translateY(0)";
    }, 50);
  }, 300);
}