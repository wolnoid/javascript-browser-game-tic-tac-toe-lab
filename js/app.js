/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/




const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 9],
    [0, 4, 9],
    [2, 4, 6],
]


let board = [...squareEls]
let turn = 'X'
let winner = false
let tie = false



function render () {
    updateBoard()
    updateMessage()
}

function updateBoard () {
    board.forEach((square, index) => {
        if (square === '') square.textContent = ''
        if (square === 'X') square.textContent = 'X'
        if (square === 'O') square.textContent = 'O'
    })
}

function updateMessage () {
    if (winner === false && tie === false) messageEl.textContent = `${turn}'s turn`
    if (winner === false && tie === true) messageEl.textContent = "It's a draw!"
    if (winner === true) messageEl.textContent = `${winner} wins!`
}

function handleClick (event) {
    board.addEventListener
}

function init () {

    render()
}

board[0] = 'X'

console.log(board)
console.log(board[0])

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
