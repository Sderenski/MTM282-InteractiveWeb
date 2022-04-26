const proSection = document.getElementById("proSection");
let data = {};

function loadProducts() {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('https://fakestoreapi.com/products', fetchOptions)
    .then(res => res.json())
    .then(dataTemp => {
        data = dataTemp;
        console.log(data);
        for(var i = 0; i < Object.keys(data).length; i++){
            proSection.innerHTML +=`
            <div class="product-card">
                <div id="proCard${i}" class="product-image">
                    <img src="${data[i]['image']}"/>
                </div>
                <div class="product-info">
                    <h5>${data[i]['title']}</h5>
                    <h6>$${data[i]['price']}</h6>
                </div>`
        }
    })
    .catch((err) => {
        console.log(`There was an error ${err}`);
    });
};

loadProducts();


// Product Card Buttons 
const proBtn0 = document.getElementById('proCard0');

// Ask a lot of questions......
proBtn0.addEventListener("click", () => {

});

// Have it grab what a user picks and add it to a json file through fs
// Then import it into orders

