const products = document.querySelectorAll('.product.container');
const coffeesButton = document.querySelector('.products.button');
let open = false;
let index = 0;


//displayed 3 max at init
for (let i = 0; i < 3; i++) {
    if (products[i])
        products[i].classList.add('active');
}

if (coffeesButton)
{
    coffeesButton.addEventListener("click", () => {

        if (open)
        {
            //close & init
            products.forEach(product => {

                if (index > 2)
                    product.classList.toggle('active');

                index++;
            });
            open = false;
            coffeesButton.innerHTML = "Voir tous les cafés"
        }
        else if (!open)
        {
            products.forEach(product => {
                if (!product.classList.contains('active'))
                    product.classList.toggle('active');

            });
            open = true;
            coffeesButton.innerHTML = "Cacher tous les cafés"
        }
    });
}
