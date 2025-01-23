const submitButton = document.querySelector('#submitButton');
const publicKey = 'bXGZ7ybiIz0gjNT6z';

submitButton.addEventListener("click",  () => {

    const params = {
        mail: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
        name: document.querySelector('#name').value
    };

    

    emailjs.send('contact_service', 'contact_form', params).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log(params);
          console.log('FAILED...', error);
        },
      );
})