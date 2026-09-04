// MENYU TAOMLARI VA ICHIMLIKLARI (localStorage dan o'qiladi yoki default)
const defaultMenuItems = [
  // --- MILLIY TAOMLAR ---
  {
    id: 1,
    title: "Toshkentcha To'y Oshi",
    category: "milliy",
    badge: "Bosh Taom",
    price: 38000,
    desc: "Devzira guruch, sara mol go'shti, sariq sabzi, qazi va noxat bilan tayyorlangan shoxona osh.",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Qozon Kabob",
    category: "milliy",
    badge: "Xit",
    price: 52000,
    desc: "Yog'da qarsildoq qilib qovurilgan kartoshka va sersuv pishgan qo'y qobirg'alari.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Jizzaxcha Tandir Go'sht",
    category: "milliy",
    badge: "Shoxona",
    price: 65000,
    desc: "Tandirda archa shoxi tutunida dimlangan juda yumshoq va xushbo'y sara go'sht.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Manti (5 dona)",
    category: "milliy",
    badge: "Xonadon Taomi",
    price: 35000,
    desc: "Qo'lda to'g'ralgan barra go'sht va yupqa xamir bilan bug'da pishirilgan tansiq manti.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Qatlama Somsa (Dona)",
    category: "milliy",
    badge: "Qarsildoq",
    price: 10000,
    desc: "Tandirda qizargan qat-qat xamirli sersuv go'shtli issiq milliy somsa.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    title: "Qovurma Lag'mon",
    category: "milliy",
    badge: "Mazali",
    price: 36000,
    desc: "Qo'lda cho'zilgan xamir, barra go'sht va sara sabzavotlar bilan qovurilgan lag'mon.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },

  // --- KABOB & SHASHLIK ---
  {
    id: 2,
    title: "G'ijduvon Shashlik",
    category: "kabob",
    badge: "Sara Go'sht",
    price: 18000,
    desc: "Qo'y go'shtidan tayyorlangan sersuv va yumshoq qiymali mashhur G'ijduvon kabobi.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Tovuq Shashlik",
    category: "kabob",
    badge: "Parhez",
    price: 16000,
    desc: "Maxsus marinadlangan yumshoq tovuq lahm go'shti kabobi.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    title: "Jigar Shashlik",
    category: "kabob",
    badge: "Sersuv",
    price: 15000,
    desc: "Yangi barra qo'y jigari va dumba yog'i bilan pishirilgan shashlik.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },

  // --- SUYUQ TAOMLAR ---
  {
    id: 4,
    title: "Mastava",
    category: "suyuq",
    badge: "Issiq taom",
    price: 28000,
    desc: "Mol go'shti, guruch va sabzavotlar qo'shib pishirilgan to'yimli suyuq taom.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Choyxona Shurvasi",
    category: "suyuq",
    badge: "Milliylik",
    price: 32000,
    desc: "Qo'y go'shti va yirik sabzavotlar bilan sekin pishirilgan tiniq sho'rva.",
    image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?auto=format&fit=crop&w=600&q=80"
  },

  // --- SALATLAR ---
  {
    id: 5,
    title: "Achchiq-Chuchuk",
    category: "salat",
    badge: "Yangi",
    price: 12000,
    desc: "Yupqa to'g'ralgan pomidor, piyoz va achchiq qalampirli vitaminli salat.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    title: "Bahor Salati",
    category: "salat",
    badge: "Vitaminli",
    price: 14000,
    desc: "Bodring, rediska, ko'katlar va yangi tuxum bilan bezatilgan bahoriy salat.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    title: "Suzma Ko'katlar Bilan",
    category: "salat",
    badge: "An'anaviy",
    price: 10000,
    desc: "Tabiiy suzma, yalpiz, kashnich va sarimsoq bilan tayyorlangan ishtahaochar gazak.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },

  // --- ISSIQ CHOYLAR (ICHIMLIK) ---
  {
    id: 6,
    title: "Ko'k Choy (Choynak)",
    category: "ichimlik",
    badge: "An'anaviy",
    price: 5000,
    desc: "Xushbo'y o'zbekona ko'k choy, limoni va navoti bilan.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    title: "Limonli Qora Choy (Choynak)",
    category: "ichimlik",
    badge: "Tetaklashtiruvchi",
    price: 8000,
    desc: "Yangi kesilgan limon va asal qo'shilgan tansiq damlama qora choy.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    title: "Zanjabilli Asal Choy (Choynak)",
    category: "ichimlik",
    badge: "Shifobaxsh",
    price: 14000,
    desc: "Tabiiy tog' asali, yangi zanjabil, yalpiz va limonli issiq choy.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    title: "Toshkent Choy (Sedana & Yalpiz)",
    category: "ichimlik",
    badge: "O'ziga xos",
    price: 10000,
    desc: "Sedana urug'lari, xushbo'y yalpiz va tog' giyohlari bilan damlangan maxsus choy.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80"
  },

  // --- SALQIN ICHIMLIKLAR ---
  {
    id: 23,
    title: "Coca-Cola (1.5 Litr)",
    category: "salqin",
    badge: "Muzdek",
    price: 16000,
    desc: "Muzdek salqin klassik Coca-Cola katta oilaviy shishada.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    title: "Coca-Cola (0.5L Shisha)",
    category: "salqin",
    badge: "Klassika",
    price: 9000,
    desc: "Muzdek Coca-Cola shisha idishda.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    title: "Fanta Orange (1.5 Litr)",
    category: "salqin",
    badge: "Apelsinli",
    price: 16000,
    desc: "Apelsin ta'miga boy yorqin va tetiklantiruvchi Fanta.",
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    title: "Sprite (1.5 Litr)",
    category: "salqin",
    badge: "Limonli",
    price: 16000,
    desc: "Limon va laym ta'mli muzdek Sprite salqin ichimligi.",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    title: "Muzdek Moxito (0.5L)",
    category: "salqin",
    badge: "Top",
    price: 18000,
    desc: "Laym, yalpiz, shakar qiyomi va muz bilan yangi tayyorlangan klassik moxito.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    title: "Qulupnayli Moxito (0.5L)",
    category: "salqin",
    badge: "Shirin ta'm",
    price: 20000,
    desc: "Yangi qulupnay mevalari, yalpiz va muz bilan tayyorlangan salqin ichimlik.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    title: "Uy Kompoti (Muzdek 1 Litr)",
    category: "salqin",
    badge: "Tabiiy",
    price: 14000,
    desc: "Gilos, olma va quritilgan mevalardan tayyorlangan tabiiy uy kompoti.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    title: "Yalpizli Ayron (0.5L)",
    category: "salqin",
    badge: "Foydali",
    price: 8000,
    desc: "Muzdek yangi qatiq, ko'katlar va muz bilan ko'pirtirilgan milliy ayron.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 31,
    title: "Dena Sharbatlari (1 Litr)",
    category: "salqin",
    badge: "Mevali",
    price: 16000,
    desc: "Shaftoli, olma yoki olcha ta'mli 100% tabiiy meva sharbati.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
  },

  // --- ENERGETIKLAR ---
  {
    id: 33,
    title: "Red Bull Energy (250ml)",
    category: "energetik",
    badge: "Premium",
    price: 22000,
    desc: "Muzdek original Red Bull qutida — tezkor quvvat va tetiklik.",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 34,
    title: "Gorilla Energy Drink (450ml)",
    category: "energetik",
    badge: "Quvvat",
    price: 14000,
    desc: "Kuchli energiya beruvchi muzdek Gorilla ichimligi.",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 35,
    title: "Flash Up Energy (450ml)",
    category: "energetik",
    badge: "Mashhur",
    price: 10000,
    desc: "Kofein va vitaminlarga boy muzdek Flash Up energetiki.",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    title: "Adrenaline Rush (450ml)",
    category: "energetik",
    badge: "Kuchli",
    price: 19000,
    desc: "Tetiklik bag'ishlovchi mashhur Adrenaline Rush energetik ichimligi.",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 37,
    title: "Monster Energy (500ml)",
    category: "energetik",
    badge: "Mega",
    price: 26000,
    desc: "Original katta hajmdagi Monster Energy quvvat ichimligi.",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
  },

  // --- SHIRINLIKLAR ---
  {
    id: 9,
    title: "Asalli Paxlava",
    category: "shirinlik",
    badge: "Shirin",
    price: 22000,
    desc: "Yong'oq va tabiat asali bilan tayyorlangan qatlama shirinlik.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    title: "Toshkentcha Chak-Chak",
    category: "shirinlik",
    badge: "Asalli",
    price: 18000,
    desc: "Tabiiy tog' asali bilan qoplangan qarsildoq milliy bayramona shirinlik.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 39,
    title: "Medovik (Asalli Tort)",
    category: "shirinlik",
    badge: "Nozik ta'm",
    price: 24000,
    desc: "Yumshoq asalli korjlar va mayin qaymoqli krem bilan tayyorlangan shohona tort.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 40,
    title: "Shokoladli Fondan",
    category: "shirinlik",
    badge: "Issiq shokolad",
    price: 28000,
    desc: "Ichidan issiq shokolad oquvchi keks va 1 sharik muzqaymoq bilan.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 41,
    title: "Qaymoqli Chizkeyk",
    category: "shirinlik",
    badge: "Klassik",
    price: 26000,
    desc: "Philadelphia pishloqli mayin kremli Nyu-York klassik chizkeyki.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 42,
    title: "Muzqaymoq Assorti (Mevali)",
    category: "shirinlik",
    badge: "Muzdek",
    price: 18000,
    desc: "Shokolad, qulupnay va vanilli 3 sharik muzqaymoq meva bo'laklari bilan.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },

  // --- MAXSUS AKSIYA VA KOMBO SETLAR ---
  {
    id: 50,
    title: "Energetik Drive Pack (Red Bull + Gorilla + Flash)",
    category: "energetik",
    badge: "AKSIYA",
    price: 42000,
    desc: "1x Red Bull + 1x Gorilla + 1x Flash Up muz va limon bo'laklari bilan maxsus chegirmada.",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 51,
    title: "Muzdek Salqinlik Combo Set (Cola + Ayron + Kompot)",
    category: "salqin",
    badge: "AKSIYA",
    price: 34000,
    desc: "Coca-Cola 1.5L + 1L Mevali Uy Kompoti + 2 dona Muzdek Ayron to'plami.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 52,
    title: "Shirin Choyxona Seti (Paxlava + Medovik + Choy)",
    category: "shirinlik",
    badge: "AKSIYA",
    price: 45000,
    desc: "2 porsiya Asalli Paxlava + 1 porsiya Medovik + 1 choynak Limonli xushbo'y choy.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
  }
];

// localStorage dan menyu olish
function getMenuItemsFromStorage() {
  const stored = localStorage.getItem('dasturxon_menu_items');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) { return null; }
  }
  return null;
}

// Asl menyu localStorage ga saqlash (agar hali yo'q bo'lsa)
const storedItems = getMenuItemsFromStorage();
if (!storedItems) {
  localStorage.setItem('dasturxon_menu_items', JSON.stringify(defaultMenuItems));
}
const menuItems = storedItems || defaultMenuItems;

// BUYURTMA HOLATI (STATE)
let cart = [];
let currentReceiptNumber = "DM-1001";
let activeCategory = "all";

// DOM ELEMENTLARI
const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.tab-btn');

// Search Elementlari (Desktop & Mobile)
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const clearMobileSearchBtn = document.getElementById('clearMobileSearchBtn');

// Header & Floating Bar
const openCartBtn = document.getElementById('openCartBtn');
const headerOrderSum = document.getElementById('headerOrderSum');
const cartCount = document.getElementById('cartCount');
const floatingOrderBar = document.getElementById('floatingOrderBar');
const floatingOrderBtn = document.getElementById('floatingOrderBtn');
const floatingOrderInfo = document.getElementById('floatingOrderInfo');
const floatingCount = document.getElementById('floatingCount');
const floatingSum = document.getElementById('floatingSum');

// Order Drawer (Zakaz paneli)
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const itemsListCount = document.getElementById('itemsListCount');
const clearCartBtn = document.getElementById('clearCartBtn');
const subtotalSum = document.getElementById('subtotalSum');
const serviceFeeSum = document.getElementById('serviceFeeSum');
const cartTotalSum = document.getElementById('cartTotalSum');
const checkoutBtn = document.getElementById('checkoutBtn');

// Order Form Inputs
const orderTypeCards = document.querySelectorAll('.order-type-card');
const tableGroup = document.getElementById('tableGroup');
const addressGroup = document.getElementById('addressGroup');
const tableNumberInput = document.getElementById('tableNumber');
const deliveryAddressInput = document.getElementById('deliveryAddress');
const customerNameInput = document.getElementById('customerName');
const orderNoteInput = document.getElementById('orderNote');
const paymentMethodCards = document.querySelectorAll('.payment-method-card');

// Oq qog'oz chek modali elementlari
const receiptModalOverlay = document.getElementById('receiptModalOverlay');
const receiptPaper = document.getElementById('receiptPaper');
const closeReceiptBtn = document.getElementById('closeReceiptBtn');
const printReceiptBtn = document.getElementById('printReceiptBtn');
const saveGalleryHeaderBtn = document.getElementById('saveGalleryHeaderBtn');
const saveGalleryBtn = document.getElementById('saveGalleryBtn');
const newOrderBtn = document.getElementById('newOrderBtn');
const receiptMeta = document.getElementById('receiptMeta');
const receiptTableBody = document.getElementById('receiptTableBody');
const receiptCalculations = document.getElementById('receiptCalculations');
const receiptFiscalCode = document.getElementById('receiptFiscalCode');
const receiptBarcodeNum = document.getElementById('receiptBarcodeNum');

// Toast bildirishnoma
const toastMsg = document.getElementById('toastMsg');
const toastText = document.getElementById('toastText');

function showToast(text, duration = 3000) {
  if (!toastMsg) return;
  if (toastText) toastText.textContent = text;
  toastMsg.classList.add('active');
  setTimeout(() => {
    toastMsg.classList.remove('active');
  }, duration);
}

// 1. MENUNI EKRANGA CHIQARISH
function renderMenu(items) {
  if (!menuGrid) return;
  menuGrid.innerHTML = '';

  if (items.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 24px; border: 1.5px dashed #e2e8f0; margin-top: 10px;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.8rem; margin-bottom: 16px; color: var(--primary); opacity: 0.85;"></i>
        <h3 style="color: var(--text-main); font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;">Hech qanday taom topilmadi</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">Boshqa nom bilan qidirib ko'ring yoki barcha taomlar ro'yxatiga qayting</p>
        <button onclick="resetSearchAndFilter()" style="background-color: var(--primary); color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-weight: 700; cursor: pointer; font-family: inherit; box-shadow: 0 4px 12px rgba(234, 88, 12, 0.25);">
          <i class="fa-solid fa-rotate-left"></i> Barcha taomlarni ko'rish
        </button>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="card-badge">${item.badge}</span>
      </div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="card-footer">
          <span class="price">${item.price.toLocaleString()} so'm</span>
          <button class="add-btn" onclick="addToCart(${item.id})">
            <i class="fa-solid fa-plus"></i> Buyurtma
          </button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// 2. KATEGORIYA BOYICHA SARALASH
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    
    // Qidiruv maydonini tozalash
    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    }
    if (mobileSearchInput) {
      mobileSearchInput.value = '';
      if (clearMobileSearchBtn) clearMobileSearchBtn.style.display = 'none';
    }

    applyCurrentFilter();
  });
});

