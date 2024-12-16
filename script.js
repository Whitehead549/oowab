// JavaScript to handle carousel sliding
const carousel = document.getElementById('carousel');
let currentIndex = 0;

// Function to move the carousel
function slideCarousel() {
    // Calculate the new transform value
    currentIndex = (currentIndex + 1) % 2; // Toggle between 0 and 1
    const offset = currentIndex * -100; // -100% for second slide
    carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 2 seconds
setInterval(slideCarousel, 2000);

   


// JavaScript to toggle the mobile menu visibility
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle mobile menu when the hamburger button is clicked
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Close the mobile menu when a link is clicked
const menuLinks = document.querySelectorAll("#mobile-menu a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden"); // Hide the mobile menu after clicking a link
    });
});
