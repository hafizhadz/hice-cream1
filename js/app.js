// ===== MENU DATA =====
const menuData = [
    // Ice Cream / Sundae / Milk Shake
    { id: 1, name: "Hice Cream Original", category: "dessert", price: 8000, desc: "Soft ice cream original yang lembut dan creamy", emoji: "\uD83C\uDF66" },
    { id: 2, name: "Hice Cream Strawberry", category: "dessert", price: 8000, desc: "Soft ice cream rasa strawberry segar", emoji: "\uD83C\uDF66" },
    { id: 3, name: "Hice Cream Matcha", category: "dessert", price: 9000, desc: "Soft ice cream matcha premium", emoji: "\uD83C\uDF66" },
    { id: 4, name: "Hice Cream Coffee", category: "dessert", price: 9000, desc: "Soft ice cream rasa kopi nikmat", emoji: "\uD83C\uDF66" },
    { id: 5, name: "Brown Sugar Boba Sundae", category: "dessert", price: 16000, desc: "Sundae dengan brown sugar dan boba kenyal", emoji: "\uD83C\uDF68" },
    { id: 6, name: "Oreo Grand Sundae", category: "dessert", price: 16000, desc: "Grand sundae dengan topping Oreo melimpah", emoji: "\uD83C\uDF68" },
    { id: 7, name: "Mango Grand Sundae", category: "dessert", price: 16000, desc: "Grand sundae dengan topping mangga segar", emoji: "\uD83E\uDD6D" },
    { id: 8, name: "Chocolate Grand Sundae", category: "dessert", price: 16000, desc: "Grand sundae dengan topping cokelat premium", emoji: "\uD83C\uDF6B" },
    { id: 9, name: "Strawberry Milk Shake", category: "dessert", price: 16000, desc: "Milk shake strawberry yang creamy dan segar", emoji: "\uD83C\uDF53" },
    { id: 10, name: "Peach Milk Shake", category: "dessert", price: 16000, desc: "Milk shake peach yang manis dan lembut", emoji: "\uD83C\uDF51" },
    { id: 11, name: "Blueberry Milk Shake", category: "dessert", price: 16000, desc: "Milk shake blueberry yang rich dan segar", emoji: "\uD83E\uDED0" },
    { id: 12, name: "Jumbo Ice Cream 1L", category: "dessert", price: 35000, desc: "Ice cream jumbo 1 liter untuk berbagi bersama", emoji: "\uD83C\uDF68" },
    // Fruit Tea & Fresh Tea
    { id: 13, name: "Fresh-Squeezed Lemonade", category: "drink", price: 10000, desc: "Lemonade segar dari perasan lemon asli", emoji: "\uD83C\uDF4B" },
    { id: 14, name: "Lemon Tea", category: "drink", price: 12000, desc: "Teh segar dengan perasan lemon asli", emoji: "\uD83C\uDF4B" },
    { id: 15, name: "Blueberry Fruit Tea", category: "drink", price: 16000, desc: "Fruit tea dengan rasa blueberry yang segar", emoji: "\uD83E\uDED0" },
    { id: 16, name: "Orange Fruit Tea", category: "drink", price: 16000, desc: "Fruit tea dengan rasa jeruk yang menyegarkan", emoji: "\uD83C\uDF4A" },
    { id: 17, name: "Peach Fruit Tea", category: "drink", price: 16000, desc: "Fruit tea dengan rasa peach yang manis", emoji: "\uD83C\uDF51" },
    { id: 18, name: "Passion BOBO Shake", category: "drink", price: 20000, desc: "Shake passion fruit dengan topping boba kenyal", emoji: "\uD83E\uDD64" },
    { id: 19, name: "VERY Strawberry BOBO Shake", category: "drink", price: 22000, desc: "Shake strawberry spesial dengan boba melimpah", emoji: "\uD83C\uDF53" },
    { id: 20, name: "Mango & Dragon Fruit Boom", category: "drink", price: 22000, desc: "Perpaduan mangga dan buah naga yang eksplosif", emoji: "\uD83E\uDD6D" },
    { id: 21, name: "Hong Kong Mango Pomelo Sago", category: "drink", price: 22000, desc: "Minuman khas Hong Kong dengan mangga, pomelo dan sago", emoji: "\uD83E\uDD6D" },
    // Milk Tea & Yakult Series
    { id: 22, name: "Pearl Milk Tea (M)", category: "drink", price: 19000, desc: "Milk tea klasik dengan pearl boba kenyal", emoji: "\uD83E\uDDCB" },
    { id: 23, name: "Coconut Jelly Milk Tea (M)", category: "drink", price: 19000, desc: "Milk tea dengan coconut jelly yang segar", emoji: "\uD83E\uDDCB" },
    { id: 24, name: "Milk Tea (L)", category: "drink", price: 22000, desc: "Milk tea ukuran large yang creamy dan nikmat", emoji: "\uD83E\uDDCB" },
    { id: 25, name: "Roasted Brown Sugar Boba Milk Tea", category: "drink", price: 22000, desc: "Milk tea dengan boba gula aren panggang yang legit", emoji: "\uD83E\uDDCB" },
    { id: 26, name: "Mango Yakult Tea", category: "drink", price: 20000, desc: "Perpaduan yakult dan mangga yang menyegarkan", emoji: "\uD83E\uDD6D" },
    { id: 27, name: "Lemon Yakult Tea", category: "drink", price: 20000, desc: "Perpaduan yakult dan lemon yang segar", emoji: "\uD83C\uDF4B" },
];

