const proSection = document.getElementById("proSection");

function loadProducts() {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('https://fakestoreapi.com/products', fetchOptions)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for(var i = 0; i < Object.keys(data).length; i++){
            proSection.innerHTML +=`
            <div class="product-card">
                <div class="product-image">
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

