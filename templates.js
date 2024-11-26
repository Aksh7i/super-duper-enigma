// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Explore -------------------------------------------------------------------------START


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const filterOptions = document.querySelectorAll('input[name="filter"]');
    const productCards = document.querySelectorAll('.card');

    // Attach event listener to filter options
    filterOptions.forEach(option => {
        option.addEventListener("change", (event) => {
            applyFilter(event.target.value);
        });
    });
});

// Toggle the visibility of the filter dropdown
function toggleFilterDropdown() {
    const dropdown = document.getElementById('filter-dropdown');
    dropdown.classList.toggle('visible');
    dropdown.classList.toggle('hidden');
}

// Apply filter to display products based on selection
function applyFilter(filterType) {
    const productCards = document.querySelectorAll('.card');

    productCards.forEach(card => {
        const cardType = card.getAttribute("data-filterType");
        // Check if the card's type matches the filter type
        if (filterType === "Newest" || cardType === filterType) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}


// Explore ------------------------------------------------------------------------------END

function applyTag(tag) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = tag;
    handleSearch();
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
}


// Footer
document.querySelector('.footer-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    this.reset(); // Reset the form after submission
});

