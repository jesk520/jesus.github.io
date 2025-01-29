document.getElementById('no-btn').addEventListener('click', nextQuestionAndGrowYesButton);
document.getElementById('yes-btn').addEventListener('click', showLoveMessage);

const preguntas = [
    "¿Me disculpas?:",
    "¿Porfi cachetona? :",
    "¿Aceptas mis disculpas? :",
    "¿enserio?¡ :",
    "¿Puedo hacer algo para remediarlo? :",
    "!andale niña carbon¡ :",
    "¿andale chaparrita? :",
    "¿Me puedes perdonar? :",
    "¿porque no pones que si??? :",
    "¿porque siges poniendo no? :",
    "¿ya pusiste muchos noooo porqueeee??? :",
    "¿ya piensalo ya son muchos no?:",
    "!jajajajaja no ay escapatoria mi princesa jjsjsjsjs entonces , me perdonas¡ :",

];

function nextQuestionAndGrowYesButton() {
    let currentQuestion = parseInt(document.getElementById('current-question').value);
    if (currentQuestion < preguntas.length) {
        currentQuestion++;
        document.getElementById('question-label').innerText = preguntas[currentQuestion - 1];
        document.getElementById('current-question').value = currentQuestion;
        growYesButton();
    } else {
        showLoveMessage();
    }
}

function growYesButton() {
    let yesBtn = document.getElementById('yes-btn');
    yesBtn.style.width = (parseInt(yesBtn.style.width || '100') + 50) + 'px';
    if (parseInt(yesBtn.style.width) >= 700) {
        document.getElementById('no-btn').style.display = 'none';
    }
}

function showLoveMessage() {
    document.getElementById('apology-form').style.display = 'none';
    document.getElementById('love-message').style.display = 'block';
}
