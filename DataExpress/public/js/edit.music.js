const submitBtn = document.getElementById('submitBtn');
const titleText = document.getElementById('title');
const artistText = document.getElementById('artist');
const albumText = document.getElementById('album');
const yearNum = document.getElementById('year');
const genresText = document.getElementById('genre');
const idHidden = document.getElementById('hiddenValues');
const containerForm = document.getElementById('containerForm');


// * Add a alert or something that tells the user 
// * that the entry has been added

console.log(idHidden.textContent);
fetch(`/api/music/${idHidden.textContent}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    titleText.setAttribute('value', data[0].title);
    artistText.setAttribute('value', data[0].artist);
    yearNum.setAttribute('value', data[0].year);
    albumText.setAttribute('value', data[0].album);
    genresText.setAttribute('value', data[0].genres)
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
            artist: artistText.value,
            album: albumText.value,
            genres: genresText.value,
            year: yearNum.value,
        }),
    }
    fetch(`/api/music/patch/${idHidden.textContent}`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
        containerForm.innerHTML = "<h3> Music has been Updated </h3>";
        setTimeout(() => { window.location.href = '/music'; }, 1300);
    })
    .catch((err) => {
        console.log('err: ', err);
    });
}