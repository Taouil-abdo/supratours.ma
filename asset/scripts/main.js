let hamburger = document.querySelectorAll('.hamburger');
let menu = document.querySelectorAll('.header__menu');
let icons = document.querySelectorAll('.fa-solid.fa-bars');

hamburger.forEach((item) => {
    item.addEventListener('click', () => {
        menu.forEach((menu) => {
            menu.classList.toggle('active');
        });
        icons.forEach((icon) => {
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-x');
            } else {
                icon.classList.replace('fa-x', 'fa-bars');
            }
        });
    });
});