function applyCurrentFilter() {
  const query = (searchInput && searchInput.value ? searchInput.value : (mobileSearchInput && mobileSearchInput.value ? mobileSearchInput.value : '')).toLowerCase().trim();

  let filtered = menuItems;
  if (activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === activeCategory);
  }

  if (query) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }

  renderMenu(filtered);
}

// 3. MUKAMMAL QIDIRUV FUNKSIYALARI (DESKTOP + MOBIL)
function handleSearchInput(value, source) {
  const query = value.toLowerCase().trim();

  // Ikkala inputni sinxronlashtirish
  if (source === 'desktop' && mobileSearchInput) {
    mobileSearchInput.value = value;
  } else if (source === 'mobile' && searchInput) {
    searchInput.value = value;
  }

  // Tozalash tugmasini ko'rsatish/yashirish
  if (clearSearchBtn) clearSearchBtn.style.display = value ? 'flex' : 'none';
  if (clearMobileSearchBtn) clearMobileSearchBtn.style.display = value ? 'flex' : 'none';

  if (!query) {
    applyCurrentFilter();
    return;
  }

  // Qidiruv paytida barcha kategoriyalardan izlash
  const matched = menuItems.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.desc.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  renderMenu(matched);
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => handleSearchInput(e.target.value, 'desktop'));
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value, 'mobile'));
}

