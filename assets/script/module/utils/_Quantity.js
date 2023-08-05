const productList = document.querySelectorAll(".cart-product");

// =============== Selection Products CheckBox && Quantity Btns =============== 
productList.forEach(element => {
    
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