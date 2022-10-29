const gameBoardModule = (() => {
    //set variables
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    player1 = "X"
    player2 = "O"
    currentPlayer = "X"
    gameOver = false
    console.log(gameOver)

    // Cache DOM
    const sectionItems = document.getElementsByClassName("sections")
    const resetButton = document.getElementById("reset")
        
    // Bind events
    const clearBoard = () => {
        for (i = 0; i < 9; i++) {
            gameboard[i].textContent = ''
        }
    }

    for (i = 0; i < sectionItems.length; i++) {
        gameboard[i] = sectionItems[i]
    };

    resetButton.addEventListener("click", clearBoard);
    
    return {
        clearBoard: clearBoard
    };
})();

const displayControllerModule = (() => {
    // set variables
    // const humanPlayerOne = PlayerFactory('X');
    // const humanPlayerTwo = PlayerFactory('O');

    // cache DOM
    const boardPieces = document.querySelectorAll('.sections');
    const fillboardPiece = (e) => {
        e.textContent = "X"
    }
    console.log(boardPieces)
    boardPieces.forEach(boardPiece => 
        // console.log(boardPiece)
        boardPiece.addEventListener('click', console.log("Hello"))
    )
    
    //bind events
})();

const PlayerFactory = (playerSign) => {
    // const getPlayerSign = () => playerSign

    // const getPlayerNumber = () => {
    //     playerNumber;
    //     console.log(`${playerNumber}`)
    // }
    // const getPlayerLetter = () => {
    //     playerLetter;
    //     console.log(`${playerLetter}`)
    // }

    return {}
}