





document.addEventListener('DOMContentLoaded', function () {
    var quickAccess = document.querySelector('.quickAccess-wrapper');
    var scrollToTopButton = document.querySelector('.scrollToTopButton');

    // Show the scroll indicator after scrolling a certain distance
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            quickAccess.style.display = 'flex';

            scrollToTopButton.style.display = 'flex';
        } else {
            quickAccess.style.display = 'none';
            scrollToTopButton.style.display = 'none';
        }
    });

    quickAccess.addEventListener('mouseenter', (e)=>{
        let quickAccessDetails = document.querySelector('.quickAccess-wrapper details');
        console.log(quickAccessDetails);
        quickAccessDetails.open = true
    })
    quickAccess.addEventListener('mouseleave', (e)=>{
        let quickAccessDetails = document.querySelector('.quickAccess-wrapper details');
        quickAccessDetails.open = false
    })

    // Smooth scroll to top when the scroll indicator is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.addEventListener('mousemove', e=>{
        if (e.x >= 800 && e.y <= 80) {
            quickAccess.style.display = 'flex'
            
        }
    })
});


const switchModeButton = document.querySelector('.switchMode')
switchModeButton.addEventListener('click', ()=>{
    const root = document.querySelector('html')
    if (root.classList.contains('dark')) {
        root.classList.remove('dark')
    }
    else{
        root.classList.add('dark')
    }

})