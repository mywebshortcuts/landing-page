



const starRepoButton = document.querySelector('.starRepoButton')
let quickAccess = document.querySelector('.quickAccess-wrapper');
let scrollToTopButton = document.querySelector('.scrollToTopButton');


document.addEventListener('DOMContentLoaded', function () {

    // Show scrollToTop, quickAccess & starRepoButton after scrolling a bit 
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            quickAccess.style.display = 'flex';
            scrollToTopButton.style.display = 'flex';
            starRepoButton.style.display = 'flex';

        } else {
            quickAccess.style.display = 'none';
            scrollToTopButton.style.display = 'none';
            starRepoButton.style.display = 'none';
        }
    });

    // Open & close quick access
    quickAccess.addEventListener('mouseenter', (e)=>{
        let quickAccessDetails = document.querySelector('.quickAccess-wrapper details');
        console.log(quickAccessDetails);
        quickAccessDetails.open = true
    })
    quickAccess.addEventListener('mouseleave', (e)=>{
        let quickAccessDetails = document.querySelector('.quickAccess-wrapper details');
        quickAccessDetails.open = false
    })

    // Show Quick Access despite of the scroll position if mouse enters that area
    document.addEventListener('mousemove', e=>{
        if (e.x >= 800 && e.y <= 80) {
            quickAccess.style.display = 'flex'
        }
    })

    
    // Scroll to top functionality
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            // Smooth scroll to top when the scroll indicator is clicked
            behavior: 'smooth'
        });
    });



    // Subscribe dialog functionality
    const subscribeDialog = document.querySelector('.subscribeDialog')
    subscribeDialog.style.display = 'none'
    console.log(subscribeDialog);


    const chromeInstallLink = document.querySelector('.chromeWebstoreLink')
    chromeInstallLink.addEventListener('click', (e) => {
        e.preventDefault()
        subscribeDialog.showModal()
        subscribeDialog.style.display = 'flex'
    })

    const closeSubscribeDialogButton = subscribeDialog.querySelector('.closeSubscribeDialogButton')
    console.log(closeSubscribeDialogButton);


    closeSubscribeDialogButton.addEventListener('click', (e) => {
        subscribeDialog.close()
        subscribeDialog.style.display = 'none'
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

starRepoButton.addEventListener('click', ()=>{
    window.open("https://github.com/mywebshortcuts/mywebshortcuts", "_blank")
})











