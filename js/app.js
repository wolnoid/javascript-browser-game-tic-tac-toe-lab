/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const boardEl = document.querySelector('.board')
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/

let turn = 'X'
let winner = false
let tie = false
let board = ['', '', '',
             '', '', '',
             '', '', '',]

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

function updateBoard() {
    board.forEach((square, index) => {
        squareEls[index].textContent = square
    })
}

function updateMessage() {
    if (winner === false && tie === false) messageEl.textContent = `${turn}'s turn`
    if (winner === false && tie === true) messageEl.textContent = "It's a draw!"
    if (winner === true) messageEl.textContent = `${winner} wins!`
}

function render() {
    updateBoard()
    updateMessage()
}



function placePiece(index) {
    board[index] = turn
}

function checkForWinner() {
    winningCombos.forEach((winningCombo) => {
        if (board[winningCombo[0]] !== '') {
            if (board[winningCombo[0]] === board[winningCombo[1]] === board[winningCombo[2]]) {
                winner === true
                return
            }
        }
    })
}

function checkForTie() {
    if (winner === true) return

}

function switchPlayerTurn() {
    if (winner === true) return
    if (turn === 'X') turn = 'O'
    else if (turn === 'O') turn = 'X'
}

function handleClick (event, squareIndex) {
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') return
    if (winner === true) return
    placePiece(squareIndex)
    console.log(board)
    console.log(winner)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
}

function init() {

    render()
}

/*----------------------------- Event Listeners -----------------------------*/




boardEl.addEventListener('click', (event)  => {
    if (event.target.classList.contains("sqr")) {
        
        handleClick('', event.target.id)
        
    }
});











init()
updateBoard()



//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
