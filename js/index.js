let fm = document.querySelector('form');
let em = document.getElementById('email');
let fn = document.getElementById('name');
let msg = document.getElementById('message');
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function handleForm(event) {
    event.preventDefault();

    let data = {};
    let errors = [];


    // check if user entered name

    if (fn.value !== '') {

        if (regex.test(fn.value)) {

            data.name = fn.value;

        }

    } else {
        errors.push('Full name is empty. Plese enter the name!');
    }


    // check if user entered email

    if (em.value !== '') {

        if (regex.test(em.value)) {

            data.email = em.value;

        } else {

            errors.push('Please enter the valid email');

        }

    } else {
        errors.push('Email is empty. Plese enter your email!');
    }




    // check if user entered message

    if (msg.value !== '') {

        if (regex.test(msg.value)) {

            data.message = msg.value;

        }

    } else {
        errors.push('Message is empty. Plese enter the message!')
    }

    if (errors.length === 0) {
        console.log(fn.value);
        console.log(data);
        console.log(msg.value);

        fm.reset();

    } else {
        console.log(errors);
    }

}

fm.addEventListener('submit', handleForm);