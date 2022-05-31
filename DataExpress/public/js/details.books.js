const idHidden = document.getElementById('hiddenValues');
const containCon = document.getElementById('contentMain');

let dataPerm;

fetch(`/api/book/${idHidden.textContent}`)
.then((response) => response.json())
.then((data) => {
    dataPerm = data;
    containCon.innerHTML = `
        <div class="titleContent"> 
            <h2> ${data[0].title} </h2>
            <h6> ${data[0].author} </h6>
        </div>
        <div>
            <div class="infoContent">
                <h4> ${data[0].publisher} </h4>
                <h5> ${data[0].published} </h5>
            </div>
            <br>
            <div class="buttonDiv">
                <button onclick='deletePost()' id='delete' type='button' class="btn btn-outline-secondary buttonCommand btn-lg px-4"> Delete Book </button>
                <button onclick='editPost()' id='edit' type='button' class="btn btn-outline-secondary buttonCommand btn-lg px-4"> Edit Book </button>
            </div>
        </div>`
})
.catch((err) => {
    console.log("Err:", err);
});


function deletePost() {
    const fetchOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: dataPerm[0].title,
            auther: dataPerm[0].author,
            published: dataPerm[0].published,
            publisher: dataPerm[0].publisher,
        }),
    };
    fetch(`/api/book/delete/${idHidden.textContent}`, fetchOptions)
    .then(response => response.json())
    .then(result => {
        window.location.href = '/books';
    })
    .catch((err) => {
        console.log("Err:", err);
    });
};

function editPost() {
    window.location.href = `/books/edit/${idHidden.textContent}`;
}


