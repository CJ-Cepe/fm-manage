const hamBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav-list');
const media = window.matchMedia('(width <= 50em)');
const body = document.querySelector('body');

media.addEventListener('change', (e) => {
    if (!e.matches) {
        hamBtn.setAttribute('aria-expanded', false);
        bodyScrollLockUpgrade.enableBodyScroll(body)
    }
})

hamBtn.addEventListener('click', () => {
    const btnState = hamBtn.getAttribute('aria-expanded') === 'true'
    hamBtn.setAttribute('aria-expanded', !btnState);
    hamBtn.focus();
    /* navList.removeAttribute('inert'); */

    if (!btnState) {
        bodyScrollLockUpgrade.disableBodyScroll(body)
    } else {
        bodyScrollLockUpgrade.enableBodyScroll(body)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.splide', {
        type: 'loop',
        drag: 'free',
        snap: true,
        focus: 'center',
        autoWidth: true,
        start: 1,
        gap: '2rem',
        padding: '1.5rem',

        pagination: true,
        mediaQuery: 'min',
        breakpoints: {
            600: {
                pagination: false,
            }
        }
    });

    splide.mount();
})

const submitBtn = document.querySelector('.footer__button');
const emailInput = document.querySelector('.footer__email-input');
const emailError = document.querySelector('.footer__email-error');
const emailForm = document.querySelector('.footer__form');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        emailError.setAttribute('aria-hidden', 'false');

        emailInput.style.outline = '2px solid var(--red1)';
        emailInput.setAttribute('aria-invalid', 'true');
    } else {
        emailError.style.display = 'none';
        emailError.setAttribute('aria-hidden', 'true');

        emailInput.style.outline = 'none';
        emailInput.setAttribute('aria-invalid', 'false');
        emailForm.submit();
        emailForm.reset();

    }
})