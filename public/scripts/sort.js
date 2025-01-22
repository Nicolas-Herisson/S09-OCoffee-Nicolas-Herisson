import dataMapper from '../app/dataMapper.js';

const sortButton = document.querySelector('.sort--button');



sortButton.addEventListener("click", async () => {
    console.log("in")
    const selectedSort = document.querySelector('#sort');
    const sortValue = selectedSort.value;

    const coffees = await dataMapper.getAllCoffees();

    const form = document.createElement('form');
    form.action = `/catalogue/${sortValue}`;
    form.method = 'get';

    const select = document.createElement('select');
    select.name = sortValue;
    select.id = sortValue;

    for (const coffee of coffees) {
        const option = document.createElement('option');
        option.value = coffee[sortValue];
        option.text = coffee[sortValue];
        select.appendChild(option);
    }

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Chercher';

    form.appendChild(select);
    form.appendChild(submitButton);

    const sortForm = document.querySelector('.sort.form');
    form.after(sortForm);
});
