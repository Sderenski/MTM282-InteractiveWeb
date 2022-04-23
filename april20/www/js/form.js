const nameInput = document.getElementById('name');
const btn = document.getElementById('btn');

btn.onclick = (ev) => {
    ev.preventDefault();
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nameValue: nameInput.value,
        }),
    }
    fetch('http://localhost:3000/form', fetchOptions)
    .then((response) => response.json())
    .catch((err) => {
        console.log('err: ', err);
    });
}