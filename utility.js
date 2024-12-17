function hideScrine(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showScrine(elmentId) {
    const element = document.getElementById(elmentId);
    element.classList.remove('hidden');
}

function setAlfabateColor(elementId) {
    const alphabetColor = document.getElementById(elementId);
    alphabetColor.classList.add('bg-yellow-300')
}

function removeAlfabateColor(elementId) {
    const removeAlphabet = document.getElementById(elementId);
    removeAlphabet.classList.remove('bg-yellow-300')
}

function getCurrentElementById(elementId) {
    const element = document.getElementById(elementId);
    const currentElementText = element.innerText;
    const currentElement = parseInt(currentElementText);
    return currentElement;
}

function getElementValu(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');

    const randomNumber = Math.random(alphabet) * 25;
    const index = Math.round(randomNumber);
    const alphabets = alphabet[index];
    return alphabets;
}
