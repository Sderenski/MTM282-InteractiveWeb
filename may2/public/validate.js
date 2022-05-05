// * Form Validation for the front end of things....
// Put in to place as soon as the form element is finished loading.
const form = document.getElementById('myForm');


const submit = document.getElementById('submit');

submit.onclick = (ev) => {
    ev.preventDefault();
    const birthday = document.getElementById('birthday');
    // * mm/dd/yyyy
    const regexBD = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}/g
}