function resetSearchAndFilter() {
  if (searchInput) {
    searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  }
  if (mobileSearchInput) {
    mobileSearchInput.value = '';
    if (clearMobileSearchBtn) clearMobileSearchBtn.style.display = 'none';
  }

  activeCategory = 'all';
  categoryBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
  renderMenu(menuItems);
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    if (mobileSearchInput) {
      mobileSearchInput.value = '';
      if (clearMobileSearchBtn) clearMobileSearchBtn.style.display = 'none';
    }
    applyCurrentFilter();
    if (searchInput) searchInput.focus();
  });
}

if (clearMobileSearchBtn) {
  clearMobileSearchBtn.addEventListener('click', () => {
    if (mobileSearchInput) mobileSearchInput.value = '';
    clearMobileSearchBtn.style.display = 'none';
    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    }
    applyCurrentFilter();
    if (mobileSearchInput) mobileSearchInput.focus();
  });
}

// Klaviatura tugmasi ( / bosilganda qidiruvga fokuslash, Esc bosilganda tozalash )
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput && document.activeElement !== mobileSearchInput) {
    const isMobile = window.innerWidth <= 600;
    const targetInput = isMobile ? mobileSearchInput : searchInput;
    if (targetInput) {
      e.preventDefault();
      targetInput.focus();
    }
  } else if (e.key === 'Escape') {
    if (document.activeElement === searchInput || document.activeElement === mobileSearchInput) {
      resetSearchAndFilter();
      if (searchInput) searchInput.blur();
      if (mobileSearchInput) mobileSearchInput.blur();
    }
  }
});

