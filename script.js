const gameboardModule = (() => {

    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

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

    const addEventListenersToGameBoard = (info) => {
        const sections = document.querySelectorAll(".sections")
        sections.forEach(section => {
            section.addEventListener('click', (e) => {
                useMove(e.target, info)
            })
        })
    }

    const startGame = (info) => {
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

        if (gameCheck(info)) {
            return
        }

        changePlayer(info)

        console.log(section, info)
    }

    const gameCheck = (info) => {
        if (checkWinner(info, info.currentPlayer)) {
            // let playerOneScore = document.getElementById('playerOneScore')
            // let playerTwoScore = document.getElementById('playerTwoScore')
            // playerOneScore++
            return true
        } else if (info.round > 8) {
            info.gameOver = true
            return true
        } else {
            return false
        }

    }

    const checkWinner = (info) => {
        let result = false
        winCondition.forEach(condition => {
            if (info.gameboard[condition[0]] === info.gameboard[condition[1]] && info.gameboard[condition[1]] === info.gameboard[condition[2]]) {
                info.gameOver = true
                result = true
            }
        })
    
        return result
    }

    const changePlayer = (info) => {
        info.currentPlayer = info.currentPlayer == "X" ? "O" : "X"
    }
})();