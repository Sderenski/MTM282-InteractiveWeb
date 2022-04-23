const trueBtn = document.getElementById('trueBtn');
const falseBtn = document.getElementById('falseBtn');
const questionTxt = document.getElementById('questionState');
const scoreTxt = document.getElementById('scoreTxt');
const correctTxt = document.getElementById('correctAnswer');
const qNumb = document.getElementById('numbQ');
const endScreen = document.getElementById('replaySec');
const questionScreen = document.getElementById('questionSection');
const restartBtn = document.getElementById('replayBtn');
const finalSc = document.getElementById('endScore');
let dataValues;
let questionVal = 0;
let score = 0;

const apiUrl = `https://opentdb.com/api.php?amount=10&type=boolean`;
const fetchArgs = {
    method: 'GET',
}

async function gather() {
    await fetch(apiUrl)
    .then((response) => response.json())
    .then(function(data){
        dataValues = data;
        console.log(dataValues);
        questionTxt.innerHTML = `<h5>${dataValues['results'][questionVal]['question']}</h5>`;
    });
    trueBtn.style.visibility = 'visible';
    falseBtn.style.visibility = 'visible';

}
gather();

// create the function to hide the question section and show the replay section......
function endScreenFun() {
    trueBtn.style.visibility = 'hidden';
    falseBtn.style.visibility = 'hidden';
    questionScreen.style.visibility = 'hidden';
    finalSc.innerText = `Final Score: ${score}`;
    endScreen.style.visibility = 'visible';
    restartBtn.style.visibility = 'visible';
}

function printNextQu(){
    questionTxt.innerHTML = `<h5>${dataValues['results'][questionVal]['question']}</h5>`;
    scoreTxt.innerText = `Score: ${score}`
    qNumb.innerText = `Question Number: ${questionVal + 1}`;
}

function checkingAnswer(answer){
    if (answer == dataValues['results'][questionVal]['correct_answer']){
        score += 1;
        correctTxt.style.visibility = 'hidden';
    } else{
        correctTxt.style.visibility = 'visible';
        correctTxt.innerText = `Correct Answer: ${dataValues['results'][questionVal]['correct_answer']}`;
    }
    questionVal += 1;
    if (questionVal == 10){
        endScreenFun();
    } else {
        printNextQu();
    }
}

trueBtn.addEventListener("click", () =>{
    checkingAnswer("True");
});

falseBtn.addEventListener("click", () => {
    checkingAnswer("False");
});

restartBtn.addEventListener("click", async () => {
    restartBtn.style.visibility = 'hidden';
    endScreen.style.visibility = 'hidden';
    correctTxt.style.visibility = 'hidden';
    questionVal = 0;
    score = 0;
    await gather();
    questionScreen.style.visibility = 'visible';
    trueBtn.style.visibility = 'visible';
    falseBtn.style.visibility = 'visible';
});



