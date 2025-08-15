// --- Feather Icons Initialization ---
// This needs to run to render the icons.
feather.replace();

// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add a click event listener to the menu button
mobileMenuButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the mobile menu element
    mobileMenu.classList.toggle('hidden');
});

// --- Typing Animation ---
const typingText = document.getElementById('typing-text');
const words = ["passionate developer", "creative thinker", "problem solver", "full-stack engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    // Get the current word from the array
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // If deleting, remove the last character
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        // When the word is fully deleted, switch to typing the next word
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        }
    } else {
        // If typing, add the next character
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        // When the word is fully typed, pause and then start deleting
        if (charIndex === currentWord.length) {
            setTimeout(() => { isDeleting = true; }, 1500); // Pause before deleting
        }
    }
    
    // Set the speed of typing/deleting
    const typeSpeed = isDeleting ? 75 : 150;
    // Call the type function again after the specified delay
    setTimeout(type, typeSpeed);
}

// Start the typing animation when the page content has fully loaded
document.addEventListener('DOMContentLoaded', type);

// --- Header Background on Scroll ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    // Add a shadow to the header when the user scrolls down
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// --- Scroll to Top Button ---
const toTopButton = document.getElementById('to-top-button');
window.addEventListener('scroll', () => {
    // Show the button when the user has scrolled down 300px
    if (window.scrollY > 300) {
        toTopButton.classList.remove('hidden');
    } else {
        toTopButton.classList.add('hidden');
    }
});

// Add a click event listener to the scroll-to-top button
toTopButton.addEventListener('click', () => {
    // Smoothly scroll the window to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
