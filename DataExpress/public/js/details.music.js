const idHidden = document.getElementById('hiddenValues');
const containCon = document.getElementById('contentMain');

let dataPerm;

fetch(`/api/music/${idHidden.textContent}`)
.then((response) => response.json())
.then((data) => {
    dataPerm = data;
    containCon.innerHTML = `
        <div class="titleContent"> 
            <h2> ${data[0].title} </h2>
            <h6> ${data[0].artist} </h6>
            <br>
            <div class="extraContent">
                <h5 class="genreTitle"> Genres </h5>
                <h6> ${data[0].genres} </h6>
            </div>
        </div>
        <div>
            <div class="infoContent">
                <h4> ${data[0].album} </h4>
                <h5> ${data[0].year} </h5>
            </div>
            <br>
            <div class="buttonDiv">
                <button onclick='deletePost()' id='delete' type='button' class="btn btn-outline-secondary buttonCommand btn-lg px-4"> Delete Song </button>
            </div>
        </div>`
})
.catch((err) => {
    console.log("Err:", err);
});


function deletePost() {
    console.log("It is doing anything?")
    const fetchOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: dataPerm[0].title,
            artist: dataPerm[0].artist,
            album: dataPerm[0].album,
            genres: dataPerm[0].genres,
            year: dataPerm[0].year,
        }),
    };
    fetch(`/api/music/delete/${idHidden.textContent}`, fetchOptions)
    .then(response => response.json())
    .then(result => {
        window.location.href = '/music';
    })
    .catch((err) => {
        console.log("Err:", err);
    });
};


