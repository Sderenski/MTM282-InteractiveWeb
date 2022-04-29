const textArea = document.getElementById('entry');
const outPut = document.getElementById('filtered');

textArea.addEventListener('input', ()=>{
    outPut.innerText = textArea.value;
});