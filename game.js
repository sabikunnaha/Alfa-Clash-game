// function play() {
//     // const homeScren = document.getElementById('home');
//     // homeScren.classList.add('hidden');

//     // const playGround = document.getElementById('play-ground');
//     // playGround.classList.remove('hidden');


// }

function handleKeyupEvent(event) {
    const playerPress = event.key;
    console.log(playerPress);

    if (playerPress === 'Escape') {
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetValu = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetValu.toLowerCase();


    if (expectedAlphabet === playerPress) {
        continueGame()
        removeAlfabateColor(expectedAlphabet)
        const currentScore = getCurrentElementById('current-score');
        const updateValu = currentScore + 1;

        getElementValu('current-score', updateValu);

    }
    else {

        const currentLife = getCurrentElementById('current-life');
        const updateLife = currentLife - 1;
        getElementValu('current-life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }

    }
}

document.addEventListener('keyup', handleKeyupEvent)

function continueGame() {
    const alphabet = getARandomAlphabet()
    const currentElemant = document.getElementById('current-alphabet');
    currentElemant.innerText = alphabet;
    setAlfabateColor(alphabet);
}

function play() {
    hideScrine('home');
    showScrine('play-ground');
    hideScrine('score')
    getElementValu('current-score', 0)
    getElementValu('current-life', 5)
    continueGame();
}

function gameOver() {
    hideScrine('play-ground');
    showScrine('score')

    const lastScore = getCurrentElementById('current-score');
    getElementValu('last-score', lastScore);

    const carruntAlfabet = getElementTextById('current-alphabet');
    removeAlfabateColor(carruntAlfabet);

}