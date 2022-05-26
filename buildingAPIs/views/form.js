// Identify the form
const form = document.getElementById('myForm');


// Take over the submit event
form.addEventListener('submit', (ev) => {
    
    
    // prevent the submit default from happening
    ev.preventDefault();
    
    
    // loop through any input that is not a SUBMIT
    // and create a data object based on those inputs
    let inputs = Array.from(form.getElementsByTagName('input'));
    

    inputs = inputs.filter((input) => {
        return input.getAttribute('type') !== 'submit';
    });

    inputs.forEach((input) => {
        if(input.getAttribute('type') !== 'submit')
        {
            data[input.getAttribute('name')]
        }
    })
    
    // send the data to the correct endpoint??

})