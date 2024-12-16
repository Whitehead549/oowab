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
