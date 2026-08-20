import { spotsData } from './spotsData.js';

const langSelect = document.getElementById("langSelect");
const menuContainer = document.getElementById("menu");

// 渲染選單函式
function renderMenu(lang) {
  // 如果傳入的語系不存在，自動退回使用繁體中文
  const spots = spotsData[lang] || spotsData["zh-TW"];

  menuContainer.innerHTML = spots.map(spot => {
    return `<a href="${spot.url}" class="menu-item">${spot.name}</a>`;
  }).join("");
}

// 監聽下拉選單切換
if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    renderMenu(e.target.value);
  });
}

// 初次載入預設繁體中文
renderMenu("zh-TW");