// 4. BUYURTMA TURI VA TO'LOV USULI ALMASHTIRISH
orderTypeCards.forEach(card => {
  card.addEventListener('click', () => {
    orderTypeCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
      toggleOrderTypeFields(radio.value);
    }
  });
});

function toggleOrderTypeFields(type) {
  if (type === 'dine_in') {
    if (tableGroup) tableGroup.style.display = 'flex';
    if (addressGroup) addressGroup.style.display = 'none';
  } else if (type === 'delivery') {
    if (tableGroup) tableGroup.style.display = 'none';
    if (addressGroup) addressGroup.style.display = 'flex';
  } else {
    // takeaway
    if (tableGroup) tableGroup.style.display = 'none';
    if (addressGroup) addressGroup.style.display = 'none';
  }
}

// Tezkor stol tanlash
function setTable(num) {
  if (tableNumberInput) {
    tableNumberInput.value = num;
  }
  document.querySelectorAll('.quick-table-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.includes(num));
  });
}

// To'lov usuli
paymentMethodCards.forEach(card => {
  card.addEventListener('click', () => {
    paymentMethodCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const radio = card.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  });
});

// 5. BUYURTMAGA TAOM QO'SHISH & BOSHQARISH
function addToCart(id) {
  const product = menuItems.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();

  // Header tugmasiga mikro-animatsiya
  if (openCartBtn) {
    openCartBtn.style.transform = 'scale(1.08)';
    setTimeout(() => {
      openCartBtn.style.transform = '';
    }, 200);
  }

  showToast(`"${product.title}" buyurtmaga qo'shildi! 🍲`);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  updateCartUI();
}

