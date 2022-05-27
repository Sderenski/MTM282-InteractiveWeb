const submitBtn = document.getElementById('submitBtn');
const titleText = document.getElementById('title');
const artistText = document.getElementById('artist');
const albumText = document.getElementById('album');
const yearNum = document.getElementById('year');
const genresText = document.getElementById('genre');

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
            artist: artistText.value,
            album: albumText.value,
            genres: genresText.value,
            year: yearNum.value,
        }),
    }
    fetch(`/api/music`, fetchOptions)
    .then((response) => response.json())
    .catch((err) => {
        console.log('err: ', err);
    });
}