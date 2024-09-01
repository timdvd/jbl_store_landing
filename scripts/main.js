const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* background header */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* swiper */
const swiper = new Swiper('.products__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    gradCursor: true,
    breakpoints: {
        768:{
            slidesPerView: 3,
        }
    }
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__social, .products__container`)
sr.reveal(`.home__title span:nth-child(1)`, {origin: 'left', opacity: 1})
sr.reveal(`.home__title span:nth-child(3)`, {origin: 'right', opacity: 1})
sr.reveal(`.home__tooltip, .home__button, .model__button`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img, .model__tooltip`, {origin: 'right'})