if (clearCartBtn) {
  clearCartBtn.addEventListener('click', clearCart);
}

// 6. BUYURTMA VA SAVATCHA INTERFEYSINI YANGILASH
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFee = Math.round(subtotal * 0.1); // 10% xizmat haqi
  const grandTotal = subtotal + serviceFee;

  // Header ko'rsatkichlari
  if (cartCount) cartCount.textContent = totalCount;
  if (headerOrderSum) headerOrderSum.textContent = subtotal.toLocaleString() + " so'm";
  if (itemsListCount) itemsListCount.textContent = totalCount;

  // Floating Quick Order Bar
  if (floatingOrderBar) {
    if (totalCount > 0) {
      floatingOrderBar.classList.add('active');
      if (floatingCount) floatingCount.textContent = totalCount;
      if (floatingSum) floatingSum.textContent = subtotal.toLocaleString() + " so'm";
    } else {
      floatingOrderBar.classList.remove('active');
    }
  }

  // Zakaz paneli hisoblari
  if (subtotalSum) subtotalSum.textContent = subtotal.toLocaleString() + " so'm";
  if (serviceFeeSum) serviceFeeSum.textContent = serviceFee.toLocaleString() + " so'm";
  if (cartTotalSum) cartTotalSum.textContent = grandTotal.toLocaleString() + " so'm";

  // Buyurtma berish tugmasi holati
  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
  }

  // Tanlangan taomlar ro'yxati
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fa-solid fa-basket-shopping empty-icon"></i>
        <p>Hozircha hech narsa tanlanmadi</p>
        <span>Menudan o'zingiz yoqtirgan taomlarni tanlang</span>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="order-item-card">
      <img src="${item.image}" alt="${item.title}" class="item-thumb">
      <div class="item-info">
        <h4>${item.title}</h4>
        <div class="item-unit-price">${item.price.toLocaleString()} so'm × ${item.quantity}</div>
        <div class="item-total-price">${(item.price * item.quantity).toLocaleString()} so'm</div>
      </div>
      <div class="item-controls-wrap">
        <div class="qty-stepper">
          <button type="button" class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <button type="button" class="delete-item-btn" onclick="removeItem(${item.id})" title="O'chirish">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// 7. ZAKAZ PANELINI OCHISH VA YOPISH
function openOrderDrawer() {
  if (cartDrawer) cartDrawer.classList.add('active');
  if (cartOverlay) cartOverlay.classList.add('active');
}

function closeOrderDrawer() {
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
}

if (openCartBtn) openCartBtn.addEventListener('click', openOrderDrawer);
if (floatingOrderBtn) floatingOrderBtn.addEventListener('click', openOrderDrawer);
if (floatingOrderInfo) floatingOrderInfo.addEventListener('click', openOrderDrawer);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeOrderDrawer);
if (cartOverlay) cartOverlay.addEventListener('click', closeOrderDrawer);

