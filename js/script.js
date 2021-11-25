/* 
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. 
*/
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', startGame);

function startGame() {
    const bombsAmount = 16;
    const introText = document.getElementById('intro-text');
    introText.classList.add('hidden');
    const mainGrid = document.getElementById('grid');
    mainGrid.classList.remove('hidden');
    mainGrid.innerHTML = '';
    document.getElementById('final-message').classList.add('hidden');
    const levelSelect = parseInt( document.getElementById('select-level').value );
    let maxGridNumber;
    let gridItemDimension;
    if( levelSelect === 1 ) {
        maxGridNumber = 100;
        gridItemDimension = 10;
    } else if ( levelSelect === 2 ) {
        maxGridNumber = 81;
        gridItemDimension = 9;
    } else if ( levelSelect === 3 ) {
        maxGridNumber = 49;
        gridItemDimension = 7;
    }
    const bombsArray = generateBombs(maxGridNumber, bombsAmount);
    console.log(bombsArray);
    const maxAttempts = maxGridNumber - bombsArray.length;
    const rightAttemptsArray = [];
    for( let i = 1; i <= maxGridNumber; i++ ) {
        const newGeneratedCell = generateGridItem(i, gridItemDimension);
        newGeneratedCell.addEventListener('click', handleCellClick);
        mainGrid.appendChild(newGeneratedCell);
    }
}




