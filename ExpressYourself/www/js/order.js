const nameInput = document.getElementById('fname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const adrInput = document.getElementById('adr');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');

const btn = document.getElementById('btn');

function onSubmit(){
    console.log(`It worked`)
}

// btn.onclick = (ev) => {
//     ev.preventDefault();
//     const fetchOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             nameValue: nameInput.value,
//         }),
//     }
//     fetch('http://localhost:3000/form', fetchOptions)
//     .then((response) => response.json())
//     .catch((err) => {
//         console.log('err: ', err);
//     });
//}