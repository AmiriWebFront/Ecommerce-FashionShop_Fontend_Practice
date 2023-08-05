// =============== Product information ===============
const selectSize = document.querySelectorAll(".product-size");
selectSize.forEach(element => {
    element.addEventListener("click", (e) => {
        const deSelectSize = Array.from(selectSize).filter(sizeItem => !sizeItem.checked);
        deSelectSize.forEach(items => {
            items.className = "product-size w-12 h-12 text-slate-800 rounded-md border-[1px] border-slate-200";
        });
        e.target.className = "product-size w-12 h-12 text-white bg-slate-900 rounded-md border-[1px] border-slate-200 select-size";
    });
});