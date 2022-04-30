const nameInput = document.getElementById('fname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const adrInput = document.getElementById('adr');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');

const btn = document.getElementById('btn');

btn.onclick = (ev) => {
    ev.preventDefault();
    const fetchOptions ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            adr: adrInput.value,
            city: cityInput.value,
            state: stateInput.value,
            zip: zipInput.value,
        }),
    }
    fetch('http://localhost:3001/orders', fetchOptions)
    .then((response) => response.json())
    .then((res) => {
        window.location.href = '/';
    })
    .catch((err) => {
        console.log('err: ', err);
    });
}