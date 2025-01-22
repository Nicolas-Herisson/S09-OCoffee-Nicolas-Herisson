const button = document.querySelector('.menu.button');
const menuContainer = document.querySelector('.menu.button--container');


button.addEventListener("click", () => {
    menuContainer.classList.toggle('open');
});

