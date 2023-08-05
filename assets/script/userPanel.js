// Purched Product Details Accordions
const accordions = document.querySelectorAll(".accordions");
accordions.forEach(item => {
    let accordionBtn = item.querySelector(".accordions-btn");
    accordionBtn.addEventListener("click", () => {
        let accordionContent = item.querySelector(".accordions-content");
        let purchedDetailsHeight = accordionContent.querySelector(".purched-details").clientHeight;
        accordionContent.classList.toggle(`h-[${purchedDetailsHeight + 80 }px]`);
    });
});