// 1. 各語系的 29 個景點名稱字典
const spotsData = {
  "zh-tw": [
    "歡迎來到十鼓文創園區","糖鐵軌道與糖業趣聞","十鼓餐廳-五分車廂","煙囱","煙囱內部","糖Bar子-砂糖打包區","魔法工廠","上帝的畫作~大自然的活畫布",
    "糖蜜三連罐-獸骨祭壇","糖蜜三連罐-兒童體驗館","糖蜜三連罐-鼓波咖啡","魔法帽涼亭＆甜蜜之丘","齒輪舞台","車路墘故事館","清溪林製鼓廠","甘蔗廁所",
    "魔法彩虹街","生命之樹-天空步道","魔域王座","夢糖劇場-五重壓榨機","修護書屋","撐篙划船區","結晶罐～銀河糖晶扭蛋機","攪拌器～室內射箭場",
	"天井紅屋＆火車頭","天堂上的鞦韆","糖箱區-鋼鐵鐳戰","一粒糖的旅行","祈福館～黃帝殿"
  ],
  "en": [
    "Welcome to Ten Drum Cultural and Creative Park",
    "Sugar Railway Tracks & Sugar Industry Trivia",
    "Ten Drum Restaurant - Five-Cent Carriages",
    "Chimney",
    "Inside the Chimney",
    "Sugar Bar - Sugar Packing Area",
    "Magic Factory",
    "God's Painting ~ Nature's Living Canvas",
    "Molasses Tanks - Beast Bone Altar",
    "Molasses Tanks - Children's Experience Hall",
    "Molasses Tanks - Drum Wave Cafe",
    "Magic Hat Pavilion & Sweet Hill",
    "Gear Stage",
    "Cheluqian Story House",
    "Qingxilin Drum Factory",
    "Sugarcane Restroom",
    "Magic Rainbow Street",
    "Tree of Life - Skywalk",
    "Throne of the Magic Realm",
    "Dream Sugar Theatre - Five-Stage Crusher",
    "Repair Book House",
    "Punting Boat Area",
    "Crystallization Tank ~ Milky Way Sugar Crystal Gashapon Machine",
    "Mixer ~ Indoor Archery Range",
    "Patio Red House & Locomotive",
    "Swing on Heaven",
    "Sugar Box Area - Steel Laser Battle",
    "A Grain of Sugar's Journey",
    "Blessing Hall ~ Huangdi Temple"
  ],
  "ja": [
    "十鼓文創園区へようこそ",
    "糖鉄軌道と砂糖産業のトリビア",
    "十鼓レストラン - トロッコ車両",
    "煙突",
    "煙突内部",
    "シュガーBar - 砂糖パッキングエリア",
    "魔法工場",
    "神様の絵画〜大自然の生きたキャンバス",
    "糖蜜タンク - 獣骨の祭壇",
    "糖蜜タンク - キッズ体験館",
    "糖蜜タンク - 鼓波カフェ",
    "魔法の帽子東屋＆スウィートヒル",
    "ギアステージ",
    "車路墘ストーリーハウス",
    "清渓林製太鼓工場",
    "サトウキビトイレ",
    "魔法のレインボーストリート",
    "生命の樹 - スカイウォーク",
    "魔域の玉座",
    "夢糖劇場 - 五重圧搾機",
    "修繕ブックハウス",
    "竿さし舟エリア",
    "結晶タンク〜天の川シュガークリスタルガチャガチャ",
    "ミキサー〜屋内アーチェリー場",
    "吹き抜け赤レンガ館＆機関車",
    "天国のブランコ",
    "砂糖箱エリア - スチールレーザータグ",
    "一粒の砂糖の旅",
    "祈福館〜黄帝殿"
  ],
  "ko": [
    "십고 문화창의구역에 오신 것을 환영합니다",
    "설탕 철도와 설탕 산업 이야기",
    "십고 레스토랑 - 오분차 객차",
    "굴뚝",
    "굴뚝 내부",
    "설탕 Bar - 설탕 포장 구역",
    "마법 공장",
    "신의 그림 ~ 대자연의 살아있는 화폭",
    "당밀 탱크 - 짐승 뼈 제단",
    "당밀 탱크 - 어린이 체험관",
    "당밀 탱크 - 고파 카페",
    "마법 모자 원두막 & 스위트 힐",
    "톱니바퀴 무대",
    "차로건 스토리 하우스",
    "청계림 북 제작 공장",
    "사탕수수 화장실",
    "마법 무지개 거리",
    "생명의 나무 - 스카이워크",
    "마역 왕좌",
    "꿈의 설탕 극장 - 5중 압착기",
    "수리 서점",
    "장대 노젓기 배 체험구역",
    "결정 탱크 ~ 은하 설탕 결정 캡슐 뽑기",
    "교반기 ~ 실내 양궁장",
    "중정 레드 하우스 & 기관차",
    "천국 위의 그네",
    "설탕 상자 구역 - 스틸 레이저 서바이벌",
    "한 알의 설탕의 여행",
    "기원관 ~ 황제전"
  ],
  "vi": [
    "Chào mừng đến với Khu Sáng tạo Văn hóa Ten Drum",
    "Đường ray tàu đường & Chuyện thú vị ngành đường",
    "Nhà hàng Ten Drum - Toa tàu 5 phân",
    "Ống khói",
    "Bên trong ống khói",
    "Sugar Bar - Khu đóng gói đường",
    "Nhà máy Phép thuật",
    "Tuyệt tác của Chúa ~ Bức tranh sống động của thiên nhiên",
    "Bồn chứa mật đường - Bàn thờ xương thú",
    "Bồn chứa mật đường - Nhà trải nghiệm trẻ em",
    "Bồn chứa mật đường - Cà phê Cổ Ba",
    "Chòi Mũ Phép thuật & Ngọn đồi Ngọt ngào",
    "Sân khấu Bánh răng",
    "Nhà câu chuyện Xa Lộ Kiền",
    "Xưởng làm trống Thanh Khê Lâm",
    "Nhà vệ sinh Cây mía",
    "Phố Cầu vồng Phép thuật",
    "Cây Cứu rỗi - Cầu trên cao",
    "Ngai vàng Ma giới",
    "Nhà hát Mộng Đường - Máy ép 5 tầng",
    "Tiệm sách Sửa chữa",
    "Khu chèo thuyền chống sào",
    "Bồn tinh thể ~ Máy vặn trứng tinh thể đường Ngân Hà",
    "Máy trộn ~ Sân bắn cung trong nhà",
    "Nhà đỏ Giếng trời & Đầu máy xe lửa",
    "Xích đu trên Thiên đường",
    "Khu hộp đường - Bắn súng laser thép",
    "Hành trình của một hạt đường",
    "Đền Cầu an ~ Hoàng Đế Điện"
  ],
  "id": [
    "Selamat Datang di Taman Kreatif dan Budaya Ten Drum",
    "Rel Kereta Gula & Trivia Industri Gula",
    "Restoran Ten Drum - Gerbong Kereta Lima Persen",
    "Cerobong Asap",
    "Bagian Dalam Cerobong Asap",
    "Sugar Bar - Area Pengemasan Gula",
    "Pabrik Sihir",
    "Lukisan Tuhan ~ Kanvas Hidup Alam",
    "Tangki Tetes Tebu - Altar Tulang Binatang",
    "Tangki Tetes Tebu - Wahana Pengalaman Anak",
    "Tangki Tetes Tebu - Kafe Gubo",
    "Saung Topi Sihir & Bukit Manis",
    "Panggung Roda Gigi",
    "Rumah Cerita Cheluqian",
    "Pabrik Pembuatan Drum Qingxilin",
    "Toilet Tebu",
    "Jalan Pelangi Sihir",
    "Pohon Kehidupan - Jembatan Gantung Skywalk",
    "Tahta Dunia Sihir",
    "Teater Impian Gula - Mesin Pemeras 5 Tingkat",
    "Rumah Buku Perbaikan",
    "Area Naik Perahu Dayung",
    "Tangki Kristalisasi ~ Mesin Gashapon Kristal Gula Bima Sakti",
    "Pengaduk ~ Arena Panahan Dalam Ruangan",
    "Rumah Merah Atap Terbuka & Lokomotif",
    "Aunan di Surga",
    "Area Kotak Gula - Pertempuran Laser Baja",
    "Perjalanan Sebutir Gula",
    "Aula Doa ~ Kuil Huangdi"
  ],
  "th":  [
    "ยินดีต้อนรับสู่สวนสร้างสรรค์วัฒนธรรม Ten Drum",
    "ทางรถไฟน้ำตาลและเรื่องน่ารู้ของอุตสาหกรรมน้ำตาล",
    "ร้านอาหาร Ten Drum - โบกี้รถไฟห้าส่วน",
    "ปล่องไฟ",
    "ภายในปล่องไฟ",
    "Sugar Bar - พื้นที่บรรจุน้ำตาล",
    "โรงงานเวทมนตร์",
    "ภาพเขียนของพระเจ้า ~ ผืนผ้าใบมีชีวิตแห่งธรรมชาติ",
    "ถังหมักน้ำตาล - แท่นบูชากระดูกสัตว์",
    "ถังหมักน้ำตาล - ศาลาประสบการณ์เด็ก",
    "ถังหมักน้ำตาล - กาแฟกู่โป",
    "ศาลาหมวกเวทมนตร์ & เนินเขาแห่งความหวาน",
    "เวทีฟันเฟือง",
    "เรือนเรื่องเล่าเฉอลู่เชียน",
    "โรงงานทำกลองชิงซีหลิน",
    "ห้องน้ำต้นอ้อย",
    "ถนนสายรุ้งเวทมนตร์",
    "ต้นไม้แห่งชีวิต - ทางเดินลอยฟ้า",
    "บัลลังก์แดนเวทมนตร์",
    "โรงละครความฝันน้ำตาล - เครื่องบีบอัด 5 ขั้น",
    "ร้านหนังสือซ่อมบำรุง",
    "โซนถ่อเรือพาย",
    "ถังผลึก ~ ตู้กาชาปองผลึกน้ำตาลทางช้างเผือก",
    "เครื่องผสม ~ สนามยิงธนูในร่ม",
    "เรือนแดงหลังคาโปร่ง & หัวรถจักร",
    "ชิงช้าบนสวรรค์",
    "โซนกล่องน้ำตาล - เลเซอร์แท็กเหล็กกล้า",
    "การเดินทางของน้ำตาลหนึ่งเม็ด",
    "ศาลาขอพร ~ วิหารหวงตี้"
  ],
  "ms": [
    "Selamat Datang ke Taman Kreatif Budaya Ten Drum",
    "Landasan Kereta Api Gula & Trivia Industri Gula",
    "Restoran Ten Drum - Gerbong Kereta Api Lima Sen",
    "Corong Asap",
    "Bahagian Dalam Corong Asap",
    "Sugar Bar - Kawasan Pembungkusan Gula",
    "Kilang Sihir",
    "Lukisan Tuhan ~ Kanvas Hidup Alam Semulajadi",
    "Tangki Molases - Altar Tulang Haiwan",
    "Tangki Molases - Dewan Pengalaman Kanak-kanak",
    "Tangki Molases - Kafe Gubo",
    "Pavilion Topi Sihir & Bukit Manis",
    "Pentas Roda Gigi",
    "Rumah Cerita Cheluqian",
    "Kilang Pembuatan Dram Qingxilin",
    "Tandas Tebu",
    "Jalan Pelangi Sihir",
    "Pohon Kehidupan - Laluan Skywalk",
    "Takhta Alam Sihir",
    "Teater Impian Gula - Mesin Pemerah 5 Peringkat",
    "Rumah Buku Pembaikan",
    "Kawasan Sampan Dayung",
    "Tangki Pengkristalan ~ Mesin Gashapon Kristal Gula Bima Sakti",
    "Pengadul ~ Lapang Sasar Memanah Dalam Bangunan",
    "Rumah Merah Bumbung Terbuka & Lokomotif",
    "Buaian di Syurga",
    "Kawasan Kotak Gula - Pertempuran Laser Keluli",
    "Perjalanan Sebutir Gula",
    "Dewan Doa ~ Kuil Huangdi"
  ],
  "fr": [
    "Bienvenue au Parc Culturel et Créatif Ten Drum",
    "Voies ferrées sucrières et anecdotes industrielles",
    "Restaurant Ten Drum - Wagons de 5 centièmes",
    "Cheminée",
    "L'intérieur de la cheminée",
    "Sugar Bar - Zone d'emballage du sucre",
    "Fabrique Magique",
    "L'œuvre de Dieu ~ Toile vivante de la nature",
    "Réservoirs de mélasse - Autel des os de bêtes",
    "Réservoirs de mélasse - Espace expérience enfants",
    "Réservoirs de mélasse - Café Gubo",
    "Kiosque du Chapeau Magique & Colline Sucrée",
    "Scène des Engrenages",
    "Maison de l'histoire de Cheluqian",
    "Fabrique de tambours Qingxilin",
    "Toilettes Canne à Sucre",
    "Rue de l'Arc-en-ciel Magique",
    "Arbre de Vie - Passerelle céleste",
    "Trône du Royaume Magique",
    "Théâtre du Sucre Rêvé - Presse à 5 niveaux",
    "Librairie de Réparation",
    "Zone de Punnage en Barque",
    "Cuve de cristallisation ~ Distributeur Gashapon de cristal de sucre",
    "Mélangeur ~ Stand de tir à l'arc couvert",
    "Maison Rouge Puits de Jour & Locomotive",
    "Balançoire du Paradis",
    "Zone des bacs à sucre - Laser Game d'Acier",
    "Le voyage d'un grain de sucre",
    "Pavillon des Vœux ~ Temple Huangdi"
  ],
  "de": [
    "Willkommen im Ten Drum Kultur- und Kreativpark",
    "Zuckerbahngleise & Wissenswertes über die Zuckerindustrie",
    "Ten Drum Restaurant - Waggons des Fünf-Zent-Zuges",
    "Schornstein",
    "Im Inneren des Schornsteins",
    "Sugar Bar - Zuckerverpackungsbereich",
    "Magiefabrik",
    "Gottes Gemälde ~ Die lebendige Leinwand der Natur",
    "Melassetanks - Altargerüst aus Tierknochen",
    "Melassetanks - Erlebniswelt für Kinder",
    "Melassetanks - Gubo Café",
    "Zauberhut-Pavillon & Süßer Hügel",
    "Zahnrad-Bühne",
    "Cheluqian-Geschichtenhaus",
    "Qingxilin Trommelfabrik",
    "Zuckerrohr-Toiletten",
    "Magische Regenbogenstraße",
    "Baum des Lebens - Skywalk",
    "Thron des Magischen Reiches",
    "Traumzucker-Theater - 5-Stufen-Presse",
    "Reparatur-Buchhandlung",
    "Stakboot-Fahrbereich",
    "Kristallisationsbehälter ~ Milchstraßen-Zuckerkristall-Gashapon-Automat",
    "Mischer ~ Indoor-Bogenschießstand",
    "Atrium Red House & Lokomotive",
    "Schaukel im Himmel",
    "Zuckerbehälterbereich - Stahl-Lasertag",
    "Die Reise eines Zuckerkorns",
    "Segenstempel ~ Huangdi-Palast"
  ],
  "es": [
    "Bienvenido al Parque Cultural y Creativo Ten Drum",
    "Vías del tren azucarero y curiosidades de la industria",
    "Restaurante Ten Drum - Vagones de Cinco Centavos",
    "Chimenea",
    "Interior de la chimenea",
    "Sugar Bar - Zona de empaquetado de azúcar",
    "Fábrica Mágica",
    "La obra de Dios ~ El lienzo vivo de la naturaleza",
    "Tanques de melaza - Altar de huesos de bestias",
    "Tanques de melaza - Pabellón de experiencias infantiles",
    "Tanques de melaza - Café Gubo",
    "Kiosco Sombrero Mágico y Colina Dulce",
    "Escenario de Engranajes",
    "Casa de la Historia de Cheluqian",
    "Fábrica de Tambores Qingxilin",
    "Baños Caña de Azúcar",
    "Calle Arcoíris Mágico",
    "Árbol de la Vida - Pasarela Céleste",
    "Trono del Reino Mágico",
    "Teatro Sueño de Azúcar - Prensa de 5 niveles",
    "Librería de Reparación",
    "Zona de Paseo en Barca con Pertiga",
    "Tanque de cristalización ~ Máquina Gashapon de cristal de azúcar",
    "Mezcladora ~ Campo de tiro con arco cubierto",
    "Casa Roja Tragaluz y Locomotora",
    "Columpio en el Cielo",
    "Zona de contenedores de azúcar - Laser Tag de Acero",
    "El viaje de un grano de azúcar",
    "Pabellón de Bendiciones ~ Templo Huangdi"
  ],
  "ar": [
    "مرحبًا بكم في مجمع Ten Drum الثقافي والإبداعي",
    "سكك حديد السكر ومعلومات ممتعة عن صناعة السكر",
    "مطعم Ten Drum - عربات قطار الخمسة سنتات",
    "المدخنة",
    "داخل المدخنة",
    "Sugar Bar - منطقة تعبئة السكر",
    "مصنع السحر",
    "لوحة الإله ~ لوحة الطبيعة الحية",
    "خزانات دبس السكر - مذبح عظام الحيوانات",
    "خزانات دبس السكر - قاعة تجارب الأطفال",
    "خزانات دبس السكر - مقهى غوبو",
    "جناح قبعة السحر والتل الحلو",
    "مسرح التروس",
    "بيت قصص تشيلوتشيان",
    "مصنع تشينغشيلين لصناعة الطبول",
    "حمامات قصب السكر",
    "شارع قوس قزح السحري",
    "شجرة الحياة - الممر الهوائي",
    "عرش العالم السحري",
    "مسرح أحلام السكر - معصرة من 5 مراحل",
    "مكتبة الإصلاح",
    "منطقة ركوب القوارب بالخيزران",
    "خزان التبلور ~ لعبة غاشابون بلورات سكر درب التبانة",
    "خلاط ~ ميدان الرماية بالسهم الداخلي",
    "البيت الأحمر ذو المنور والقاطرة",
    "أرجوحة السماء",
    "منطقة صناديق السكر - معركة الليزر الفولاذية",
    "رحلة حبة سكر",
    "قاعة البركات ~ معبد هوانغدي"
  ],
  "pt": [
    "Bem-vindo ao Parque Cultural e Criativo Ten Drum",
    "Trilhos do comboio do açúcar e curiosidades da indústria",
    "Restaurante Ten Drum - Vagões de Cinco Centavos",
    "Chaminé",
    "Interior da chaminé",
    "Sugar Bar - Área de embalamento de açúcar",
    "Fábrica Mágica",
    "Pintura de Deus ~ A tela viva da natureza",
    "Tanques de melaço - Altar de ossos de animais",
    "Tanques de melaço - Espaço de experiências infantis",
    "Tanques de melaço - Café Gubo",
    "Pavilhão do Chapéu Mágico e Colina Doce",
    "Palco das Engrenagens",
    "Casa da História de Cheluqian",
    "Fábrica de Tambores Qingxilin",
    "Casas de Banho Cana-de-Açúcar",
    "Rua del Arco-Íris Mágico",
    "Árvore da Vida - Passadiço Suspenso Skywalk",
    "Trono do Reino Mágico",
    "Teatro Sonho de Açúcar - Prensa de 5 níveis",
    "Livraria da Reparação",
    "Área de Passeio de Barco com Vara",
    "Tanque de cristalização ~ Máquina Gashapon de cristal de açúcar",
    "Misturador ~ Campo de tiro com arco coberto",
    "Casa Vermelha do Clarabóia e Locomotiva",
    "Balanço no Céu",
    "Área de caixotes de açúcar - Laser Tag de Aço",
    "A viagem de um grão de açúcar",
    "Pavilhão de Bênçãos ~ Templo Huangdi"
  ]
  // 💡 其他語系 (ko, vi, th...) 可以依此類推繼續擴充
};

// 2. 系統介面文字翻譯對照表 (用於 00 號竹簡)
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

function selectLanguage(langCode) {
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

    // A. 根據選擇的語言，取得 00 號返回鍵的文字（若未設定則預設使用英文）
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

    // 生成 01 ~ 29 景點竹簡
    currentSpotList.forEach((spotName, index) => {
      const numStr = String(index + 1).padStart(2, '0');
      
      const slat = document.createElement("a");
      slat.className = "slat-item";
      slat.href = `player.html?lang=${selectedLang}&spot=${index + 1}`;
      slat.innerHTML = `
        <div><span class="num">${numStr}</span> ${spotName}</div>
        <small style="color:#d4af37;">►</small>
      `;
      
      slatsBox.appendChild(slat);

      setTimeout(() => {
        slat.classList.add("show");
      }, (index + 1) * 35);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 350);
}

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