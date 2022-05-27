const fetchBtn = document.getElementById('fetch');
const addBtn = document.getElementById('add');
const fetchCon = document.getElementById('fetchContainer');
let detailButtons;


addBtn.addEventListener('click', () => {
    window.location.href = '/booksAdd';
});

function viewDetails(objBtn) {

    window.location.href = `/books/${objBtn.value}`;
}

fetchBtn.addEventListener('click', () => {
    fetch(`/api/book`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        fetchCon.innerHTML = "";
        for(var i = 0; i < data.length; i++){
            fetchCon.innerHTML = fetchCon.innerHTML + `
                <div class="fetch-item">
                    <div class="title-song">${data[i].title} | ${data[i].author}</div>
                    <div class="button-item">
                        <button onclick="viewDetails(this)" value=${data[i]._id} type="button" class="btn btn-outline-secondary buttonCommand btn-lg"> View </button>
                    </div>
                </div>
                    
            `
        }
    })
    .catch((err) => {
        console.log("err:", err);
    })
});