// 8. OQ QOG'OZ CHEK CHIQARISH VA GENERATSIYA QILISH
function generateReceipt() {
  if (cart.length === 0) {
    showToast("Iltimos, avval menudan taom tanlang!");
    return;
  }

  // Raqamlar va vaqt
  const now = new Date();
  const dateStr = now.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  currentReceiptNumber = 'DM-' + Math.floor(1000 + Math.random() * 9000);
  const barcodeNumber = '8492' + Math.floor(1000000000 + Math.random() * 9000000000);
  const fiscalCode = 'UZ-POS-' + Math.floor(10000 + Math.random() * 90000);

  // Tanlangan variantlar
  const selectedTypeRadio = document.querySelector('input[name="orderType"]:checked');
  const orderType = selectedTypeRadio ? selectedTypeRadio.value : 'dine_in';
  
  let orderTypeLabel = "Stolda o'tirish";
  let placeDetail = "Stol № " + (tableNumberInput && tableNumberInput.value ? tableNumberInput.value : '1') + " (Zal)";

  if (orderType === 'takeaway') {
    orderTypeLabel = "Olib ketish (Takeaway)";
    placeDetail = "Kassadan olib ketish";
  } else if (orderType === 'delivery') {
    orderTypeLabel = "Yetkazib berish (Dostavka)";
    placeDetail = deliveryAddressInput && deliveryAddressInput.value ? deliveryAddressInput.value : "Toshkent shahri";
  }

  const customerName = customerNameInput && customerNameInput.value.trim() ? customerNameInput.value.trim() : "Hurmatli Mijoz";
  const orderNote = orderNoteInput && orderNoteInput.value.trim() ? orderNoteInput.value.trim() : null;

  const selectedPaymentRadio = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = selectedPaymentRadio ? selectedPaymentRadio.value : 'Naqd pul';

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFee = Math.round(subtotal * 0.1);
  const grandTotal = subtotal + serviceFee;

  // Metadata to'ldirish
  if (receiptMeta) {
    receiptMeta.innerHTML = `
      <div class="meta-row">
        <span>Chek №: <strong>#${currentReceiptNumber}</strong></span>
        <span>Sana: <strong>${dateStr}</strong></span>
      </div>
      <div class="meta-row">
        <span>Kassa: <strong>POS-01 (Dasturxon Menu)</strong></span>
        <span>Vaqt: <strong>${timeStr}</strong></span>
      </div>
      <div class="meta-row highlight">
        <span>Buyurtma:</span>
        <span>${orderTypeLabel}</span>
      </div>
      <div class="meta-row">
        <span>Joy / Manzil:</span>
        <span><strong>${placeDetail}</strong></span>
      </div>
      <div class="meta-row">
        <span>Mijoz:</span>
        <span>${customerName}</span>
      </div>
      ${orderNote ? `
      <div class="meta-row" style="color: #64748b; font-style: italic;">
        <span>Izoh:</span>
        <span>"${orderNote}"</span>
      </div>` : ''}
    `;
  }

  // Taomlar jadvali
  if (receiptTableBody) {
    receiptTableBody.innerHTML = cart.map(item => `
      <tr>
        <td class="col-name">
          <strong>${item.title}</strong>
        </td>
        <td class="col-qty">${item.quantity}x</td>
        <td class="col-price">${item.price.toLocaleString()}</td>
        <td class="col-total">${(item.price * item.quantity).toLocaleString()}</td>
      </tr>
    `).join('');
  }

  // Hisob-kitoblar qismi
  if (receiptCalculations) {
    receiptCalculations.innerHTML = `
      <div class="calc-row">
        <span>Oraliq summa:</span>
        <strong>${subtotal.toLocaleString()} so'm</strong>
      </div>
      <div class="calc-row">
        <span>Xizmat ko'rsatish (10%):</span>
        <strong>+${serviceFee.toLocaleString()} so'm</strong>
      </div>
      <div class="receipt-dashed-line" style="margin: 6px 0;"></div>
      <div class="calc-row grand-total">
        <span>JAMI TO'LOV:</span>
        <strong style="color: #000; font-size: 1.15rem;">${grandTotal.toLocaleString()} SO'M</strong>
      </div>
      <div class="calc-row" style="font-size: 0.78rem; color: #475569; margin-top: 4px;">
        <span>To'lov usuli:</span>
        <span>${paymentMethod}</span>
      </div>
    `;
  }

  // Kodlar
  if (receiptFiscalCode) receiptFiscalCode.textContent = fiscalCode;
  if (receiptBarcodeNum) receiptBarcodeNum.textContent = barcodeNumber;

  // === BUYURTMANI LOCALSTORAGE GA SAQLASH (Admin panel uchun) ===
  const newOrder = {
    id: currentReceiptNumber,
    receiptNo: currentReceiptNumber,
    barcode: barcodeNumber,
    fiscalCode: fiscalCode,
    date: dateStr,
    time: timeStr,
    timestamp: now.getTime(),
    orderType: orderType,
    orderTypeLabel: orderTypeLabel,
    placeDetail: placeDetail,
    customerName: customerName,
    orderNote: orderNote,
    paymentMethod: paymentMethod,
    items: cart.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: item.image
    })),
    subtotal: subtotal,
    serviceFee: serviceFee,
    grandTotal: grandTotal,
    status: 'new' // yangi buyurtma
  };

  // localStorage ga saqlash
  let savedOrders = [];
  try {
    const stored = localStorage.getItem('dasturxon_orders');
    if (stored) savedOrders = JSON.parse(stored);
  } catch(e) {}
  savedOrders.unshift(newOrder); // yangisini boshiga qo'shish
  localStorage.setItem('dasturxon_orders', JSON.stringify(savedOrders));
  // ============================================================

  // Zakaz panelini yopib, Chek modalini ochish
  closeOrderDrawer();
  if (receiptModalOverlay) {
    receiptModalOverlay.classList.add('active');
  }
}

