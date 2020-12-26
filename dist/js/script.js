const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      toSection = document.querySelectorAll('.menu__link'),
      persents = document.querySelectorAll('.skills__persents'), 
      lines = document.querySelectorAll('.skills__line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

toSection.forEach((i) => {
    i.addEventListener('click', () => {
        menu.classList.remove('active');});
});


persents.forEach((item,  i) => {
    lines[i].style.width = item.innerHTML;
});