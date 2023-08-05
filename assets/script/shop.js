import statusAlert from './module/utils/_StatusAlert.js';
// ============== Products Section ==============
// --------- Sort The Items By Option ---------
const sortBy = document.querySelector(".sortBy");
const sortByValue = document.querySelector(".sortBy > span");
const sortByUl = document.querySelector(".sortBy > ul");
const sortByItem = document.querySelectorAll(".sortByItem");
sortBy.addEventListener("click", () => {
    sortByUl.classList.toggle("hidden");
});
sortByItem.forEach((item) => {
    item.addEventListener("click", () => {
        sortByValue.innerHTML = item.textContent;
    });
});

// --------- Fetching Data Form Api ---------
let productLimit = 9;
let productEndPoint = `https://retoolapi.dev/XOI49k/AmiriShop?&_limit=${productLimit}`;
async function getProducts(url) {
    const response = await fetch(url);
    const data = await response.json();
    productsFilter(data);
}
getProducts(productEndPoint);

// --------- Data Filtering ---------
function productsFilter(rawProduct) {
    sortProducts(rawProduct);

    // Sort Poroduct
    function sortProducts(sortProduct) {
        let sortValue = 'id';
        const prodoctFilterItemNewest = document.querySelector(".newest");
        const prodoctFilterItemIncrease = document.querySelector(".expensive");
        const prodoctFilterItemDecrease = document.querySelector(".inexpensive");
        // handler for sorting
        prodoctFilterItemNewest.addEventListener("click", sortNewest);
        prodoctFilterItemDecrease.addEventListener("click", sortInexpensive)
        prodoctFilterItemIncrease.addEventListener("click", sortExpensive);
        function sortNewest() {
            sortValue = 'id';
            sortProduct.sort((a, b) => a[`${sortValue}`] - b[`${sortValue}`]);
            searchProducts(sortProduct);
        }
        function sortExpensive() {
            sortValue = 'price';
            sortProduct.sort((a, b) => b[`${sortValue}`] - a[`${sortValue}`]);
            searchProducts(sortProduct);
        }
        function sortInexpensive() {
            sortValue = 'price';
            sortProduct.sort((a, b) => a[`${sortValue}`] - b[`${sortValue}`]);
            searchProducts(sortProduct);
        }
        sortProduct.sort((a, b) => a[`${sortValue}`] - b[`${sortValue}`]);
        searchProducts(sortProduct);
    }

    // Search Product
    function searchProducts(searchProduct) {
        const searchBox = document.querySelector(".search-box");
        const searchBoxValue = searchBox.value.toUpperCase();
        if (searchBoxValue === '') {
            displayProducts(searchProduct);
        } else {
            const filteredProducts = searchProduct.filter(item => item.name.toUpperCase().includes(searchBoxValue));
            displayProducts(filteredProducts);
        }
        searchBox.addEventListener("keyup", () => {
            const filteredProducts = searchProduct.filter(item => item.name.toUpperCase().includes(searchBox.value.toUpperCase()));
            displayProducts(filteredProducts);
        });
    }
}

// --------- Load More Products Button ---------
const loadMoreBtn = document.querySelector(".load-more");
loadMoreBtn.addEventListener("click", () => {
    productLimit += 9;
    productEndPoint = `https://retoolapi.dev/XOI49k/AmiriShop?&_limit=${productLimit}`;
    getProducts(productEndPoint);
});

// --------- Display Products ---------
function displayProducts(products) {
    const productsSection = document.querySelector(".product-section");
    productsSection.innerHTML = "";
    fetch('https://retoolapi.dev/XOI49k/AmiriShop')
        .then(response => response.json())
        .then(data => {
            const numProducts = data.length;
            if (products.length >= numProducts) {
                loadMoreBtn.classList.add("hidden");
            }
        })
    products.forEach(item => {
        productsSection.innerHTML += `
    <div data-aos-duration="800" data-aos-anchor-placement="top-bottom" data-aos="fade-up" class="product relative max-sm:py-4 max-sm:border-b-2">
      <a href="./product.html" class="max-sm:flex max-sm:justify-between">
        <div class="overflow-hidden w-full h-[310px] max-lg:h-56 max-md:h-52 rounded-xl max-sm:h-[4rem] max-sm:w-[4rem] bg-slate-200 productImg">
          <img class="productImage" src="${item.image}" alt="img"/>
        </div>
        <div class="flex justify-between max-sm:flex-col mt-5">
          <span class="productName">${item.name}</span>
          <span class="productPrice price">${item.price}</span>
        </div>
      </a>
      <button data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}" class="product-buyBtn animate__animated absolute top-[72%] left-0 right-0 mx-auto bg-white w-[90%] py-2 rounded-lg shadow-md hidden max-sm:hidden">Add to Cart</button>
    </div>
    `;
        const productBuyBtn = document.querySelectorAll(".product-buyBtn");
        productBuyBtn.forEach(items => {
            items.addEventListener("click", () => {
                const productId = items.getAttribute("data-id");
                const productName = items.getAttribute("data-name");
                const productPrice = items.getAttribute("data-price");
                const productImage = items.getAttribute("data-image");
                addToCart(productId, productName, productPrice, productImage);

            });
        });
    });
}