// 9. CHEKNI GALERIYAGA RASM SIFATIDA YUKLAB OLISH (SAVE TO GALLERY)
function saveReceiptToGallery() {
  if (!receiptPaper) return;

  const btns = [saveGalleryBtn, saveGalleryHeaderBtn].filter(Boolean);
  btns.forEach(btn => {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saqlanmoqda...';
  });

  if (typeof html2canvas === 'undefined') {
    showToast("Yuklash kutubxonasi tayyorlanmoqda, iltimos kuting...");
    btns.forEach(btn => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-image"></i> Galeriyaga saqlash (Rasm)';
    });
    return;
  }

  html2canvas(receiptPaper, {
    scale: 3, // Yuqori sifatli tiniq rasm
    backgroundColor: '#ffffff',
    useCORS: true,
    logging: false
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `Chek_${currentReceiptNumber}_DasturxonMenu.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("📸 Chek rasmi galeriyangizga muvaffaqiyatli saqlandi!");

    btns.forEach(btn => {
      btn.disabled = false;
      if (btn.id === 'saveGalleryHeaderBtn') {
        btn.innerHTML = '<i class="fa-solid fa-download"></i> Saqlash';
      } else {
        btn.innerHTML = '<i class="fa-solid fa-image"></i> Galeriyaga saqlash (Rasm)';
      }
    });
  }).catch(err => {
    console.error("Chekni rasmga olishda xatolik:", err);
    showToast("Rasmni saqlashda xatolik yuz berdi");
    btns.forEach(btn => {
      btn.disabled = false;
      if (btn.id === 'saveGalleryHeaderBtn') {
        btn.innerHTML = '<i class="fa-solid fa-download"></i> Saqlash';
      } else {
        btn.innerHTML = '<i class="fa-solid fa-image"></i> Galeriyaga saqlash (Rasm)';
      }
    });
  });
}

// Chek tugmalari hodisalari
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', generateReceipt);
}

function closeReceiptModal() {
  if (receiptModalOverlay) {
    receiptModalOverlay.classList.remove('active');
  }
}

if (closeReceiptBtn) {
  closeReceiptBtn.addEventListener('click', closeReceiptModal);
}

if (printReceiptBtn) {
  printReceiptBtn.addEventListener('click', printReceipt);
}

const printReceiptFooterBtn = document.getElementById('printReceiptFooterBtn');
if (printReceiptFooterBtn) {
  printReceiptFooterBtn.addEventListener('click', printReceipt);
}

// ============ PRINTER ULASH TIZIMI ============
const connectPrinterBtn = document.getElementById('connectPrinterBtn');
const printerLight = document.getElementById('printerLight');
const printerStatusText = document.getElementById('printerStatusText');
let printerConnected = localStorage.getItem('dasturxon_printer_connected') === 'true';
let printerName = localStorage.getItem('dasturxon_printer_name') || '';

function updatePrinterUI() {
  if (printerConnected) {
    if (printerLight) printerLight.classList.add('connected');
    if (printerStatusText) printerStatusText.textContent = printerName || 'Ulangan';
    if (connectPrinterBtn) {
      connectPrinterBtn.innerHTML = '<i class="fa-solid fa-plug-circle-xmark"></i> Ajratish';
      connectPrinterBtn.classList.add('connected');
    }
  } else {
    if (printerLight) printerLight.classList.remove('connected');
    if (printerStatusText) printerStatusText.textContent = 'Ulanmagan';
    if (connectPrinterBtn) {
      connectPrinterBtn.innerHTML = '<i class="fa-solid fa-plug"></i> Ulash';
      connectPrinterBtn.classList.remove('connected');
    }
  }
}

if (connectPrinterBtn) {
  connectPrinterBtn.addEventListener('click', async () => {
    if (printerConnected) {
      // Printer ajratish
      printerConnected = false;
      printerName = '';
      localStorage.removeItem('dasturxon_printer_connected');
      localStorage.removeItem('dasturxon_printer_name');
      updatePrinterUI();
      showToast('Printer ajratildi!');
      return;
    }

    // Printerni ulash — print dialog orqali
    try {
      showToast('Printer tanlash uchun print dialog ochilmoqda...', 2000);
      
      // WebUSB API (Chrome) — USB printerlar uchun
      if ('usb' in navigator) {
        try {
          const device = await navigator.usb.requestDevice({ filters: [] });
          printerConnected = true;
          printerName = device.productName || 'USB Printer';
          localStorage.setItem('dasturxon_printer_connected', 'true');
          localStorage.setItem('dasturxon_printer_name', printerName);
          updatePrinterUI();
          showToast(`Printer ulandi: ${printerName} ✅`);
          return;
        } catch(e) {
          // Foydalanuvchi bekor qildi yoki xatolik
          console.log('WebUSB bekor qilindi:', e);
        }
      }

      // Agar WebUSB bo'lmasa yoki ishlamasa — print dialog orqali
      setTimeout(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = '<p style="text-align:center;padding:20px;font-size:14px;">Printer tanlang va "Saqlash" ni bosing</p>';
        tempDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:20px;border-radius:12px;z-index:9999;box-shadow:0 10px 40px rgba(0,0,0,0.3);';
        document.body.appendChild(tempDiv);
        
        window.print();
        
        setTimeout(() => {
          document.body.removeChild(tempDiv);
          // Print dialog ochilgandan keyin foydalanuvchi printer tanlagan deb hisoblaymiz
          printerConnected = true;
          printerName = 'Standart printer';
          localStorage.setItem('dasturxon_printer_connected', 'true');
          localStorage.setItem('dasturxon_printer_name', printerName);
          updatePrinterUI();
          showToast('Printer tayyorlandi! ✅');
        }, 500);
      }, 500);

    } catch(err) {
      console.error('Printer xatolik:', err);
      showToast('Printer ulashda xatolik yuz berdi');
    }
  });
}

// Boshlang'ich holat
updatePrinterUI();

function printReceipt() {
  // Print uchun tayyorgarlik
  const btns = [printReceiptBtn, printReceiptFooterBtn].filter(Boolean);
  btns.forEach(btn => {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Chop etilmoqda...';
  });

  // Kichik kechiktrish (animatsiya tugashini kutish)
  setTimeout(() => {
    window.print();

    // Print dialog yopilgandan keyin
    setTimeout(() => {
      btns.forEach(btn => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-print"></i> Chop etish';
      });
    }, 1000);
  }, 300);
}

if (saveGalleryBtn) {
  saveGalleryBtn.addEventListener('click', saveReceiptToGallery);
}

if (saveGalleryHeaderBtn) {
  saveGalleryHeaderBtn.addEventListener('click', saveReceiptToGallery);
}

if (newOrderBtn) {
  newOrderBtn.addEventListener('click', () => {
    cart = [];
    updateCartUI();
    closeReceiptModal();
    if (orderNoteInput) orderNoteInput.value = '';
    if (customerNameInput) customerNameInput.value = '';
    showToast("Yangi buyurtma boshlandi!");
  });
}

// 10. REKLAMA SLIDERI (HERO BANNER) — UZUM MARKET STYLE
let currentSlide = 0;
let slideInterval = null;
let progressInterval = null;
const SLIDE_DURATION = 4000; // 4 soniya (tez)
let progressStart = null;

function getSlideElements() {
  return {
    slides: document.querySelectorAll('.promo-slide'),
    dots: document.querySelectorAll('.dot')
  };
}

function updateCounter(current, total) {
  const counter = document.getElementById('sliderCounter');
  if (counter) counter.textContent = `${current + 1} / ${total}`;
}

function startProgressBar() {
  const bar = document.getElementById('sliderProgress');
  if (!bar) return;
  if (progressInterval) cancelAnimationFrame(progressInterval);
  bar.style.transition = 'none';
  bar.style.width = '0%';
  progressStart = performance.now();

  function animateProgress(ts) {
    if (!progressStart) return;
    const elapsed = ts - progressStart;
    const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    bar.style.width = pct + '%';
    if (pct < 100) {
      progressInterval = requestAnimationFrame(animateProgress);
    }
  }
  requestAnimationFrame(animateProgress);
}

function goToSlide(n) {
  const { slides, dots } = getSlideElements();
  if (!slides || slides.length === 0) return;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = (n + slides.length) % slides.length;
  if (slides[currentSlide]) slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');

  updateCounter(currentSlide, slides.length);
  startProgressBar();
  resetSlideTimer();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function resetSlideTimer() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => nextSlide(), SLIDE_DURATION);
}

// Touch/swipe qo'llab quvvatlash
(function initSliderSwipe() {
  const container = document.getElementById('promoslider');
  if (!container) return;
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });
})();

// Boshlash
const { slides: initSlides } = getSlideElements();
updateCounter(0, initSlides.length);
startProgressBar();
resetSlideTimer();

// BOSHLANG'ICH YUKLASH
renderMenu(menuItems);
updateCartUI();