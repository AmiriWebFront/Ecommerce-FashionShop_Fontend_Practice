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
});