const CATEGORIES = [
  { id: "Coffee",    label: "Coffee" },
  { id: "Matcha",    label: "Matcha" },
  { id: "NonCoffee", label: "Non-Coffee" },
  { id: "Brewed",    label: "Brewed" },
  { id: "Dessert",   label: "Dessert" },
  { id: "Bakeries",  label: "Bakeries" },
  { id: "Signature", label: "Signature" },
  { id: "Extras",    label: "Extras" },
];

const menuData = {
  Coffee: {
    subtitle: "Crafted with Specialty Beans",
    columns: ["HOT", "ICE", "FRAPPE"],
    items: [
      { name: "Single Turkish Coffee", hot: 45 },
      { name: "Double Turkish Coffee", hot: 55 },
      { name: "Single Espresso", hot: 50 },
      { name: "Double Espresso", hot: 60 },
      { name: "Cortado", hot: 85 },
      { name: "Macchiato", hot: 70 },
      { name: "Latte", hot: 95, ice: 100 },
      { name: "Cappuccino", hot: 95 },
      { name: "Flat White", hot: 90 },
      { name: "Americano", hot: 70, ice: 80 },
      { name: "Pistachio Latte", hot: 135, ice: 140 },
      { name: "Spanish Latte", hot: 120, ice: 125 },
      { name: "Dark Mocha", hot: 110, ice: 115 },
      { name: "Dolce Latte", hot: 125, ice: 125 },
      { name: "White Mocha", hot: 110, ice: 115 },
      { name: "Caramel Coffee Frappe", frappe: 120 },
      { name: "Chocolate Coffee Frappe", frappe: 120 },
      { name: "Lotus Coffee Frappe", frappe: 120 },
    ],
  },
  Matcha: {
    subtitle: "Premium Japanese Matcha",
    columns: ["HOT", "ICE", "FRAPPE"],
    items: [
      { name: "Matcha Latte", hot: 120, ice: 125, frappe: 130 },
      { name: "Spanish Matcha", hot: 135, ice: 140, frappe: 150 },
      { name: "Pistachio Matcha", hot: 155, ice: 160, frappe: 165 },
      { name: "Mango Matcha", hot: 135, ice: 140 },
      { name: "Strawberry Matcha", hot: 135, ice: 140, frappe: 145 },
      { name: "Chocolate Matcha", hot: 135, ice: 140, frappe: 145 },
      { name: "White Chocolate Matcha", hot: 135, ice: 140, frappe: 145 },
    ],
  },
  NonCoffee: {
    subtitle: "Smoothies, Teas & More",
    columns: null,
    items: [
      { name: "Passion Fruit Smoothie", price: 90 },
      { name: "Mango Peach Smoothie", price: 90 },
      { name: "Blueberry Smoothie", price: 90 },
      { name: "Strawberry Mix Berry Smoothie", price: 90 },
      { name: "Passion Mango Smoothie", price: 90 },
      { name: "Peach Ice Tea", price: 90 },
      { name: "Passion Fruit Ice Tea", price: 90 },
      { name: "Hot Chocolate", price: 110 },
      { name: "Hot White Chocolate", price: 110 },
      { name: "Vanilla Frappe", price: 115 },
      { name: "Caramel Frappe", price: 115 },
      { name: "Chocolate Frappe", price: 115 },
      { name: "Tea — Red / Green", price: 45 },
    ],
  },
  Brewed: {
    subtitle: "Single Origin Pour Over",
    columns: null,
    items: [
      { name: "V60", price: 120 },
      { name: "Cold Brew", price: 110 },
    ],
  },
  Dessert: {
    subtitle: "House-Made Daily",
    columns: null,
    items: [
      { name: "Cheese Cake", price: 100 },
      { name: "Molten Cake", price: 110 },
      { name: "Tiramisu", price: 90 },
      { name: "Brownie Bites", price: 75 },
      { name: "Cookies Brownie", price: 100 },
      { name: "Chocolate Fudge Cake", price: 130 },
      { name: "San Sebastian", price: 125 },
      { name: "Brownie Affogato", price: null },
    ],
  },
  Bakeries: {
    subtitle: "Fresh Baked Every Morning",
    columns: null,
    items: [
      { name: "Plain Croissant", price: 60 },
      { name: "Chocolate Croissant", price: 90 },
      { name: "Lotus Croissant", price: 90 },
      { name: "Pistachio Croissant", price: 120 },
      { name: "Cheese Croissant", price: 80 },
      { name: "Turkey Croissant", price: 130 },
    ],
  },
  Signature: {
    subtitle: "Our House Creations",
    columns: null,
    items: [
      { name: "Ferrero Rocher Iced Latte", price: 155 },
      { name: "Lotus Iced Latte", price: 155 },
      { name: "Blueberry Iced Matcha", price: 155 },
      { name: "Mango Iced Matcha", price: 155 },
      { name: "Strawberry Iced Latte", price: 155 },
      { name: "Iced Tiramisu Latte", price: 155 },
      { name: "Dolce Latte", price: 155 },
    ],
  },
  Extras: {
    subtitle: "Customize Your Drink",
    columns: null,
    items: [
      { name: "Extra Shot", price: 35 },
      { name: "Extra Sauce", price: 25 },
      { name: "Extra Syrup", price: 20 },
      { name: "Milk", price: 20 },
      { name: "Extra Condensed Milk", price: 25 },
      { name: "Almond Milk", price: 35 },
      { name: "Coconut Milk", price: 35 },
      { name: "Oat Milk", price: 35 },
      { name: "Lactose Free Milk", price: 35 },
    ],
  },
};

