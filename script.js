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

    const form = document.getElementById('myForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        const data = Object.fromEntries(formData)
        startGame(data)
    })

    const popUp = document.getElementById('start-Button')
    popUp.addEventListener('click', () => {
        document.getElementById('start-Popup').classList.add('hide')
    })

    const setUpGame = (info) => {
        info.choice = +info.choice
        info.gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        info.player1 = "X"
        info.player2 = "O"
        info.round = 0
        info.currentPlayer = "X"
        info.gameOver = false
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

        if (info.choice === 0) {
            changePlayer(info)
        } else if (info.choice === 1) {
            computerEasy(info)
            info.currentPlayer = "X"
            return
        } else if (info.choice === 2) {
            changePlayer(info)
            computerHard(info)
            if (gameCheck((info))) {
                return
            }
            changePlayer(info)
        }
    }

    const gameCheck = (info) => {
        if (checkWinner(info, info.currentPlayer)) {
            let playerOneScore = document.getElementById('playerOneScore')
            let playerTwoScore = document.getElementById('playerTwoScore')
            let player = info.currentPlayer === "X" ? playerOneScore : playerTwoScore
            console.log(player)
            changeScore(player)
            return true
        } else if (info.round > 8) {
            let tieScore = document.getElementById('tieScore')
            changeScore(tieScore)
            info.gameOver = true
            return true
        } else {
            return false
        }

    }

    const checkWinner = (info, player) => {
        let result = false
        winCondition.forEach(condition => {
            if (info.gameboard[condition[0]] === player &&
                info.gameboard[condition[1]] === player &&
                info.gameboard[condition[2]] === player
            ) {
                result = true
            }
        })
    
        return result
    }

    const changePlayer = (info) => {
        info.currentPlayer = info.currentPlayer == "X" ? "O" : "X"
    }

    const changeScore = (player) => {
        player.textContent += 1
    }

    const computerEasy = (info) => {
        changePlayer(info)

        info.round++
        let availableSpace = info.gameboard.filter(
            (space) => space !== "X" && space !== "O")
            
        let playMove = availableSpace[Math.floor(Math.random() * availableSpace.length)];
        info.gameboard[playMove] = info.player2
        
        setTimeout(() => {
            let section = document.getElementById(`${playMove}`)
            section.textContent = info.player2
            section.classList.add('player2')
        }, 250)

        if (gameCheck(info)) {
            return
        }
        changePlayer(info)
    }

    const computerHard = (info) => {
        info.round++
        const move = minimax(info, "O").index
        info.gameboard[move] = info.player2
        setTimeout(() => {
            let section = document.getElementById(`${move}`)
            section.textContent = info.player2
            section.classList.add('player2')
        }, 250)
    }

    const minimax = (info, player) => {
        let availableSpace = info.gameboard.filter(
            (space) => space !== "X" && space !== "O")
        
        if (checkWinner(info, info.player1)) {
            return {score: -100,}
        } else if (checkWinner(info, info.player2)) {
            return {score: 100,}
        } else if (availableSpace.length === 0) {
            return {score: 0,}
        }
        
        const availableMoves = []
        for (let i = 0; i < availableSpace.length; i++) {
            let move = {}
            move.index = info.gameboard[availableSpace[i]]
            info.gameboard[availableSpace[i]] = player
            if (player === info.player2) {
                move.score = minimax(info, info.player1).score
            } else {
                move.score = minimax(info, info.player2).score
            }

            info.gameboard[availableSpace[i]] = move.index
            availableMoves.push(move)
        }

        let bestMove = 0
        if (player === info.player2) {
            let bestScore = -10000
            for (let i = 0; i < availableMoves.length; i++) {
                if (availableMoves[i].score > bestScore) {
                    bestScore = availableMoves[i].score
                    bestMove = i
                }
            }
        } else {
            let bestScore = 10000
            for (let i = 0; i < availableMoves.length; i++) {
                if (availableMoves[i].score < bestScore) {
                    bestScore = availableMoves[i].score
                    bestMove = i
                }
            }
        }
        return availableMoves[bestMove]
    }
})();