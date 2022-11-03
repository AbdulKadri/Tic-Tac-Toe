const gameboardModule = (() => {

    const setUpGame = (info) => {
        info = {}
        info.gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        info.player1 = "X"
        info.player2 = "O"
        info.round = 0
        info.currentPlayer = "X"
        info.gameOver = false

        return(info)
    }

    const addEventListenersToGameBoard = (info) => {
        const sections = document.querySelectorAll(".sections")
        sections.forEach(section => {
            section.addEventListener('click', (e) => {
                useMove(e.target, info)
            })
        })
    }

    const startGame = (info) => {
        setUpGame(info)

        addEventListenersToGameBoard(info)

        console.log(info)
    }

    const useMove = (section, info) => {
        console.log(section, info)
    }

    startGame()
})();