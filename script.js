const gameBoardModule = (() => {
    let gameboard = [];
    return { gameboard };
})();

const displayControllerModule = (() => {
    let testF = () => { console.log("Hello this is a test") };
    return { testF };
})();

const PlayerFactory = (playerName, playerNumber, playerLetter) => {
    const getPlayerName = () => {
        playerName;
        console.log(`${playerName}`)
    }
    const getPlayerNumber = () => {
        playerNumber;
        console.log(`${playerNumber}`)
    }
    const getPlayerLetter = () => {
        playerLetter;
        console.log(`${playerLetter}`)
    }

    return {getPlayerName, getPlayerNumber, getPlayerLetter}
}

displayControllerModule.testF();
const player1 = PlayerFactory("Bob", 1, "X");
const player2 = PlayerFactory("Rob", 2, "O");
player1.getPlayerName()
player1.getPlayerNumber()
player2.getPlayerLetter()