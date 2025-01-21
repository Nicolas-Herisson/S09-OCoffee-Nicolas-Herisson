const button = document.querySelector('.menu.button');
const menu = document.querySelector('.menu.list');



button.addEventListener("click", () => {
    menu.classList.toggle('open');
})

