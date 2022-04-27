function onSubmit(id){
    const quantityD = document.getElementById('quantity');
    let quantityNum = quantityD.value;

    window.location.href = `/product/${id}/${quantityNum}`;
}