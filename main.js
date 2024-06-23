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