// ===== STATE =====
let cart = [];
let orderNumber = 0;

// ===== UTILS =====
function formatPrice(price) {
    return "Rp " + price.toLocaleString("id-ID");
}

function getCategoryLabel(cat) {
    const labels = {
        "drink": "Minuman",
        "dessert": "Dessert"
    };
    return labels[cat] || cat;
}

// ===== NAVBAR =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close nav on link click (mobile)
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Active link on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
    var current = "";
    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// ===== RENDER MENU GRID =====
function renderMenuGrid(category) {
    var grid = document.getElementById("menuGrid");
    var items = category === "all" ? menuData : menuData.filter(function (m) { return m.category === category; });
    grid.innerHTML = items.map(function (item) {
        return '<div class="menu-card" data-category="' + item.category + '">' +
            '<div class="menu-card-image"><span>' + item.emoji + '</span></div>' +
            '<div class="menu-card-body">' +
            '<span class="menu-card-category">' + getCategoryLabel(item.category) + '</span>' +
            '<h4>' + item.name + '</h4>' +
            '<p>' + item.desc + '</p>' +
            '<div class="menu-card-footer">' +
            '<span class="menu-price">' + formatPrice(item.price) + '</span>' +
            '<button class="add-cart-btn" data-id="' + item.id + '"><i class="fas fa-plus"></i></button>' +
            '</div></div></div>';
    }).join("");

    // Add to cart event
    grid.querySelectorAll(".add-cart-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            addToCart(parseInt(this.dataset.id));
        });
    });
}

// Category filter
document.querySelectorAll(".category-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".category-btn").forEach(function (b) { b.classList.remove("active"); });
        this.classList.add("active");
        renderMenuGrid(this.dataset.category);
    });
});

renderMenuGrid("all");

// ===== RENDER ORDER ITEMS =====
function renderOrderItems(category) {
    var container = document.getElementById("orderItems");
    var items = category === "all" ? menuData : menuData.filter(function (m) { return m.category === category; });
    container.innerHTML = items.map(function (item) {
        return '<div class="order-item" data-category="' + item.category + '">' +
            '<div class="order-item-icon"><span>' + item.emoji + '</span></div>' +
            '<div class="order-item-info">' +
            '<h4>' + item.name + '</h4>' +
            '<span>' + formatPrice(item.price) + '</span>' +
            '</div>' +
            '<button class="order-add-btn" data-id="' + item.id + '"><i class="fas fa-plus"></i></button>' +
            '</div>';
    }).join("");

    container.querySelectorAll(".order-add-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            addToCart(parseInt(this.dataset.id));
        });
    });
}

