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

//hide main-nav on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        mainNav.style.top = "0";
    } else {
        mainNav.style.top = "-71.11px";
    }
    prevScrollpos = currentScrollPos;
}