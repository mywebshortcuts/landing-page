





document.addEventListener('DOMContentLoaded', function () {
    var quickAccess = document.querySelector('.quickAccess-wrapper');
    var scrollToTopButton = document.querySelector('.scrollToTopButton');

    // Show the scroll indicator after scrolling a certain distance
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            quickAccess.style.display = 'flex';
            scrollToTopButton.style.display = 'flex';
        } else {
            quickAccess.style.display = 'none';
            scrollToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when the scroll indicator is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
