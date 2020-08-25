const menuIcon = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.nav-link');
const lineHamburger = document.querySelectorAll('.line');

// close and open Navbar with Hamburger menu
menuIcon.addEventListener('click', (e) => {
    mainNav.classList.toggle('change');
})

// move navbarTop when click
navLink.forEach(function (link){
    link.addEventListener('click', () => {
        mainNav.classList.toggle('change');
    })
})

