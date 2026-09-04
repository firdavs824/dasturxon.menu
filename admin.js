// ADMIN PANEL — DASTURXON MENU
// localStorage orqali menuni boshqarish

// Kategoriya nomlari
const categoryNames = {
  milliy: "Milliy Taomlar",
  kabob: "Kabob & Shashlik",
  suyuq: "Suyuq Taomlar",
  salat: "Salatlar",
  ichimlik: "☕ Issiq Choylar",
  salqin: "🥤 Salqin Ichimliklar",
  energetik: "⚡ Energetiklar",
  shirinlik: "🍰 Shirinliklar"
};

// Default menyu (script.js dagi asl menyu)
const defaultMenuItems = [
  { id: 1, title: "Toshkentcha To'y Oshi", category: "milliy", badge: "Bosh Taom", price: 38000, desc: "Devzira guruch, sara mol go'shti, sariq sabzi, qazi va noxat bilan tayyorlangan shoxona osh.", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Qozon Kabob", category: "milliy", badge: "Xit", price: 52000, desc: "Yog'da qarsildoq qilib qovurilgan kartoshka va sersuv pishgan qo'y qobirg'alari.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
  { id: 10, title: "Jizzaxcha Tandir Go'sht", category: "milliy", badge: "Shoxona", price: 65000, desc: "Tandirda archa shoxi tutunida dimlangan juda yumshoq va xushbo'y sara go'sht.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
  { id: 11, title: "Manti (5 dona)", category: "milliy", badge: "Xonadon Taomi", price: 35000, desc: "Qo'lda to'g'ralgan barra go'sht va yupqa xamir bilan bug'da pishirilgan tansiq manti.", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" },
  { id: 12, title: "Qatlama Somsa (Dona)", category: "milliy", badge: "Qarsildoq", price: 10000, desc: "Tandirda qizargan qat-qat xamirli sersuv go'shtli issiq milliy somsa.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" },
  { id: 19, title: "Qovurma Lag'mon", category: "milliy", badge: "Mazali", price: 36000, desc: "Qo'lda cho'zilgan xamir, barra go'sht va sara sabzavotlar bilan qovurilgan lag'mon.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "G'ijduvon Shashlik", category: "kabob", badge: "Sara Go'sht", price: 18000, desc: "Qo'y go'shtidan tayyorlangan sersuv va yumshoq qiymali mashhur G'ijduvon kabobi.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
  { id: 8, title: "Tovuq Shashlik", category: "kabob", badge: "Parhez", price: 16000, desc: "Maxsus marinadlangan yumshoq tovuq lahm go'shti kabobi.", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80" },
  { id: 18, title: "Jigar Shashlik", category: "kabob", badge: "Sersuv", price: 15000, desc: "Yangi barra qo'y jigari va dumba yog'i bilan pishirilgan shashlik.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Mastava", category: "suyuq", badge: "Issiq taom", price: 28000, desc: "Mol go'shti, guruch va sabzavotlar qo'shib pishirilgan to'yimli suyuq taom.", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80" },
  { id: 7, title: "Choyxona Shurvasi", category: "suyuq", badge: "Milliylik", price: 32000, desc: "Qo'y go'shti va yirik sabzavotlar bilan sekin pishirilgan tiniq sho'rva.", image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Achchiq-Chuchuk", category: "salat", badge: "Yangi", price: 12000, desc: "Yupqa to'g'ralgan pomidor, piyoz va achchiq qalampirli vitaminli salat.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
  { id: 15, title: "Bahor Salati", category: "salat", badge: "Vitaminli", price: 14000, desc: "Bodring, rediska, ko'katlar va yangi tuxum bilan bezatilgan bahoriy salat.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" },
  { id: 17, title: "Suzma Ko'katlar Bilan", category: "salat", badge: "An'anaviy", price: 10000, desc: "Tabiiy suzma, yalpiz, kashnich va sarimsoq bilan tayyorlangan ishtahaochar gazak.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Ko'k Choy (Choynak)", category: "ichimlik", badge: "An'anaviy", price: 5000, desc: "Xushbo'y o'zbekona ko'k choy, limoni va navoti bilan.", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" },
  { id: 13, title: "Limonli Qora Choy (Choynak)", category: "ichimlik", badge: "Tetaklashtiruvchi", price: 8000, desc: "Yangi kesilgan limon va asal qo'shilgan tansiq damlama qora choy.", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" },
  { id: 20, title: "Zanjabilli Asal Choy (Choynak)", category: "ichimlik", badge: "Shifobaxsh", price: 14000, desc: "Tabiiy tog' asali, yangi zanjabil, yalpiz va limonli issiq choy.", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80" },
  { id: 21, title: "Toshkent Choy (Sedana & Yalpiz)", category: "ichimlik", badge: "O'ziga xos", price: 10000, desc: "Sedana urug'lari, xushbo'y yalpiz va tog' giyohlari bilan damlangan maxsus choy.", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80" },
  { id: 23, title: "Coca-Cola (1.5 Litr)", category: "salqin", badge: "Muzdek", price: 16000, desc: "Muzdek salqin klassik Coca-Cola katta oilaviy shishada.", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
  { id: 24, title: "Coca-Cola (0.5L Shisha)", category: "salqin", badge: "Klassika", price: 9000, desc: "Muzdek Coca-Cola shisha idishda.", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80" },
  { id: 25, title: "Fanta Orange (1.5 Litr)", category: "salqin", badge: "Apelsinli", price: 16000, desc: "Apelsin ta'miga boy yorqin va tetiklantiruvchi Fanta.", image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80" },
  { id: 26, title: "Sprite (1.5 Litr)", category: "salqin", badge: "Limonli", price: 16000, desc: "Limon va laym ta'mli muzdek Sprite salqin ichimligi.", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80" },
  { id: 27, title: "Muzdek Moxito (0.5L)", category: "salqin", badge: "Top", price: 18000, desc: "Laym, yalpiz, shakar qiyomi va muz bilan yangi tayyorlangan klassik moxito.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
  { id: 28, title: "Qulupnayli Moxito (0.5L)", category: "salqin", badge: "Shirin ta'm", price: 20000, desc: "Yangi qulupnay mevalari, yalpiz va muz bilan tayyorlangan salqin ichimlik.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" },
  { id: 29, title: "Uy Kompoti (Muzdek 1 Litr)", category: "salqin", badge: "Tabiiy", price: 14000, desc: "Gilos, olma va quritilgan mevalardan tayyorlangan tabiiy uy kompoti.", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80" },
  { id: 30, title: "Yalpizli Ayron (0.5L)", category: "salqin", badge: "Foydali", price: 8000, desc: "Muzdek yangi qatiq, ko'katlar va muz bilan ko'pirtirilgan milliy ayron.", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80" },
  { id: 31, title: "Dena Sharbatlari (1 Litr)", category: "salqin", badge: "Mevali", price: 16000, desc: "Shaftoli, olma yoki olcha ta'mli 100% tabiiy meva sharbati.", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: 33, title: "Red Bull Energy (250ml)", category: "energetik", badge: "Premium", price: 22000, desc: "Muzdek original Red Bull qutida — tezkor quvvat va tetiklik.", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80" },
  { id: 34, title: "Gorilla Energy Drink (450ml)", category: "energetik", badge: "Quvvat", price: 14000, desc: "Kuchli energiya beruvchi muzdek Gorilla ichimligi.", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80" },
  { id: 35, title: "Flash Up Energy (450ml)", category: "energetik", badge: "Mashhur", price: 10000, desc: "Kofein va vitaminlarga boy muzdek Flash Up energetiki.", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80" },
  { id: 36, title: "Adrenaline Rush (450ml)", category: "energetik", badge: "Kuchli", price: 19000, desc: "Tetiklik bag'ishlovchi mashhur Adrenaline Rush energetik ichimligi.", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80" },
  { id: 37, title: "Monster Energy (500ml)", category: "energetik", badge: "Mega", price: 26000, desc: "Original katta hajmdagi Monster Energy quvvat ichimligi.", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80" },
  { id: 9, title: "Asalli Paxlava", category: "shirinlik", badge: "Shirin", price: 22000, desc: "Yong'oq va tabiat asali bilan tayyorlangan qatlama shirinlik.", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80" },
  { id: 14, title: "Toshkentcha Chak-Chak", category: "shirinlik", badge: "Asalli", price: 18000, desc: "Tabiiy tog' asali bilan qoplangan qarsildoq milliy bayramona shirinlik.", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80" },
  { id: 39, title: "Medovik (Asalli Tort)", category: "shirinlik", badge: "Nozik ta'm", price: 24000, desc: "Yumshoq asalli korjlar va mayin qaymoqli krem bilan tayyorlangan shohona tort.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
  { id: 40, title: "Shokoladli Fondan", category: "shirinlik", badge: "Issiq shokolad", price: 28000, desc: "Ichidan issiq shokolad oquvchi keks va 1 sharik muzqaymoq bilan.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" },
  { id: 41, title: "Qaymoqli Chizkeyk", category: "shirinlik", badge: "Klassik", price: 26000, desc: "Philadelphia pishloqli mayin kremli Nyu-York klassik chizkeyki.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" },
  { id: 42, title: "Muzqaymoq Assorti (Mevali)", category: "shirinlik", badge: "Muzdek", price: 18000, desc: "Shokolad, qulupnay va vanilli 3 sharik muzqaymoq meva bo'laklari bilan.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80" },
  { id: 50, title: "Energetik Drive Pack (Red Bull + Gorilla + Flash)", category: "energetik", badge: "AKSIYA", price: 42000, desc: "1x Red Bull + 1x Gorilla + 1x Flash Up muz va limon bo'laklari bilan maxsus chegirmada.", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80" },
  { id: 51, title: "Muzdek Salqinlik Combo Set (Cola + Ayron + Kompot)", category: "salqin", badge: "AKSIYA", price: 34000, desc: "Coca-Cola 1.5L + 1L Mevali Uy Kompoti + 2 dona Muzdek Ayron to'plami.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
  { id: 52, title: "Shirin Choyxona Seti (Paxlava + Medovik + Choy)", category: "shirinlik", badge: "AKSIYA", price: 45000, desc: "2 porsiya Asalli Paxlava + 1 porsiya Medovik + 1 choynak Limonli xushbo'y choy.", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80" }
];

// ============ LOCALSTORAGE BOSHQARUV ============
function getMenuItems() {
  const stored = localStorage.getItem('dasturxon_menu_items');
  if (stored) {
    return JSON.parse(stored);
  }
  // Birinchi marta ochilganda default menyoni saqlash
  saveMenuItems(defaultMenuItems);
  return [...defaultMenuItems];
}

function saveMenuItems(items) {
  localStorage.setItem('dasturxon_menu_items', JSON.stringify(items));
}

function getNextId(items) {
  if (items.length === 0) return 1;
  return Math.max(...items.map(item => item.id)) + 1;
}

// ============ STATISTIKA ============
function updateStats(items) {
  const totalEl = document.getElementById('statTotal');
  const milliyEl = document.getElementById('statMilliy');
  const kabobEl = document.getElementById('statKabob');
  const ichimlikEl = document.getElementById('statIchimlik');
  const countBadge = document.getElementById('totalItemsCount');

  if (totalEl) totalEl.textContent = items.length;
  if (milliyEl) milliyEl.textContent = items.filter(i => i.category === 'milliy').length;
  if (kabobEl) kabobEl.textContent = items.filter(i => i.category === 'kabob').length;
  if (ichimlikEl) ichimlikEl.textContent = items.filter(i => ['ichimlik','salqin','energetik'].includes(i.category)).length;
  if (countBadge) countBadge.textContent = items.length + ' ta mahsulot';
}

// ============ JADVALNI CHIQARISH ============
let deleteTargetId = null;

function renderTable(items) {
  const tbody = document.getElementById('adminTableBody');
  const emptyState = document.getElementById('emptyState');
  if (!tbody) return;

  if (items.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = items.map(item => `
    <tr data-id="${item.id}">
      <td class="cell-id"><strong>#${item.id}</strong></td>
      <td class="cell-thumb"><img src="${item.image}" alt="${item.title}" class="item-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23f1f5f9%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%2394a3b8%22 font-size=%2230%22>🍽</text></svg>'"></td>
      <td class="cell-name">
        <span class="item-name">${item.title}</span>
        <span class="item-desc">${item.desc || ''}</span>
        <div class="mobile-item-meta">
          <span class="category-tag ${item.category}">${categoryNames[item.category] || item.category}</span>
          <span class="mobile-price">${item.price.toLocaleString()} so'm</span>
        </div>
      </td>
      <td class="cell-cat"><span class="category-tag ${item.category}">${categoryNames[item.category] || item.category}</span></td>
      <td class="cell-badge">${item.badge || '—'}</td>
      <td class="cell-price price-cell">${item.price.toLocaleString()} so'm</td>
      <td class="cell-actions">
        <div class="action-btns">
          <button class="action-btn edit" onclick="editItem(${item.id})" title="Tahrirlash">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="action-btn delete" onclick="confirmDelete(${item.id})" title="O'chirish">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ============ FILTR VA QIDIRUV ============
function applyAdminFilter() {
  const searchVal = (document.getElementById('adminSearchInput')?.value || '').toLowerCase().trim();
  const catVal = document.getElementById('adminCategoryFilter')?.value || 'all';

  let items = getMenuItems();

  if (catVal !== 'all') {
    items = items.filter(i => i.category === catVal);
  }

  if (searchVal) {
    items = items.filter(i =>
      i.title.toLowerCase().includes(searchVal) ||
      (i.desc && i.desc.toLowerCase().includes(searchVal)) ||
      (i.badge && i.badge.toLowerCase().includes(searchVal))
    );
  }

  renderTable(items);
}

const searchInput = document.getElementById('adminSearchInput');
const categoryFilter = document.getElementById('adminCategoryFilter');
if (searchInput) searchInput.addEventListener('input', applyAdminFilter);
if (categoryFilter) categoryFilter.addEventListener('change', applyAdminFilter);

// ============ FORM TOZALASH ============
function resetForm() {
  const form = document.getElementById('itemForm');
  const editIdField = document.getElementById('editId');
  const formTitle = document.getElementById('formTitle');
  const submitBtn = document.getElementById('submitBtn');
  const cancelBtn = document.getElementById('cancelEditBtn');

  if (form) form.reset();
  if (editIdField) editIdField.value = '';
  if (formTitle) formTitle.innerHTML = '<i class="fa-solid fa-plus-circle"></i> Yangi taom qo\'shish';
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Qo\'shish';
  if (cancelBtn) cancelBtn.style.display = 'none';
}

// ============ TAHRIRLASH ============
function editItem(id) {
  const items = getMenuItems();
  const item = items.find(i => i.id === id);
  if (!item) return;

  document.getElementById('editId').value = item.id;
  document.getElementById('inputTitle').value = item.title;
  document.getElementById('inputCategory').value = item.category;
  document.getElementById('inputBadge').value = item.badge || '';
  document.getElementById('inputPrice').value = item.price;
  document.getElementById('inputDesc').value = item.desc || '';
  document.getElementById('inputImage').value = item.image || '';

  document.getElementById('formTitle').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Taomni tahrirlash (#' + item.id + ')';
  document.getElementById('submitBtn').innerHTML = '<i class="fa-solid fa-check"></i> Saqlash';
  document.getElementById('cancelEditBtn').style.display = 'flex';

  // Formga scroll qilish
  document.getElementById('itemFormCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============ O'CHIRISH ============
function confirmDelete(id) {
  const items = getMenuItems();
  const item = items.find(i => i.id === id);
  if (!item) return;

  deleteTargetId = id;
  document.getElementById('deleteItemName').textContent = `"${item.title}" (#${item.id}) butunlay o'chiriladi.`;
  document.getElementById('deleteModal').classList.add('active');
}

function doDelete() {
  if (deleteTargetId === null) return;
  let items = getMenuItems();
  items = items.filter(i => i.id !== deleteTargetId);
  saveMenuItems(items);
  deleteTargetId = null;
  document.getElementById('deleteModal').classList.remove('active');
  updateStats(items);
  applyAdminFilter();
  showAdminToast("Taom muvaffaqiyatli o'chirildi!");
}

document.getElementById('cancelDeleteBtn')?.addEventListener('click', () => {
  deleteTargetId = null;
  document.getElementById('deleteModal').classList.remove('active');
});
document.getElementById('confirmDeleteBtn')?.addEventListener('click', doDelete);

// Modal overlay bosilganda yopish
document.getElementById('deleteModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    deleteTargetId = null;
    e.currentTarget.classList.remove('active');
  }
});

// ============ FORM SUBMIT ============
document.getElementById('itemForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const editId = document.getElementById('editId').value;
  const title = document.getElementById('inputTitle').value.trim();
  const category = document.getElementById('inputCategory').value;
  const badge = document.getElementById('inputBadge').value.trim();
  const price = parseInt(document.getElementById('inputPrice').value) || 0;
  const desc = document.getElementById('inputDesc').value.trim();
  const image = document.getElementById('inputImage').value.trim();

  if (!title || !category || !price) {
    showAdminToast("Iltimos, barcha majburiy maydonlarni to'ldiring!");
    return;
  }

  let items = getMenuItems();

  if (editId) {
    // Tahrirlash
    const idx = items.findIndex(i => i.id === parseInt(editId));
    if (idx !== -1) {
      items[idx] = { ...items[idx], title, category, badge, price, desc, image };
    }
    showAdminToast("Taom muvaffaqiyatli yangilandi!");
  } else {
    // Yangi qo'shish
    const newId = getNextId(items);
    items.push({ id: newId, title, category, badge, price, desc, image });
    showAdminToast("Yangi taom muvaffaqiyatli qo'shildi!");
  }

  saveMenuItems(items);
  resetForm();
  updateStats(items);
  applyAdminFilter();
});

// ============ BEKOR QILISH ============
document.getElementById('cancelEditBtn')?.addEventListener('click', resetForm);

// ============ TOAST ============
function showAdminToast(text, duration = 2500) {
  const toast = document.getElementById('adminToast');
  const toastText = document.getElementById('adminToastText');
  if (!toast) return;
  if (toastText) toastText.textContent = text;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), duration);
}

// ============ PAROL MUHOFAZASI ============
const DEFAULT_PASSWORD = 'dasturxon';
const PASSWORD_KEY = 'dasturxon_admin_password';
const SESSION_KEY = 'dasturxon_admin_session';
const SESSION_DURATION = 4 * 60 * 60 * 1000; // 4 soat

function getAdminPassword() {
  return localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
}

function isLoggedIn() {
  try {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return false;
    const data = JSON.parse(session);
    return data.loggedIn && (Date.now() - data.time < SESSION_DURATION);
  } catch(e) {
    return false;
  }
}

function doLogin() {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ loggedIn: true, time: Date.now() }));
  document.getElementById('loginOverlay').style.display = 'none';
  document.getElementById('adminContent').style.display = 'block';
  initAdminPanel();
}

function showLogin() {
  document.getElementById('loginOverlay').style.display = 'flex';
  document.getElementById('adminContent').style.display = 'none';
}

// Login form
const loginForm = document.getElementById('loginForm');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const togglePassBtn = document.getElementById('togglePassBtn');
const loginBox = document.querySelector('.login-box');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = loginPassword.value.trim();
    if (pass === getAdminPassword()) {
      doLogin();
    } else {
      loginError.classList.add('show');
      loginPassword.value = '';
      loginPassword.focus();
      // Shake animatsiya
      if (loginBox) {
        loginBox.classList.remove('shake');
        void loginBox.offsetWidth;
        loginBox.classList.add('shake');
      }
    }
  });
}

if (togglePassBtn) {
  togglePassBtn.addEventListener('click', () => {
    if (loginPassword.type === 'password') {
      loginPassword.type = 'text';
      togglePassBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      loginPassword.type = 'password';
      togglePassBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  });
}

// ============ BOSHLANG'ICH YUKLASH ============
function initAdminPanel() {
  const items = getMenuItems();
  updateStats(items);
  renderTable(items);
  loadOrders();
}

// Sahifa yuklanganda tekshirish
if (isLoggedIn()) {
  doLogin();
} else {
  showLogin();
}

// ============ BUYURTMALAR (ORDERS) ============
const orderTypeLabels = {
  dine_in: "Stolda",
  takeaway: "Olib ketish",
  delivery: "Yetkazish"
};

let lastKnownOrderCount = 0;
let ordersPollInterval = null;

function getOrders() {
  try {
    const stored = localStorage.getItem('dasturxon_orders');
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return [];
}

function saveOrders(orders) {
  localStorage.setItem('dasturxon_orders', JSON.stringify(orders));
}

function getNewOrdersCount() {
  const orders = getOrders();
  return orders.filter(o => o.status === 'new').length;
}

function updateOrdersBadge() {
  const count = getNewOrdersCount();
  const badge = document.getElementById('newOrdersBadge');
  const clearBtn = document.getElementById('clearReadOrdersBtn');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  if (clearBtn) {
    clearBtn.style.display = count > 0 ? 'flex' : 'none';
  }
}

function playNotificationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Birinchi ton
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1); gain1.connect(ctx.destination);
    osc1.frequency.value = 880;
    osc1.type = 'sine';
    gain1.gain.value = 0.3;
    osc1.start(ctx.currentTime); osc1.stop(ctx.currentTime + 0.15);
    // Ikkinchi ton (yuqoriroq)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2); gain2.connect(ctx.destination);
    osc2.frequency.value = 1100;
    osc2.type = 'sine';
    gain2.gain.value = 0.3;
    osc2.start(ctx.currentTime + 0.18); osc2.stop(ctx.currentTime + 0.35);
  } catch(e) {}
}

// KATTA XABAR BILDIRISHNOMA (yangi buyurtma kelganda)
function showBigNotification(count) {
  // Oldingi xabarni o'chirish
  const old = document.getElementById('bigNotif');
  if (old) old.remove();

  const notif = document.createElement('div');
  notif.id = 'bigNotif';
  notif.innerHTML = `
    <div class="big-notif-inner">
      <div class="big-notif-icon">
        <i class="fa-solid fa-bell"></i>
      </div>
      <div class="big-notif-content">
        <h3>🔔 YANGI BUYURTMA!</h3>
        <p>${count} ta yangi buyurtma keldi!</p>
      </div>
      <button class="big-notif-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;
  document.body.appendChild(notif);

  // 8 sekunddan keyin avtomatik yopish
  setTimeout(() => {
    if (notif.parentElement) {
      notif.style.opacity = '0';
      notif.style.transform = 'translateY(-100%)';
      setTimeout(() => notif.remove(), 400);
    }
  }, 8000);
}

function renderOrders() {
  const orders = getOrders();
  const list = document.getElementById('ordersList');
  const emptyState = document.getElementById('ordersEmptyState');
  if (!list) return;

  if (orders.length === 0) {
    list.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    updateOrdersBadge();
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  list.innerHTML = orders.map(order => {
    const isUnread = order.status === 'new';
    const itemsTags = order.items.map(i => `<span class="order-item-tag">${i.title} x${i.quantity}</span>`).join('');
    const typeClass = order.orderType || 'dine_in';

    return `
      <div class="order-card ${isUnread ? 'unread' : ''}" data-id="${order.receiptNo}">
        <div class="order-left">
          <span class="order-number">#${order.receiptNo}</span>
          <span class="order-time">${order.time}</span>
          <span class="order-type-badge ${typeClass}">${orderTypeLabels[typeClass] || typeClass}</span>
        </div>
        <div class="order-center">
          <div class="order-customer"><i class="fa-solid fa-user"></i> ${order.customerName}</div>
          <div class="order-items-list">${itemsTags}</div>
          <div><i class="fa-solid fa-location-dot" style="color:#94a3b8;font-size:0.78rem"></i> ${order.placeDetail}</div>
          ${order.orderNote ? `<div class="order-note"><i class="fa-regular fa-comment-dots"></i> "${order.orderNote}"</div>` : ''}
          <div style="font-size:0.78rem;color:#94a3b8;margin-top:4px;">💳 ${order.paymentMethod}</div>
        </div>
        <div class="order-right">
          <span class="order-total">${order.grandTotal.toLocaleString()} so'm</span>
          <button class="order-status-btn ${isUnread ? '' : 'done'}" onclick="markOrderDone('${order.receiptNo}')">
            ${isUnread ? '✓ Tayyor' : '✓ Tayyor'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  updateOrdersBadge();
}

function markOrderDone(receiptNo) {
  let orders = getOrders();
  orders = orders.map(o => {
    if (o.receiptNo === receiptNo) {
      return { ...o, status: 'done' };
    }
    return o;
  });
  saveOrders(orders);
  renderOrders();
  showAdminToast('Buyurtma tayyor deb belgilandi!');
}

function loadOrders() {
  renderOrders();
  lastKnownOrderCount = getOrders().length;

  // Har 3 sekundda yangi buyurtma tekshirish
  if (ordersPollInterval) clearInterval(ordersPollInterval);
  ordersPollInterval = setInterval(() => {
    const orders = getOrders();
    const currentCount = orders.length;

    if (currentCount > lastKnownOrderCount) {
      // Yangi buyurtma kelgan!
      const newCount = currentCount - lastKnownOrderCount;
      playNotificationSound();
      showBigNotification(newCount);
      showAdminToast(`🔔 ${newCount} ta yangi buyurtma keldi!`, 4000);
      renderOrders();

      // Browser bildirishnomasi (agar ruxsat bo'lsa)
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('🍽 Yangi buyurtma!', {
          body: `${newCount} ta yangi buyurtma keldi. Admin panelni tekshiring!`,
          icon: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=64&q=80'
        });
      }
    }

    lastKnownOrderCount = currentCount;
  }, 3000);

  // Browser notification ruxsatini so'rash
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

// Hammasini o'qilgan qilish
document.getElementById('clearReadOrdersBtn')?.addEventListener('click', () => {
  let orders = getOrders();
  orders = orders.map(o => ({ ...o, status: 'done' }));
  saveOrders(orders);
  renderOrders();
  showAdminToast('Barcha buyurtmalar o\'qilgan deb belgilandi!');
});

// ============ PAROL O'ZGARTIRISH ============
const changePassForm = document.getElementById('changePassForm');
const currentPassInput = document.getElementById('currentPassInput');
const newPassInput = document.getElementById('newPassInput');
const confirmPassInput = document.getElementById('confirmPassInput');
const passError = document.getElementById('passError');
const passSuccess = document.getElementById('passSuccess');

if (changePassForm) {
  changePassForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentPass = currentPassInput.value.trim();
    const newPass = newPassInput.value.trim();
    const confirmPass = confirmPassInput.value.trim();

    // Xatoliklarni tozalash
    passError.style.display = 'none';
    passSuccess.style.display = 'none';

    // Tekshirishlar
    if (currentPass !== getAdminPassword()) {
      passError.textContent = 'Hozirgi parol noto\'g\'ri!';
      passError.style.display = 'block';
      return;
    }

    if (newPass.length < 4) {
      passError.textContent = 'Yangi parol kamida 4 ta belgi bo\'lishi kerak!';
      passError.style.display = 'block';
      return;
    }

    if (newPass !== confirmPass) {
      passError.textContent = 'Yangi parollar mos kelmaydi!';
      passError.style.display = 'block';
      return;
    }

    if (newPass === currentPass) {
      passError.textContent = 'Yangi parol eskisidan farqli bo\'lishi kerak!';
      passError.style.display = 'block';
      return;
    }

    // Parolni saqlash
    localStorage.setItem(PASSWORD_KEY, newPass);

    // Formani tozalash
    changePassForm.reset();

    // Muvaffaqiyat xabari
    passSuccess.style.display = 'block';
    showAdminToast('Parol muvaffaqiyatli o\'zgartirildi! 🔐');

    // 3 sekunddan keyin xabarni yashirish
    setTimeout(() => {
      passSuccess.style.display = 'none';
    }, 3000);
  });
}

// Parol ko'rish/o'chirish tugmalari
document.querySelectorAll('.toggle-pass-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      input.type = 'password';
      btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  });
});
