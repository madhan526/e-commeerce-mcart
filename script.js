document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });


    // --- Customer Review Slider ---
    const reviews = document.querySelectorAll('.review');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentReview = 0;

    function showReview(index) {
        // Hide all reviews
        reviews.forEach(review => review.classList.remove('active'));
        // Show the correct one
        reviews[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    });

    prevBtn.addEventListener('click', () => {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        showReview(currentReview);
    });

    // Initialize slider
    showReview(currentReview);

}); 