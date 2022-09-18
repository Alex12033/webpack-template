require('../scss/burger-menu.scss');

function burgerMenu() {
  const burgerBtn = document.querySelector('.toggle-button');
  const mobileNav = document.querySelector('.mobile-nav');
  const closedMobileNav = document.querySelector('.mobile-nav__close');
  const burgerBackdrop = document.querySelector('.mobile-nav__backdrop');

  burgerBtn.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
    burgerBackdrop.style.display = 'block';
  });

  closedMobileNav.addEventListener('click', () => {
    mobileNav.classList.add('hide-back');
    setTimeout(() => {
      mobileNav.classList.remove('hide-back');
      mobileNav.style.display = 'none';
      burgerBackdrop.style.display = 'none';
    }, 1000);
  });
  console.log("burger menu  connected");
}

module.exports = burgerMenu;
