const gameboardModule = (() => {

    const popUp = document.getElementById('start-Button')
    popUp.addEventListener('click', (e) => {
        e.preventDefault()

        document.getElementById('start-Popup').classList.add('hide')
        
        let info = {
            gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            player1: "X",
            player2: "O",
            round: 0,
            currentPlayer: "X",
            gameOver: false
        }
        startGame(info)
    })

    // const setUpGame = (info) => {
    //     info = {}
    //     info.gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    //     info.player1 = "X"
    //     info.player2 = "O"
    //     info.round = 0
    //     info.currentPlayer = "X"
    //     info.gameOver = false

    //     return(info)
    // }

    const addEventListenersToGameBoard = (info) => {
        const sections = document.querySelectorAll(".sections")
        sections.forEach(section => {
            section.addEventListener('click', (e) => {
                useMove(e.target, info)
            })
        })
    }

    const startGame = (info) => {
        // setUpGame(info)

        addEventListenersToGameBoard(info)

        console.log(info)
    }

    const useMove = (section, info) => {
        if (info.gameOver === true || info.round > 8) {
            return
        }

        if (info.gameboard[section.id] === "X" || info.gameboard[section.id] === "O") {
            return
        }

        info.gameboard[section.id] = info.currentPlayer
        section.textContent = info.currentPlayer
        info.round++

        console.log(section, info)
    }
})();