const menuIcon = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.nav-link');
const shakeBtn = document.querySelector('.contact-button');

// chang Shaking button form
shakeBtn.addEventListener('click', () => {
    shakeBtn.classList.toggle('change');
})

// close and open Navbar with Hamburger menu
menuIcon.addEventListener('click', () => {
    mainNav.classList.toggle('change');
})

// move navbarTop when click
navLink.forEach(function (link){
    link.addEventListener('click', () => {
        mainNav.classList.toggle('change');
    })
})

// Lazy Loading Images
const myImages = document.querySelectorAll(`img`);
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);

                observer.disconnect();
            }
        })
    });

    io.observe(target);
}

myImages.forEach(lazyLoad);

// Bread Animation
const breadContainer = document.querySelector('.bread-container');
function breadAnimation(){
    for( let breadItems = 0; breadItems <= 500; breadItems++) {
        setTimeout(function (){
            let oneBread = document.createElement('div');
            oneBread.classList.add(`bread`);
            oneBread.style.animationDelay = `${Math.floor(Math.random() * (5-1) + (1) )}s`;
            oneBread.style.width = `${Math.floor(Math.random() * (8-1) + (1) )}px`;
            oneBread.style.height = `${Math.floor(Math.random() * (10-1) + (1)  )}px`;
            oneBread.style.left = `${Math.floor(Math.random() * (60-20) + (20))}%`;
            console.log(oneBread);
            breadContainer.appendChild(oneBread);
        }, 1500)
    }
}

breadAnimation();