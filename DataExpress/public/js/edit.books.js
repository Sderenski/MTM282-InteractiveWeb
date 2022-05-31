const submitBtn = document.getElementById('submitBtn');
const titleText = document.getElementById('title');
const authorText = document.getElementById('author');
const publisherText = document.getElementById('publisher');
const publishedNum = document.getElementById('published');
const idHidden = document.getElementById('hiddenValues');
const containerForm = document.getElementById('containerForm');


// * Add a alert or something that tells the user 
// * that the entry has been added

console.log(idHidden.textContent);
fetch(`/api/book/${idHidden.textContent}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    titleText.setAttribute('value', data[0].title);
    authorText.setAttribute('value', data[0].author);
    publishedNum.setAttribute('value', data[0].published);
    publisherText.setAttribute('value', data[0].publisher);
})
.catch((err) => {
    console.log("Err:", err);
})





submitBtn.onclick = (ev) => {
    ev.preventDefault();
    const fetchOptions = {
        method: 'PATCH',
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
    fetch(`/api/book/patch/${idHidden.textContent}`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
        containerForm.innerHTML = "<h3> Book has been Updated </h3>";
        setTimeout(() => { window.location.href = '/books'; }, 1300);
    })
    .catch((err) => {
        console.log('err: ', err);
    });
}