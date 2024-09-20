
    const board = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let boardState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    function handleCellClick(e) {
            const index = e.target.getAttribute('data-index');

    if (boardState[index] !== '' || !gameActive) {
                return;
            }

    boardState[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkResult();
        }

    function checkResult() {
        let roundWon = false;

    for (let i = 0; i < winningCombinations.length; i++) {
                const [a, b, c] = winningCombinations[i];
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        roundWon = true;
    break;
                }
            }

    if (roundWon) {
        message.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
            }

    if (!boardState.includes('')) {
        message.textContent = "It's a Draw!";
    gameActive = false;
    return;
            }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

    function resetGame() {
        boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.textContent = '';
            board.forEach(cell => (cell.textContent = ''));
        }

        board.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
