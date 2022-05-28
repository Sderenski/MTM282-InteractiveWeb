const submitBtn = document.getElementById('submitBtn');
const titleText = document.getElementById('title');
const authorText = document.getElementById('author');
const publisherText = document.getElementById('publisher');
const publishedNum = document.getElementById('published');

// * Add a alert or something that tells the user 
// * that the entry has been added

submitBtn.onclick = (ev) => {
    ev.preventDefault();
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            title: titleText.value,
            author: authorText.value,
            published: publishedNum.value,
            publisher: publisherText.value,
        }),
    }
    fetch(`/api/book`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
        containerForm.innerHTML = "<h3> Book has been Added </h3>";
        setTimeout(() => { window.location.href = '/books'; }, 1300);
    })
    .catch((err) => {
        console.log('err: ', err);
    });
}