const products = document.querySelectorAll('.product.container');
const coffeesButton = document.querySelector('.products.button');
let open = false;
let index = 0;
const url = window.location.href;
console.log(window.location.href)

if (!isNaN(url.split('/').pop()))
{
    products[0].classList.add('active');
}
else
{
    products[0].classList.add('active');
    products[1].classList.add('active');
    products[2].classList.add('active');

    coffeesButton.addEventListener("click", () => {

        if (open)
        {
            products.forEach(product => {

                if (index > 2)
                {
                    product.classList.toggle('active');
                    open = false;
                    coffeesButton.innerHTML = "Voir tous les cafés"
                }
                index++;
            });
        }
        else if (!open)
            products.forEach(product => {
                if (!product.classList.contains('active'))
                {
                    product.classList.toggle('active');
                    open = true;
                    coffeesButton.innerHTML = "Cacher tous les cafés"
                }
        });
        index = 0;
    })
}