document.querySelectorAll(".order-cat-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".order-cat-btn").forEach(function (b) { b.classList.remove("active"); });
        this.classList.add("active");
        renderOrderItems(this.dataset.orderCategory);
    });
});

renderOrderItems("all");

// ===== CART FUNCTIONS =====
function addToCart(id) {
    var item = menuData.find(function (m) { return m.id === id; });
    if (!item) return;
    var existing = cart.find(function (c) { return c.id === id; });
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: item.id, name: item.name, price: item.price, qty: 1, emoji: item.emoji });
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(function (c) { return c.id !== id; });
    updateCartUI();
}

function changeQty(id, delta) {
    var item = cart.find(function (c) { return c.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    updateCartUI();
}

function getCartTotal() {
    return cart.reduce(function (sum, c) { return sum + c.price * c.qty; }, 0);
}

function getCartCount() {
    return cart.reduce(function (sum, c) { return sum + c.qty; }, 0);
}

function updateCartUI() {
    var count = getCartCount();
    var total = getCartTotal();

    // Cart count badge
    document.getElementById("cartCount").textContent = count;

    // Cart items (in order section)
    var cartItemsEl = document.getElementById("cartItems");
    var cartSummary = document.getElementById("cartSummary");
    var cartActions = document.getElementById("cartActions");

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-basket"></i><p>Keranjang masih kosong</p></div>';
        cartSummary.style.display = "none";
        cartActions.style.display = "none";
    } else {
        cartItemsEl.innerHTML = cart.map(function (c) {
            return '<div class="cart-item">' +
                '<div class="cart-item-info">' +
                '<h4>' + c.emoji + ' ' + c.name + '</h4>' +
                '<span>' + formatPrice(c.price) + '</span>' +
                '</div>' +
                '<div class="cart-item-qty">' +
                '<button class="qty-btn" data-id="' + c.id + '" data-delta="-1">-</button>' +
                '<span>' + c.qty + '</span>' +
                '<button class="qty-btn" data-id="' + c.id + '" data-delta="1">+</button>' +
                '</div>' +
                '<button class="cart-item-remove" data-id="' + c.id + '"><i class="fas fa-trash-alt"></i></button>' +
                '</div>';
        }).join("");
        cartSummary.style.display = "block";
        cartActions.style.display = "flex";
        document.getElementById("subtotal").textContent = formatPrice(total);
        document.getElementById("total").textContent = formatPrice(total);

        // Events
        cartItemsEl.querySelectorAll(".qty-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                changeQty(parseInt(this.dataset.id), parseInt(this.dataset.delta));
            });
        });
        cartItemsEl.querySelectorAll(".cart-item-remove").forEach(function (btn) {
            btn.addEventListener("click", function () {
                removeFromCart(parseInt(this.dataset.id));
            });
        });
    }

    // Sidebar cart
    updateSidebarCart();
}

function updateSidebarCart() {
    var body = document.getElementById("cartSidebarBody");
    var footer = document.getElementById("cartSidebarFooter");
    if (cart.length === 0) {
        body.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-basket"></i><p>Keranjang masih kosong</p></div>';
        footer.style.display = "none";
    } else {
        body.innerHTML = cart.map(function (c) {
            return '<div class="cart-item">' +
                '<div class="cart-item-info">' +
                '<h4>' + c.emoji + ' ' + c.name + '</h4>' +
                '<span>' + formatPrice(c.price) + ' x ' + c.qty + '</span>' +
                '</div>' +
                '</div>';
        }).join("");
        footer.style.display = "block";
        document.getElementById("sidebarTotal").textContent = formatPrice(getCartTotal());
    }
}

// Clear cart
document.getElementById("clearCart").addEventListener("click", function () {
    cart = [];
    updateCartUI();
});

// ===== CART SIDEBAR (MOBILE) =====
var cartBtn = document.getElementById("cartBtn");
var cartSidebar = document.getElementById("cartSidebar");
var cartSidebarOverlay = document.getElementById("cartSidebarOverlay");
var cartSidebarClose = document.getElementById("cartSidebarClose");