const IMAGES = [
  "images/web_img-002.jpg","images/web_img-003.jpg","images/web_img-004.jpg",
  "images/web_img-005.jpg","images/web_img-006.jpg","images/web_img-007.jpg",
  "images/web_img-008.jpg","images/web_img-009.jpg","images/web_img-010.jpg",
  "images/web_img-011.jpg","images/web_img-012.jpg","images/web_img-013.jpg",
  "images/web_img-014.jpg","images/web_img-015.jpg","images/web_img-016.jpg",
  "images/web_img-017.jpg","images/web_img-018.jpg","images/web_img-019.jpg",
  "images/web_img-020.jpg","images/web_img-021.jpg","images/web_img-022.jpg",
  "images/web_img-023.jpg","images/web_img-024.jpg","images/web_img-025.jpg",
  "images/web_img-026.jpg","images/web_img-027.jpg","images/web_img-028.jpg",
  "images/web_img-029.jpg"
];

function priceCell(val) {
  if (val == null) return `<span class="z-nodash">—</span>`;
  return `<span class="z-price">${val}</span>`;
}

function buildSection(id, label) {
  const cat = menuData[id];
  let rows = "";
  if (cat.columns) {
    const heads = cat.columns.map(c => `<span class="z-col-head">${c}</span>`).join("");
    const colRows = cat.items.map((item, i) =>
      `<div class="z-row" style="transition-delay:${i * 0.04}s">
        <span class="z-row-name">${item.name}</span>
        ${priceCell(item.hot ?? null)}
        ${priceCell(item.ice ?? null)}
        ${priceCell(item.frappe ?? null)}
      </div>`
    ).join("");
    rows = `<div class="z-table-wrap">
      <div class="z-col-heads"><span class="z-col-item">ITEM</span>${heads}</div>
      ${colRows}
    </div>`;
  } else {
    const listRows = cat.items.map((item, i) =>
      `<div class="z-list-row" style="transition-delay:${i * 0.04}s">
        <span class="z-list-name">${item.name}</span>
        <span class="z-list-dots"></span>
        <span class="z-list-price">${item.price ?? "—"}</span>
      </div>`
    ).join("");
    rows = `<div class="z-list-wrap">${listRows}</div>`;
  }
  return `<section id="${id}" class="z-section">
    <div class="z-sec-top">
      <div class="z-sec-num-wrap"><span class="z-sec-line"></span></div>
      <div class="z-sec-labels">
        <h2 class="z-sec-title">${label.toUpperCase()}</h2>
        <p class="z-sec-sub">${cat.subtitle}</p>
      </div>
    </div>
    ${rows}
  </section>`;
}

function showTab(id) {
  document.querySelectorAll(".z-section").forEach(sec => {
    sec.style.display = "none";
    sec.classList.remove("z-in");
  });
  const active = document.getElementById(id);
  if (active) {
    active.style.display = "block";
    requestAnimationFrame(() => requestAnimationFrame(() => active.classList.add("z-in")));
  }
  document.querySelectorAll(".z-nav-btn").forEach(btn => {
    btn.classList.toggle("z-nav-on", btn.dataset.id === id);
  });
  document.querySelector(".z-menu-panel").scrollTo({ top: 0, behavior: "smooth" });
}

function initSlideshow() {
  const container = document.getElementById("z-slideshow");
  IMAGES.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "z-slide" + (i === 0 ? " z-slide-active" : "");
    div.style.backgroundImage = `url('${src}')`;
    container.appendChild(div);
  });
  const slides = container.querySelectorAll(".z-slide");
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("z-slide-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("z-slide-active");
  }, 4000);
}

function init() {
  // Nav
  const navInner = document.getElementById("z-nav-inner");
  CATEGORIES.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "z-nav-btn" + (c.id === "Coffee" ? " z-nav-on" : "");
    btn.textContent = c.label;
    btn.dataset.id = c.id;
    btn.addEventListener("click", () => showTab(c.id));
    navInner.appendChild(btn);
  });

  // Build sections
  const main = document.getElementById("z-main");
  main.innerHTML = CATEGORIES.map(c => buildSection(c.id, c.label)).join("");
  document.querySelectorAll(".z-section").forEach((sec, i) => {
    if (i !== 0) sec.style.display = "none";
  });
  setTimeout(() => {
    const first = document.getElementById("Coffee");
    if (first) first.classList.add("z-in");
  }, 200);

  // Slideshow
  initSlideshow();

  // Hero entrance
  setTimeout(() => document.querySelector(".z-hero").classList.add("z-hero-in"), 80);

  // Hero scroll button
  document.querySelector(".z-hero-down").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("z-nav").scrollIntoView({ behavior: "smooth" });
  });

  // Sticky nav shadow
  const nav = document.getElementById("z-nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("z-nav-stuck", window.scrollY > 10);
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", init);