// ============== Cart Section ==============
let cartProducts = [];
function addToCart(...productInfo) {
    // Create an object from the product information list
    const product = {
        Id: productInfo[0],
        Name: productInfo[1],
        Price: productInfo[2],
        imageUrl: productInfo[3]
    };
    // Checking whether the product is already in the cart list or not
    const exists = cartProducts.some(product => product.Id === productInfo[0]);
    if (exists) {
        statusAlert('The product exists in the cart.');
    } else {
        statusAlert('Added To Cart.');
        cartProducts.push(product);
        displayCartProducts(cartProducts);
    }
}

// --------- Display products in the shopping cart ---------
function displayCartProducts(products) {
    const cartProductSection = document.querySelector(".cart-proudct-section"),
        cartEmpty = document.querySelector(".empty-cart");
    if (products == '') {
        cartEmpty.classList.remove('hidden');
    } else {
        cartProductSection.innerHTML = '';
        products.forEach(item => {
            cartProductSection.innerHTML += `
      <!-- Product item -->
      <div product-id="${item.Id}" class="cart-product relative h-16 rounded-lg bg-slate-100 py-1 px-2 flex items-center gap-3 my-2">
      <!-- Remove Button -->
      <button
      class="cart-remove-product-btn absolute top-0 right-0 px-3 py-[0.1rem] rounded-bl-lg bg-slate-200 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      </button>
                      <!-- Product Image -->
                      <a href="#" class="w-10 rounded-md overflow-hidden">
              <img src="${item.imageUrl}" alt="${item.Name}">
              </a>
              <!-- Product Info -->
              <div class="flex flex-col gap-2">
              <p>${item.Name}</p>
              <div class="text-sm">
              <span class="price">${item.Price}</span>
              <span class="price line-through text-slate-500">56</span>
              </div>
          </div>
          <!-- Product Quantity -->
          <div class="flex h-8 border-2 border-slate-300 rounded-lg overflow-hidden absolute bottom-1 right-1">
              <!-- Minus Button -->
              <button class="cart-quantity-minus-btn disabled:bg-slate-100 px-1 hover:bg-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
              </button>
              <!-- Input -->
              <input class="product-qty-input w-8 text-center bg-transparent" type="tel" min="1" value="1">
              <!-- Plus Button -->
              <button class="cart-quantity-plus-btn px-1 hover:bg-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
              </button>
          </div>
      </div>
      `;
        });
    }

    // Display Product List Number
    const productsPurchasedNumber = document.querySelector(".productsPurchased-number");
    productsPurchasedNumber.innerHTML = products.length;

    // Increase and decrease the number of products and delete the product
    const cartProducts = document.querySelectorAll(".cart-product");
    cartProducts.forEach(element => {
        const cartRemoveProductBtn = element.querySelector(".cart-remove-product-btn"),
            cartQuantityMinusBtn = element.querySelector(".cart-quantity-minus-btn"),
            cartQuantityPlusBtn = element.querySelector(".cart-quantity-plus-btn"),
            cartQuantity = element.querySelector(".product-qty-input");

        // Set the initial state of the minus button
        if (cartQuantity.value == 1) {
            cartQuantityMinusBtn.disabled = true;
        } else {
            cartQuantityMinusBtn.disabled = false;
        }

        // Increase the quantity of the product
        cartQuantityPlusBtn.addEventListener("click", () => {
            cartQuantity.value++;
            if (cartQuantity.value > 1) {
                cartQuantityMinusBtn.disabled = false;
            }
        });

        // Decrease the quantity of the product
        cartQuantityMinusBtn.addEventListener("click", () => {
            cartQuantity.value--;
            if (cartQuantity.value == 1) {
                cartQuantityMinusBtn.disabled = true;
            }
        });

        // Delete Product
        cartRemoveProductBtn.addEventListener("click", () => {
            // Select Product For Deleting
            let selectedProduct = cartRemoveProductBtn.parentElement.getAttribute("product-id");
            cartProducts = cartProducts.filter(products => products.Id !== selectedProduct);
            displayCartProducts(cartProducts);
            console.log(products);
        });
    });
}