cartBtn.addEventListener("click", function () {
    cartSidebar.classList.add("active");
    cartSidebarOverlay.classList.add("active");
});

function closeSidebar() {
    cartSidebar.classList.remove("active");
    cartSidebarOverlay.classList.remove("active");
}

cartSidebarClose.addEventListener("click", closeSidebar);
cartSidebarOverlay.addEventListener("click", closeSidebar);

document.getElementById("goToOrder").addEventListener("click", function () {
    closeSidebar();
});

// ===== CHECKOUT =====
var checkoutModal = document.getElementById("checkoutModal");
var closeModalBtn = document.getElementById("closeModal");
var checkoutForm = document.getElementById("checkoutForm");
var orderTypeSelect = document.getElementById("orderType");
var tableGroup = document.getElementById("tableGroup");

document.getElementById("checkoutBtn").addEventListener("click", function () {
    if (cart.length === 0) return;
    // Fill checkout summary
    var summaryEl = document.getElementById("checkoutSummary");
    summaryEl.innerHTML = cart.map(function (c) {
        return '<div class="checkout-item"><span>' + c.name + ' x' + c.qty + '</span><span>' + formatPrice(c.price * c.qty) + '</span></div>';
    }).join("") +
        '<div class="checkout-total"><span>Total</span><span>' + formatPrice(getCartTotal()) + '</span></div>';
    checkoutModal.classList.add("active");
});

closeModalBtn.addEventListener("click", function () {
    checkoutModal.classList.remove("active");
});

checkoutModal.addEventListener("click", function (e) {
    if (e.target === checkoutModal) checkoutModal.classList.remove("active");
});

orderTypeSelect.addEventListener("change", function () {
    tableGroup.style.display = this.value === "dine-in" ? "block" : "none";
});

checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();
    orderNumber++;
    var name = document.getElementById("custName").value;
    var phone = document.getElementById("custPhone").value;
    var type = orderTypeSelect.value;
    var table = document.getElementById("tableNum").value;
    var notes = document.getElementById("notes").value;
    var total = getCartTotal();

    // Build receipt
    var receiptEl = document.getElementById("orderReceipt");
    var now = new Date();
    var timeStr = now.toLocaleString("id-ID");
    receiptEl.innerHTML =
        '<div class="receipt-header"><h4>HICE CREAM</h4><p>Ice Cream & Drinks</p></div>' +
        '<div class="receipt-row"><span>No. Order</span><span>#HC-' + String(orderNumber).padStart(4, "0") + '</span></div>' +
        '<div class="receipt-row"><span>Waktu</span><span>' + timeStr + '</span></div>' +
        '<div class="receipt-row"><span>Nama</span><span>' + name + '</span></div>' +
        '<div class="receipt-row"><span>No. HP</span><span>' + phone + '</span></div>' +
        '<div class="receipt-row"><span>Tipe</span><span>' + (type === "dine-in" ? "Dine In" + (table ? " (Meja " + table + ")" : "") : "Take Away") + '</span></div>' +
        (notes ? '<div class="receipt-row"><span>Catatan</span><span>' + notes + '</span></div>' : '') +
        '<div class="receipt-divider"></div>' +
        cart.map(function (c) {
            return '<div class="receipt-row"><span>' + c.name + ' x' + c.qty + '</span><span>' + formatPrice(c.price * c.qty) + '</span></div>';
        }).join("") +
        '<div class="receipt-divider"></div>' +
        '<div class="receipt-row receipt-total"><span>TOTAL</span><span>' + formatPrice(total) + '</span></div>';

    // Show success
    checkoutModal.classList.remove("active");
    document.getElementById("successModal").classList.add("active");

    // Clear
    cart = [];
    updateCartUI();
    checkoutForm.reset();
});

document.getElementById("closeSuccess").addEventListener("click", function () {
    document.getElementById("successModal").classList.remove("active");
});

document.getElementById("successModal").addEventListener("click", function (e) {
    if (e.target === document.getElementById("successModal")) {
        document.getElementById("successModal").classList.remove("active");
    }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});
