


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

const dropdownToggleMobile = document.getElementById('dropdown-toggle-mobile');
const dropdownMenuMobile = document.getElementById('dropdown-menu-mobile');

dropdownToggleMobile.addEventListener('click', () => {
    dropdownMenuMobile.classList.toggle('active');
});



const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let translateX = 0;

prevButton.addEventListener('click', () => {
  translateX += 100;
  carouselInner.style.transform = `translateX(${translateX}%)`;
});

nextButton.addEventListener('click', () => {
  translateX -= 100;
  carouselInner.style.transform = `translateX(${translateX}%)`;
});
