  document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.mobile_menu .icon');
    const navMenu = document.querySelector('.left_menu .nav_menu');
    const closeMenu = document.getElementById('closeMenu');
    const body = document.body;

    menuIcon.addEventListener('click', () => {
      navMenu.style.display='flex';
      body.classList.add('no-scroll');
    });

    closeMenu.addEventListener('click', () => {
      navMenu.style.display="none";
      body.classList.remove('no-scroll');
    });
  });
