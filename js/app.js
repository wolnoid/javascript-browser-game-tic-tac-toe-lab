/*-------------------------------- Constants --------------------------------*/

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

let turn = undefined
let winner = undefined
let tie = undefined
let board = undefined

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('#reset')

/*-------------------------------- Functions --------------------------------*/

function updateBoard() {
    board.forEach((square, index) => {
        squareEls[index].textContent = square
    })
}

function updateMessage() {
    if (winner === false && tie === false) messageEl.textContent = `${turn}'s turn`
    if (winner === false && tie === true) messageEl.textContent = "It's a draw!"
    if (winner === true) messageEl.textContent = `${turn} wins!`
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
            if (board[winningCombo[0]] === board[winningCombo[1]] && board[winningCombo[1]] === board[winningCombo[2]]) {
                winner = true
            }
        }
    })
}

function checkForTie() {
    if (winner === true) return
    if (board.includes('')) return
    tie = true
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
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function init() {
    turn = 'X'
    winner = false
    tie = false
    board = ['', '', '',
             '', '', '',
             '', '', '',]
    render()
}

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', (event)  => {
    if (event.target.classList.contains("sqr")) {
        handleClick('', event.target.id)
    }
});

resetBtnEl.addEventListener('click', ()  => {
    init()
});

/*---------------------------------------------------------------------------*/

init()
