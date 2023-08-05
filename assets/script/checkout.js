// ------------ Select Country Dropdown ------------
// Get the dropdown button and menu
const dropdownButton = document.getElementById('dropdown-menu')
const dropdownMenu = document.getElementById('dropdown-menu-items')

// Fetch the data for all countries
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Loop through each country and create a dropdown item for it
        data.forEach(country => {
            const countryName = country.name.common
            const countryItem = document.createElement('a')
            countryItem.textContent = countryName
            countryItem.href = '#'
            countryItem.classList.add('block', 'px-4', 'py-2', 'text-sm', 'text-gray-700', 'hover:bg-gray-100', 'hover:text-gray-900')
            countryItem.addEventListener('click', () => {
                // Set the selected item to the clicked country
                document.getElementById('selected-item').textContent = countryName;
                dropdownMenu.classList.toggle("hidden");
            })
            dropdownMenu.appendChild(countryItem)
        })
    })

// Show/hide the dropdown menu
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden')
})

// Close the dropdown menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInside = dropdownButton.contains(e.target) || dropdownMenu.contains(e.target)
    if (!isClickInside) {
        dropdownMenu.classList.add('hidden')
    }
})

// ------------ Shipping Method ------------
const shippingMethodItems = document.querySelectorAll(".postmethod");

shippingMethodItems.forEach(element => {
    element.addEventListener("click", () => {
        const shippingMethodItemSelect = element.querySelector(".postmethodBtn");
        if (shippingMethodItemSelect) {
            shippingMethodItemSelect.checked = true;
        }
    });
});