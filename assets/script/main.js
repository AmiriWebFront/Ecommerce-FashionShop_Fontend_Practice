import navBar from './module/layout/_Navbar.js';
import footer from './module/layout/_Footer.js';
import statusAlert from './module/utils/_StatusAlert.js';
import offerSection from './module/layout/_OfferSection.js';
import registerSection from './module/layout/_RegisterSection.js';
// Modular Pages
document.querySelector(".nav-bar").innerHTML = navBar;
document.querySelector(".offer-section").innerHTML = offerSection;
document.querySelector(".register-modal").innerHTML = registerSection;
document.querySelector("footer").innerHTML = footer;

// Select all elements with class "price"
const prices = document.querySelectorAll(".price");
prices.forEach(price => {
const rawPrice = price.textContent.trim();
const formattedPrice = Number(rawPrice).toLocaleString(undefined, {minimumFractionDigits: 2});
price.textContent = formattedPrice;
});

// ============== Top Offer section ==============
// Close Button
const offerCloseBtn = document.querySelector(".offer-close-btn");
offerCloseBtn.addEventListener("click", () => {
  offerCloseBtn.parentElement.parentElement.classList.add("-mt-10");
  setTimeout(() => {
    offerCloseBtn.parentElement.parentElement.classList.add("hidden");
  }, 1000);
});


// ============== Nav Section ==============
// Open Cart Modal Box
const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart-modal");
let timeoutId;
cartBtn.addEventListener("mouseover", () => {
  cartModal.classList.remove("hidden");
  clearTimeout(timeoutId);
});
cartModal.addEventListener("mouseover",()=>{
  cartModal.classList.add("block");
  clearTimeout(timeoutId);
});
cartModal.addEventListener("mouseout", () => {
  timeoutId = setTimeout(() => {
    cartModal.classList.add("hidden");
  }, 1000);
});
cartBtn.addEventListener("mouseout", () => {
  timeoutId = setTimeout(() => {
    cartModal.classList.add("hidden");
  }, 1000);
});

const burgerBtn = document.querySelector(".burger-btn");
const menuBar = document.querySelector(".menuBar");

burgerBtn.addEventListener("click", () => {
  menuBar.classList.toggle("max-lg:-translate-x-[256px]");
});

document.addEventListener("click", function(event) {
  if (!menuBar.contains(event.target) && !burgerBtn.contains(event.target)) {
    menuBar.classList.remove("max-lg:translate-x-[256px]");
    menuBar.classList.add("max-lg:-translate-x-[256px]");
    console.log("ok");
  }
});

// ============== Register Modal Box ==============
// Transform Between Register Form
const sections = {
  login: document.querySelector(".login-section"),
  sing: document.querySelector(".singin-section"),
  reset: document.querySelector(".reset-section")

};

const links = {
  login: document.querySelectorAll(".login-link"),
  sing: document.querySelectorAll(".sing-link"),
  reset: document.querySelectorAll(".reset-link")
};

const hideAllSections = () => {
  Object.values(sections).forEach(section => section.classList.add("hidden"));
};

const showSection = sectionName => {
  hideAllSections();
  sections[sectionName].classList.remove("hidden");
};

Object.keys(links).forEach(sectionName => {
  links[sectionName].forEach(link => {
    link.addEventListener("click", () => showSection(sectionName));
  });

});

// Close and Open Modal Box
const registerBtn = document.querySelector(".regiter-btn");
const registerModalBack = document.querySelector(".register-modal");
const registerModalBox = document.querySelector(".registerModalBox");
const registerModalCloseBtn = document.querySelector(".registerModalCloseBtn");
const body = document.querySelector("body");

// open Modal Box
registerBtn.addEventListener("click", () => {
  registerModalBack.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});
// Close Modal Box With Close Button
registerModalCloseBtn.addEventListener("click", () => {
  registerModalBack.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});
//  If click outside of modal box
registerModalBack.addEventListener("click", (e) => {
  if (!registerModalBox.contains(e.target)) {
    registerModalBack.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }
});

// ============== Aside Section ==============
// Aside Drop Down Menu
const filterItem = document.querySelectorAll(".filterItem");
filterItem.forEach((Item) => {
  Item.addEventListener("click", () => {
    Item.nextElementSibling.classList.toggle("h-0");
    Item.classList.toggle("bg-slate-100");
  });
});

const productList = document.querySelectorAll(".cart-product");

// =============== Selection Products CheckBox && Quantity Btns =============== 
productList.forEach(element => {

    //  ------------  CheckBox to select products ------------ 
    const cartGlobalCheckbox = document.querySelector(".cart-global-select-btn");
    const cartProductCheckbox = element.querySelector(".cart-select-btn");
    cartGlobalCheckbox.addEventListener("click", () => {
        if (cartGlobalCheckbox.checked == true) {
            cartProductCheckbox.checked = true;
        } else {
            cartProductCheckbox.checked = false;
        }
    });

    
    //  ------------ Quantity Btns  ------------ 
    const cartQtyIncreaseBtn = element.querySelector(".qty-increase-btn");
    const cartQtyDecreaseBtn = element.querySelector(".qty-decrease-btn");
    const cartQtyInput = element.querySelector(".cart-product-qty-input");
    const cartProductPrice = element.querySelector(".cart-product-price");

    cartProductPrice.addEventListener("change",()=>{
        let totalPrice = cartQtyInput.value * parseFloat(cartProductPrice.textContent);
        cartProductPrice.innerHTML = totalPrice.toFixed(2);
        console.log(totalPrice);
    });

    // Set the initial state of the minus button
    if (cartQtyInput.value == 1) {
        cartQtyDecreaseBtn.disabled = true;
    } else {
        cartQtyDecreaseBtn.disabled = false;
    }

    // Increase the quantity of the product
    cartQtyIncreaseBtn.addEventListener("click", () => {
        cartQtyInput.value++;
        if (cartQtyInput.value > 1) {
            cartQtyDecreaseBtn.disabled = false;
        }
    });
    // Decrease the quantity of the product
    cartQtyDecreaseBtn.addEventListener("click", () => {
        cartQtyInput.value--;
        if (cartQtyInput.value == 1) {
            cartQtyDecreaseBtn.disabled = true;
        }
    });
});


// ============== Newsletter ==============
let newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", e => {
  e.preventDefault();
  formValidation();
});

// Validation
function formValidation() {
  const newsletterEmail = newsletterForm.querySelector("input").value;
  if (newsletterEmail === "") {
    statusAlert('Please Enter Your Email.');
    return;
  }
  const isValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/.test(newsletterEmail);
  if (!isValidEmail) {
    statusAlert('Please Enter a Valid Email Address.');
    return;
  }
  statusAlert('Thank you for subscribing.');
}

