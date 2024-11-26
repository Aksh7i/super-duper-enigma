// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById('menu'); // Gets the menu element by its ID
    menu.classList.toggle('show'); // Toggles the 'show' class to either show or hide the menu
}

// Hero Section------Start

// Function to show the popup
function showPopup(event) {
    event.preventDefault(); // Prevents the default form submission or event behavior
    const popup = document.getElementById("popup"); // Gets the popup element by its ID
    popup.style.display = "block"; // Displays the popup by setting its display to 'block'
    setTimeout(() => {
        popup.style.display = "none"; // Hides the popup after 3 seconds
    }, 3000); // Sets a timeout to hide the popup after 3 seconds
}

// Testimonial Carousel Functions

const testimonials = document.querySelectorAll('.testimonial'); // Gets all elements with the 'testimonial' class
let index = 0; // Initializes the starting index for the testimonial carousel

// Function to show a specific testimonial based on the index
function showTestimonial(i) {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === i ? 'block' : 'none'; // Displays the testimonial if the index matches
    });
}

// Function to move to the next testimonial in the carousel
function nextTestimonial() {
    index = (index + 1) % testimonials.length; // Increments the index and wraps around if it exceeds the number of testimonials
    showTestimonial(index); // Displays the next testimonial
}

// Function to start the carousel, displaying a new testimonial every 3 seconds
function startCarousel() {
    setInterval(nextTestimonial, 3000); // Calls the nextTestimonial function every 3 seconds to cycle through testimonials
}

// Event listener to start the carousel and display the first testimonial when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(index); // Shows the first testimonial initially
    startCarousel(); // Starts the testimonial carousel
});

